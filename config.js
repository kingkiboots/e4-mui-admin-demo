import fs from "fs";
fs.writeFileSync(
  ".env.local",
  `
// SYSTEM
VITE_NODE_ENV='dev'
VITE_APP_BASE_HREF='http://localhost:5173'

// API
VITE_API_ENDPOINT=http://localhost:8080
VITE_API_DELAY=100
VITE_API_STORAGE_MODE=session

// CRYPTO
VITE_AES_KEY=''
VITE_AES_IV=''
`
);
