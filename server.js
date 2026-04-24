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


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
