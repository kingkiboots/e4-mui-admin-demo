import {
  requestDataRemoval,
  requestDataSharing,
} from "../model/sessionStorageShareHandlers";

export type StorageType = "local" | "session";
type StorageValue<T> = T | null;
type StorageSubscriber<T> = (value: StorageValue<T>) => void;

interface StorageChangeEventDetail<T> {
  key: string;
  value: StorageValue<T>;
  source: "direct" | "other-tab";
}

export interface StorageOptions {
  cacheEnabled?: boolean;
  shareBetweenTabs?: boolean;
}

class StorageManager<T> {
  private cache = new Map<string, T>();
  private readonly options: StorageOptions;

  private subscribers = new Map<string, Set<StorageSubscriber<T>>>();
  private storage: Storage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static instances = new Map<StorageType, StorageManager<any>>();

  private readonly STORAGE_CHANGE_EVENT = "browserStorageChange";

  private constructor(
    type: StorageType,
    options: StorageOptions = { cacheEnabled: true }
  ) {
    this.storage = this.initializeStorage(type);
    this.options = options;
    this.initializeEventListeners();
  }

  private initializeStorage(type: StorageType): Storage {
    return type === "local" ? window.localStorage : window.sessionStorage;
  }

  private initializeEventListeners(): void {
    if (this.isLocalStorage()) {
      this.setupStorageEventListener();
    }
    this.setupCustomEventListener();
  }

  private isLocalStorage(): boolean {
    return this.storage === window.localStorage;
  }

  private setupStorageEventListener() {
    window.addEventListener("storage", (event) => {
      if (event.storageArea === window.localStorage && event.key) {
        if (typeof event.newValue !== "object") {
          return event.newValue;
        }

        try {
          const newValue = event.newValue ? JSON.parse(event.newValue) : null;
          this.notifySubscribers(event.key, newValue);
        } catch (error) {
          console.error("Error parsing storage event value:", error);
          console.debug("Error parsing storage event value:", event);
          return event.newValue;
        }
      }
    });
  }

  private setupCustomEventListener() {
    // 현재 탭의 변경사항 감지
    window.addEventListener(this.STORAGE_CHANGE_EVENT, ((
      event: CustomEvent<StorageChangeEventDetail<T>>
    ) => {
      const { key, value } = event.detail;
      this.notifySubscribers(key, value);
    }) as EventListener);
  }

  dispatchStorageEvent(key: string, value: StorageValue<T>) {
    const event = new CustomEvent<StorageChangeEventDetail<T>>(
      this.STORAGE_CHANGE_EVENT,
      {
        detail: {
          key,
          value,
          source: "direct",
        },
      }
    );
    window.dispatchEvent(event);
  }
  static getInstance<T>(
    type: StorageType,
    options?: StorageOptions
  ): StorageManager<T> {
    if (!this.instances.has(type)) {
      this.instances.set(type, new StorageManager<T>(type, options));
    }
    return this.instances.get(type) as StorageManager<T>;
  }

  subscribe(key: string, callback: StorageSubscriber<T>): () => void {
    if (!this.subscribers.has(key)) {
      this.subscribers.set(key, new Set());
    }

    const keySubscribers = this.subscribers.get(key)!;
    keySubscribers.add(callback);

    // 초기값 전달
    const currentValue = this.get(key);
    callback(currentValue);

    return () => {
      keySubscribers.delete(callback);
      if (keySubscribers.size === 0) {
        this.subscribers.delete(key);
      }
    };
  }

  set(key: string, value: T): void {
    //NOTE -  얘를 구독하는 어떤 애가 캐싱을 안쓴다고 해도, 싱글톤을 쓰고 있는 다른애들 중 캐싱 데이터를 구독하는 애들이 이를 감지해야 하므로
    // set, remove는 항상 캐시 데이터도 새로 세팅
    // if (this.options.cacheEnabled) {
    this.cache.set(key, value);
    // }
    try {
      const stringValue = JSON.stringify(value);
      this.storage.setItem(key, stringValue);
      this.dispatchStorageEvent(key, value);
      if (this.options.shareBetweenTabs) {
        requestDataSharing(key);
      }
    } catch (error) {
      console.error("Error saving to Storage:", error);
    }
  }

  get(key: string): StorageValue<T> {
    if (this.options.cacheEnabled && this.cache.has(key)) {
      return this.cache.get(key) ?? null;
    }

    try {
      const item = this.storage.getItem(key);
      const parsed = item ? JSON.parse(item) : null;
      if (this.options.cacheEnabled && parsed) this.cache.set(key, parsed);
      return parsed;
    } catch (error) {
      console.error("Error reading from Storage:", error);
      return null;
    }
  }

  remove(key: string): void {
    //NOTE -  얘를 구독하는 어떤 애가 캐싱을 안쓴다고 해도, 싱글톤을 쓰고 있는 다른애들 중 캐싱 데이터를 구독하는 애들이 이를 감지해야 하므로
    // set, remove는 항상 캐시 데이터도 새로 세팅
    // if (this.options.cacheEnabled) {
    this.cache.delete(key);
    // }

    this.storage.removeItem(key);
    this.dispatchStorageEvent(key, null);

    if (this.options.shareBetweenTabs) {
      requestDataRemoval(key);
    }
  }

  private notifySubscribers(key: string, value: StorageValue<T>): void {
    const keySubscribers = this.subscribers.get(key);
    if (keySubscribers) {
      keySubscribers.forEach((callback) => callback(value));
    }
  }
}

export default StorageManager;
