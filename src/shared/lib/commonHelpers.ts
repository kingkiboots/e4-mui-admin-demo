type IsObjectSomethingFunction = <T = object, S = object>(
  obj: T | null | undefined,
  comparison?: S
) => boolean;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IsAnySomethingFunction = (obj: any, comparison?: object) => boolean;
type NvlFunction = <T>(obj: T, def: T) => T;
// NOTE - 임시주석
// type Primitive = string | number | boolean | symbol;

const isTypeOf: IsObjectSomethingFunction = (obj, objType) => {
  return (obj as object).constructor == objType;
};

const isObject: IsObjectSomethingFunction = (obj) => {
  return obj instanceof Object && obj.constructor === Object;
};

const isNull = <T>(obj: T | null | undefined): obj is null | undefined => {
  return obj == null && (obj == undefined || typeof obj === "undefined");
};

const isEmpty: IsObjectSomethingFunction = (obj) => {
  if (typeof obj == "string") if (obj.length < 1) return true;
  if (Array.isArray(obj) && obj.length === 0) return true;
  if (isObject(obj) && Object.keys(obj!).length === 0) return true;
  return false;
};

const isNullOrEmpty = <T>(
  obj: T | null | undefined
): obj is null | undefined => {
  if (isNull(obj)) return true;
  return isEmpty(obj);
};

const isEveryNull = <T>(...objArr: (T | null | undefined)[]) => {
  return objArr.every(isNull);
};
const isSomeNull = <T>(...objArr: (T | null | undefined)[]) => {
  return objArr.every(isNull);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isEveryNullOrEmpty = (...objArr: any[]) => {
  return objArr.every((obj) => isNullOrEmpty(obj));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isSomeNullOrEmpty = (...objArr: any[]) => {
  return objArr.some((obj) => isNullOrEmpty(obj));
};

const isNullOrBlank = <T>(
  obj: T | null | undefined
): obj is null | undefined => {
  if (isNull(obj)) return true;
  if (typeof obj == "string") if (obj.trim().length < 1) return true;
  return false;
};

const nvl: NvlFunction = (obj, def) => {
  return isNull(obj) ? def : obj;
};

const nvlInCaseEmpty: NvlFunction = (obj, def) => {
  return isNullOrEmpty(obj) ? def : obj;
};

const nvlInCaseBlank: (obj: string, def: string) => string = (
  obj: string,
  def: string
) => {
  return isNullOrBlank(obj) ? def : obj.trim();
};

const isNumber: IsAnySomethingFunction = (obj) => {
  if (isNull(obj)) return false;
  return /^[0-9]+$/.test(obj) ? true : false;
};

const isEnglish: IsAnySomethingFunction = (obj) => {
  if (isNull(obj)) return false;
  return /^[a-zA-Z]+$/.test(obj) ? true : false;
};

/**
 * HHmmss 형식이 맞는지 검증
 * @param value 검증할 값
 * @returns 검증 여부
 */
const isHmsValid = (value: string) => {
  if (!value) return "";
  if (value.length > 6) return false;
  return /^(0[0-9]|1[0-9]|2[0-3])(0[1-9]|[0-5][0-9])(0[1-9]|[0-5][0-9])$/.test(
    value
  );
};

const br2Nl: IsAnySomethingFunction = (obj) => {
  return isNull(obj) ? obj : obj.replace(/<br\s*\/?>/gi, "\n");
};

const nl2Br: IsAnySomethingFunction = (obj) => {
  return isNull(obj)
    ? obj
    : obj.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1<br>");
};

const decodeTag = (obj: string): string => {
  let str = obj;
  const replacements: { [key: string]: string } = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#039;": "'",
    "&#034;": '"',
  };

  if (!isNull(obj)) {
    str = str.replace(
      /(&lt;|&gt;|&amp;|&quot;|&#039;|#034;)/gi,
      function (match) {
        return replacements[match as keyof typeof replacements] || match;
      }
    );
  }
  return str;
};

const isSameJsonObj: IsObjectSomethingFunction = (obj1, obj2) => {
  return Object.is(JSON.stringify(obj1), JSON.stringify(obj2));
};

const deepMergeObject = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: Record<any, any> = {},
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  source: Record<any, any> = {}
) => {
  Object.entries(source).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      deepMergeObject((target[key] = target[key] ?? {}), value);
      return;
    }
    target[key] = value;
  });
  return target;
};

const lodashRange = (start: number, end: number, step = 1) => {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
};

const replaceList = <T>(list: T[], replaceIndex: number, replaceElement: T) => {
  if (replaceIndex == 0) {
    // first
    return [replaceElement, ...list.slice(1)];
  } else if (list.length == replaceIndex + 1) {
    // last
    return [...list.slice(0, replaceIndex), replaceElement];
  } else {
    return [
      ...list.slice(0, replaceIndex),
      replaceElement,
      ...list.slice(replaceIndex + 1),
    ];
  }
};

const shallowCopy = (target: object) => ({ ...target });
const deepCopy = <T>(obj: T): T => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const deepCopyObj: T = (Array.isArray(obj) ? [] : {}) as T;

  for (const key in obj) {
    deepCopyObj[key] = deepCopy(obj[key]);
  }

  return deepCopyObj;
};

const removeDuplicate = <T>(array?: T[]) => {
  if (!(array && array.length > 0)) {
    console.debug("removeDuplicate ::: received array is undefined!!");
    return array;
  }

  const isSetAvailable = typeof Set !== "undefined" && Set.prototype.has;
  if (isSetAvailable) {
    return [...new Set(array)];
  }

  const isReduceAvailable =
    Array.prototype.reduce !== undefined &&
    typeof Array.prototype.reduce === "function";
  if (isReduceAvailable) {
    return array.reduce<T[]>(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );
  }

  return array.filter((item, index) => array.indexOf(item) === index);
};

const removeDuplicateObject = <T>(array: T[], ...indexParams: (keyof T)[]) => {
  const isSetAvailable = typeof Set !== "undefined" && Set.prototype.has;

  if (isSetAvailable) {
    const seen = new Set<string>();
    return array.filter((item) => {
      // Create a composite key from all specified properties
      const compositeKey = indexParams
        .map((param) => String(item[param]))
        .join("|");

      if (seen.has(compositeKey)) {
        return false;
      }
      seen.add(compositeKey);
      return true;
    });
  }

  const isReduceAvailable =
    Array.prototype.reduce !== undefined &&
    typeof Array.prototype.reduce === "function";

  if (isReduceAvailable) {
    return array.reduce((acc: T[], current: T) => {
      const isDuplicate = acc.some((item) =>
        indexParams.every((param) => item[param] === current[param])
      );

      if (!isDuplicate) {
        return [...acc, current];
      }
      return acc;
    }, []);
  }

  // Fallback logic when neither Set nor reduce is available
  const seen: string[] = [];
  return array.filter((item) => {
    const compositeKey = indexParams
      .map((param) => String(item[param]))
      .join("|");

    if (seen.indexOf(compositeKey) !== -1) {
      return false;
    }
    seen.push(compositeKey);
    return true;
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array?: Array<any>) => {
  if (!array) {
    console.error("shuffleArray ::: received array is undefined!!");
    return array;
  }
  array.sort(() => Math.random() - 0.5);
  return [...array];
};

const chunk = <T>(data: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  let index = 0;
  while (index < data.length) {
    chunkedArr.push(data.slice(index, index + size));
    index += size;
  }
  return chunkedArr;
};

const joinString = (...args: string[]) => {
  return args.filter(Boolean).join(" ");
};

const joinClassNames = (...args: string[]) => {
  return joinString(...args);
};

const getByteSize = (str?: string, koreanAs2Byte?: boolean) => {
  if (!str || isNullOrEmpty(str)) {
    return 0;
  }
  return koreanAs2Byte ? getByteSizeOfEUCKR(str) : new Blob([str]).size;
};
const getByteSizeOfEUCKR = (str: string): number => {
  let size = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    size += charCode >= 0xe000 || charCode <= 0x80 ? 1 : 2;
  }
  return size;
};

/**
 * 
 * @deprecated 예)
const
diningInfosList =
foSort
(diningInfos,
'diningType'
,
'ASC'
);
 * @param object 정렬할 원본  JSON 배열 Data
 * @param key JSON Data 에서 정렬 기준 키 값
 * @param sortType 정렬 기준 (오름차순 / 내림차순)
 * @returns 
 */
function foSort<T>(object: T[], key: keyof T, sortType: "ASC" | "DESC"): T[] {
  if (sortType === "ASC") {
    return object.sort((a, b) => ASC(a[key], b[key]));
  }
  return object.sort((a, b) => DESC(a[key], b[key]));
}

function ASC<T>(a: T, b: T): number {
  const aValue = typeof a === "string" ? a.toUpperCase() : a;
  const bValue = typeof b === "string" ? b.toUpperCase() : b;

  return aValue > bValue ? 1 : -1;
}

function DESC<T>(a: T, b: T): number {
  const aValue = typeof a === "string" ? a.toUpperCase() : a;
  const bValue = typeof b === "string" ? b.toUpperCase() : b;

  return aValue < bValue ? 1 : -1;
}

type DataRateUnit = "kb" | "mb" | "gb" | "tb";
const getDataSize = (size: number, unit: DataRateUnit) => {
  const conversionFactors: Record<DataRateUnit, number> = {
    kb: 1024,
    mb: 1024 ** 2,
    gb: 1024 ** 3,
    tb: 1024 ** 4,
  };

  const factor = conversionFactors[unit] ?? 1024;
  return size * factor;
};

type TimeRateUnit = "sec" | "min" | "hour" | "day";
const getTimeMilliseconds = (time: number, unit: TimeRateUnit) => {
  const conversionFactors: Record<TimeRateUnit, number> = {
    sec: 1000,
    min: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  };

  const factor = conversionFactors[unit] ?? 1000;
  return time * factor;
};

const padEnd = <T>(array: T[], length: number, fillValue?: T) => {
  if (array.length >= length) {
    return array.slice(0, length);
  }
  return Object.assign(new Array(length).fill(fillValue ?? null), array);
};

// 문자열의 byte 크기 계산 함수 (UTF8 기준)
//LINK - https://namu.wiki/w/UTF-8#s-3
const getByteLength = (str: string): number => {
  let byteLength = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x7f) {
      byteLength += 1;
    } else if (charCode <= 0x7ff) {
      byteLength += 2;
    } else if (charCode <= 0xffff) {
      byteLength += 3;
    } else {
      byteLength += 4;
    }
  }
  return byteLength;
};

// byte 크기 초과 여부 확인 함수
const isExceedByteLimit = (str: string, maxByte: number): boolean => {
  return getByteLength(str) > maxByte;
};

// 최대 byte에 맞춰 문자열 자르기 함수
const sliceByByte = (str: string, maxByte: number): string => {
  if (maxByte < 0) throw new Error("maxByte must be positive");
  if (!str) return "";

  let byteLength = 0;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charByteLength = getByteLength(char);

    if (byteLength + charByteLength <= maxByte) {
      result += char;
      byteLength += charByteLength;
    } else {
      break;
    }
  }

  return result;
};

// LINK - https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
const base64ToBytes = (base64: string) => {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m) => m.charCodeAt(0));
};

// LINK - https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
const bytesToBase64 = (bytes: Uint8Array) => {
  const binString = String.fromCodePoint(...bytes);
  return btoa(binString);
};

const throwError = (message: string, name?: string, stack?: string) => {
  const error = new Error(message);
  if (name) {
    error.name = name;
  }
  if (stack) {
    error.stack = stack;
  }

  throw error;
};

const readOnly = <T>(obj: T): Readonly<T> => {
  return Object.freeze({ ...obj }) as Readonly<T>;
};

const sleep = async (milliseconds: number) => {
  // 재시도 전 잠시 대기
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

/**
 * Tag 들 제외하고 text 만 뱉는 함수
 * @param html
 * @returns
 */
const extractTextContentFromHtml = (html: string): string => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  return tempDiv.textContent || tempDiv.innerText || "";
};

export {
  br2Nl,
  decodeTag,
  isEnglish,
  isHmsValid,
  isNull,
  isEmpty,
  isNullOrBlank,
  isNullOrEmpty,
  isEveryNull,
  isSomeNull,
  isEveryNullOrEmpty,
  isSomeNullOrEmpty,
  isNumber,
  isObject,
  isSameJsonObj,
  isTypeOf,
  deepMergeObject,
  lodashRange,
  nl2Br,
  nvl,
  nvlInCaseBlank,
  nvlInCaseEmpty,
  replaceList,
  shallowCopy,
  deepCopy,
  removeDuplicate,
  removeDuplicateObject,
  shuffleArray,
  chunk,
  joinString,
  joinClassNames,
  getByteSize,
  foSort,
  getDataSize,
  getTimeMilliseconds,
  padEnd,
  isExceedByteLimit,
  getByteLength,
  sliceByByte,
  base64ToBytes,
  bytesToBase64,
  throwError,
  readOnly,
  sleep,
  extractTextContentFromHtml,
};
