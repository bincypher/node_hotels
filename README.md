# Node.js Bootcamp by HelloWorld YouTube

This project is a Node.js/MongoDB learning application built during the "Node js bootcamp by helloworld youtube" course. It demonstrates a basic Express API with CRUD operations for hotel staff and menu items, using Mongoose for MongoDB data modeling and connection.

## Project Overview

The app provides:
- A minimal Express server in `server.js`
- MongoDB connection logic in `db.js`
- RESTful routes for `person` (hotel staff) and `menu` (hotel menu items)
- Mongoose schemas for `Person` and `MenuItem`
- Basic validation with enum and required fields

## Key Features

- Create, read, update, and delete hotel staff records
- Create, read, update, and delete menu items
- Filter staff by role: `chef`, `waiter`, `manager`
- Filter menu items by taste: `sweet`, `spicy`, `sour`
- JSON API endpoints for easy testing with Postman or similar tools
- MongoDB Atlas cloud database integration
- Input validation middleware for data integrity
- Centralized configuration management
- Global error handling and 404 responses
- Development mode with auto-reload via npm scripts

## Project Structure

- `server.js` - Main Express entry point
- `db.js` - MongoDB connection handler
- `config.js` - Centralized configuration
- `models/person.js` - Mongoose schema and model for hotel staff
- `models/menu.js` - Mongoose schema and model for menu items
- `routes/personRoutes.js` - REST routes for staff endpoints
- `routes/menuRoutes.js` - REST routes for menu item endpoints
- `middleware/validators.js` - Request validation middleware
- `package.json` - Project dependencies and metadata
- `day01problem*.js`, `day02problem*.js` - Learning practice files from the bootcamp

## Prerequisites

- Node.js installed
- MongoDB Atlas account (free tier available)
- `npm` available

> This project connects to MongoDB Atlas cloud database. Local MongoDB is not required.

## Installation

1. Open a terminal in the project root.
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update `.env` with your MongoDB Atlas URL

```bash
MONGODB_URL=mongodb+srv://username:password@your-cluster.mongodb.net/hotels?retryWrites=true&w=majority
PORT=3000
```

## Running the App

Start the server locally with production mode:

```bash
npm start
```

Or use `nodemon` for development (auto-restart on file changes):

```bash
npm run dev
```

Then visit locally:

- `http://localhost:3000/` - landing endpoint
- `http://localhost:3000/person` - staff CRUD endpoints
- `http://localhost:3000/menu` - menu CRUD endpoints

## Hosted Deployment

This service is deployed at:

- `https://node-hotels-2j1m.onrender.com`

Available API endpoints on the hosted service:

- `https://node-hotels-2j1m.onrender.com/`
- `https://node-hotels-2j1m.onrender.com/person`
- `https://node-hotels-2j1m.onrender.com/menu`

## API Endpoints

### Base route

- `GET /` - Returns a welcome message.

### Person routes

- `POST /person`
  - Create a new staff member.
  - Body example:
    ```json
    {
      "name": "Alice",
      "age": 28,
      "work": "chef",
      "mobile": "1234567890",
      "email": "alice@example.com",
      "address": "123 Main St",
      "salary": 45000
    }
    ```
- `GET /person`
  - Fetch all staff records.
- `GET /person/:worktype`
  - Fetch staff by role.
  - Allowed roles: `chef`, `waiter`, `manager`
- `PUT /person/:id`
  - Update a person by MongoDB document `_id`.
- `DELETE /person/:id`
  - Delete a person by MongoDB document `_id`.

### Menu routes

- `POST /menu`
  - Create a new menu item.
  - Body example:
    ```json
    {
      "name": "Chili Chicken",
      "price": 12.99,
      "taste": "spicy",
      "is_drink": false,
      "ingredients": ["chicken", "chili", "spices"],
      "num_sales": 0
    }
    ```
- `GET /menu`
  - Fetch all menu items.
- `GET /menu/:taste`
  - Fetch menu items by taste.
  - Allowed tastes: `sweet`, `spicy`, `sour`
- `PUT /menu/:id`
  - Update a menu item by MongoDB document `_id`.
- `DELETE /menu/:id`
  - Delete a menu item by MongoDB document `_id`.

## Data Model Summary

### Person

- `name`: String, required
- `age`: Number, required, minimum 0
- `work`: String, required, one of `chef`, `waiter`, `manager`
- `mobile`: String, required
- `email`: String, required, unique
- `address`: String
- `salary`: Number, default `0`

### MenuItem

- `name`: String, required
- `price`: Number, required
- `taste`: String, enum `sweet`, `spicy`, `sour`
- `is_drink`: Boolean, default `false`
- `ingredients`: Array of strings
- `num_sales`: Number, default `0`

## Testing Steps

There is no automated test suite in this repo. Use manual API testing with Postman, Insomnia, curl, or HTTPie.

Example curl commands:

```bash
# Create a person
curl -X POST http://localhost:3000/person \
  -H "Content-Type: application/json" \
  -d '{"name":"Bob","age":32,"work":"waiter","mobile":"9876543210","email":"bob@example.com"}'

# Get all people
curl http://localhost:3000/person

# Create a menu item
curl -X POST http://localhost:3000/menu \
  -H "Content-Type: application/json" \
  -d '{"name":"Lemonade","price":3.5,"taste":"sweet","is_drink":true}'

# Get sweet menu items
curl http://localhost:3000/menu/sweet
```

## Standard Operating Procedures (SOP)

1. Start MongoDB before running the server.
2. Run `npm install` once after cloning.
3. Set up `.env` with MongoDB Atlas URL (use `.env.example` as template).
4. Start the app with `npm start` or `npm run dev` (development mode).
5. Use JSON body requests for `POST` and `PUT` actions.
6. Use proper enums for filters: `chef`, `waiter`, `manager`, `sweet`, `spicy`, `sour`.
7. Check the terminal for MongoDB connectivity and request logging.

## Improvements Made

- ✅ **Centralized Config**: All settings in `config.js` for easier management
- ✅ **Environment Variables**: MongoDB URL and PORT configurable via `.env`
- ✅ **Input Validation**: Middleware validates person and menu item data before processing
- ✅ **Error Handling**: Global error handler catches and formats all errors
- ✅ **NPM Scripts**: `npm start` and `npm run dev` for convenient server startup
- ✅ **Better Logging**: Improved console messages for development visibility

## Future Improvements

- Add automated tests and a `npm test` script
- Add environment variables for MongoDB connection and port
- Add request validation middleware (e.g. `express-validator`)
- Add a frontend UI for hotel staff and menu management
- Add authentication and authorization
- Add pagination for listing endpoints

## FAQ

Q: What database does this use?
A: MongoDB via Mongoose, using MongoDB Atlas for cloud storage. When running locally it can also fall back to a local MongoDB URL if `MONGODB_URL` is not set.

Q: Is there a live deployment?
A: Yes — the app is hosted at `https://node-hotels-2j1m.onrender.com`.

Q: How do I change the server port?
A: Update `app.listen(3000, ...)` in `server.js` or replace with `process.env.PORT || 3000`.

Q: Why does `POST /person` require a unique email?
A: The `Person` schema sets `email` as `unique: true` to prevent duplicate staff records.

Q: What happens if I use an invalid taste or work filter?
A: The API returns a `404` with an error message for invalid filter values.

## Notes

- The repo also contains tutorial files like `day01problem01.js` through `day02problem06.js` from the bootcamp.
- `main.js` is referenced as the package main entrypoint but is not present in this project; the actual app runs from `server.js`.

---

Enjoy exploring the hotel staff and menu API built with Node.js, Express, and MongoDB!