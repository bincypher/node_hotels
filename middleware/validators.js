import { config } from '../config.js';

// Middleware to validate person data
export const validatePerson = (req, res, next) => {
  const { name, age, work, mobile, email } = req.body;

  // Basic validations
  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (!age || typeof age !== 'number' || age < config.MIN_AGE) {
    return res.status(400).json({ error: `Age must be a number >= ${config.MIN_AGE}` });
  }
  if (!work || !config.VALID_WORK_TYPES.includes(work)) {
    return res.status(400).json({ error: `Invalid work type. Must be one of: ${config.VALID_WORK_TYPES.join(', ')}` });
  }
  if (!mobile || !/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ error: 'Mobile must be a 10-digit number' });
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};

// Middleware to validate menu item data
export const validateMenuItem = (req, res, next) => {
  const { name, price, taste } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ error: 'Invalid name' });
  }
  if (!price || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number' });
  }
  if (taste && !config.VALID_TASTES.includes(taste)) {
    return res.status(400).json({ error: `Invalid taste. Must be one of: ${config.VALID_TASTES.join(', ')}` });
  }

  next();
};
