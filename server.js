import express from 'express'
import connectDB from './db.js'
import Person from './models/person.js'

const app = express()
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World! this endpoint can help you get employee details of our hotel')
})

app.post('/person', async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);
    await newPerson.save();

    res.status(200).json({
      message: "User saved successfully",
      user: newPerson
    });
  } catch (error) {
    console.error("❌ Error:", error); 

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }

})


//GET method to get the person
app.get('/people',async (req,res) => {
  try {
    const data = await Person.find();
    res.status(200).json({
      message: "User details fetched successfully",
      data: data
    });
  } catch (error) {
    console.error("❌ Error:", error); 

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
