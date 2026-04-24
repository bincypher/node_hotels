// Centralized Configuration
export const config = {
  // Server
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  // Database
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/hotels',

  // API
  API_VERSION: 'v1',

  // Validation Rules
  VALID_WORK_TYPES: ['chef', 'waiter', 'manager'],
  VALID_TASTES: ['sweet', 'spicy', 'sour'],

  // Constraints
  MIN_AGE: 18,
  MAX_SALARY: 100000,
};

export default config;
