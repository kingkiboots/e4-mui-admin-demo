import { useCallback, useEffect, useState } from "react";
// import { Cookies } from "react-cookie";

import { isSameJsonObj } from "./commonHelpers";
import type {
  StorageOptions,
  StorageType,
} from "./browserStorageManageHelpers";
import StorageManager from "./browserStorageManageHelpers";

//SECTION - 쿠키
// LINK -  https://www.npmjs.com/package/react-cookie
interface CookieGetOptions {
  doNotParse?: boolean;
  doNotUpdate?: boolean;
}

interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | "none" | "lax" | "strict";
  partitioned?: boolean;
}

interface IStorage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem(key: string, value: string, options?: any): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem(key: string, options?: any): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeItem(key: string, options?: any): void;
  clear(name?: string): void;
}

// Cookie storage adapter
// class CookieStorage implements IStorage {
//   private cookies: Cookies;
//   private defaultSetOptions: CookieSetOptions = {
//     path: "/",
//   };
//   private defaultGetOptions: CookieGetOptions = {
//     doNotParse: true,
//   };

//   constructor() {
//     this.cookies = new Cookies();
//   }

//   setItem(key: string, value: string, options?: CookieSetOptions): void {
//     this.cookies.set(key, value, { ...this.defaultSetOptions, ...options });
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   getItem(key: string, options?: CookieGetOptions): any {
//     const data = this.cookies.get(key, {
//       ...this.defaultGetOptions,
//       ...options,
//     });

//     return data;
//   }

//   removeItem(key: string, options?: CookieSetOptions): void {
//     this.cookies.remove(key, { ...this.defaultSetOptions, ...options });
//     /*
//     {
//       domain: ".localhost.com",
//       path: "/",
//       ...options,
//     })
//     */
//   }

//   clear(): void {}
// }

type IStorageType = StorageType | "cookie";
class IBrowserStorageController {
  readonly storage: IStorage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private storageManager: StorageManager<any> | undefined;

  constructor(storageType: IStorageType) {
    switch (storageType) {
      case "local":
        this.storage = window.localStorage;
        this.storageManager = StorageManager.getInstance(storageType);
        break;
      case "session":
        this.storage = window.sessionStorage;
        this.storageManager = StorageManager.getInstance(storageType);
        break;
      // case "cookie":
      //   this.storage = new CookieStorage();
      //   break;
      default:
        throw new Error("Unsupported storage type");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setItem(key: string, value: any, options?: CookieSetOptions): void {
    if (this.storage instanceof Storage) {
      this.storageManager?.set(key, value);
      return;
    }

    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    this.storage.setItem(key, stringValue, options);
  }

  getItem<T>(key: string, options?: CookieGetOptions): T | undefined {
    const value = this.storage.getItem(key, options);
    if (!value) {
      return undefined;
    }

    if (options?.doNotParse) return value as T;

    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  removeItem(key: string, options?: CookieSetOptions): void {
    if (this.storage instanceof Storage) {
      this.storageManager?.remove(key);
      return;
    }

    this.storage.removeItem(key, options);
  }

  //STUB - 불필요할 것 같아서 지움
  // clear(): void {
  //   this.storage.clear();
  // }
}

// const cookieController = new IBrowserStorageController("cookie");
const sessionStorageController = new IBrowserStorageController("session");
const localStorageController = new IBrowserStorageController("local");

//NOTE - 원래는 BrowserStorageController는 클래스 였음. 하지만 많은, 그리고 모든 페이지에서 getBrowserStorageController 하기에는
// 1. 함수형 프로그래밍에서 새로운 객체 생성하면 그만큼 메모리 잡아 먹고 가비지 컬렉션도 안된다. => 성능 이슈 야기 가능
// 2. 다른 곳에서 다 new BrowserStorageController(storageType) 하고 있음. 그러므로 바뀌는 걸 최소화 하기 위해 아래와 같이 변경
export const getBrowserStorageController = (
  storageType: "local" | "session" | "cookie"
) => {
  switch (storageType) {
    case "local":
      return localStorageController;
    case "session":
      return sessionStorageController;
    // case "cookie":
    //   return cookieController;
    default:
      throw new Error("Unsupported storage type");
  }
};

export const useBrowserStorage = <T>(
  storageType: StorageType,
  key: string,
  initialValue: T,
  options?: StorageOptions
) => {
  const storageManager = StorageManager.getInstance<T>(storageType, options);

  const [value, setValue] = useState<T>(() => {
    const storedValue = storageManager.get(key);
    return storedValue !== null ? storedValue : initialValue;
  });

  // subscriber 등록
  useEffect(() => {
    const unsubscribe = storageManager.subscribe(key, (newValue) => {
      setValue((prev) => {
        return isSameJsonObj(prev, newValue) ? prev : (newValue as T);
      });
    });

    return unsubscribe;
  }, []);

  const updateValue = useCallback((newValue: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const valueToStore =
        newValue instanceof Function ? newValue(prev) : newValue;

      storageManager.set(key, valueToStore);
      return isSameJsonObj(prev, valueToStore) ? prev : (newValue as T);
    });
  }, []);

  const removeValue = useCallback(() => {
    storageManager.remove(key);
  }, [key]);

  return [value, updateValue, removeValue] as const;
};
