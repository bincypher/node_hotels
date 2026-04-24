// Load environment variables FIRST, before any other imports
import './env.js';

// Now import other modules
import express from 'express'
import connectDB from './db.js'

const app = express()
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World! Welcome to our Hotel')
})

//import the router files
import personRoutes from './routes/personRoutes.js';
import menuItemRoutes from './routes/menuRoutes.js';

//use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


const PORT = process.env.PORT || 3000;
// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message,
    status: err.status || 500
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📊 Using MongoDB: ${process.env.MONGODB_URL ? 'Atlas' : 'Local'}`);
});
