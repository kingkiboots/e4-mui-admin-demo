export const APP_CONFIG = {
  SYSTEM: {
    NODE_ENV: import.meta.env?.VITE_NODE_ENV,
    BASE_HREF: import.meta.env?.VITE_APP_BASE_HREF,
  },
  API: {
    ENDPOINT: import.meta.env?.VITE_API_ENDPOINT,
    DELAY: import.meta.env?.VITE_API_DELAY,
    STORAGE_MODE: import.meta.env?.VITE_API_STORAGE_MODE,
  },
  CRYPTO: {
    AES_KEY: import.meta.env?.VITE_AES_KEY,
    AES_IV: import.meta.env?.VITE_AES_IV,
  },
};
