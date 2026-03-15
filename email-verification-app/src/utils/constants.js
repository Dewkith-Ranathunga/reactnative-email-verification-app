// Use localhost for web, 10.0.2.2 for Android emulator
const isWeb = typeof window !== 'undefined';
export const BASE_URL = isWeb 
  ? "http://localhost:5077/api/users"
  : "http://10.0.2.2:5077/api/users";
