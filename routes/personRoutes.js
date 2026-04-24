import express from 'express';
const router = express.Router();
import Person from '../models/person.js'
import { validatePerson } from '../middleware/validators.js'

router.post('/', validatePerson, async (req, res) => {
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
router.get('/', async (req, res) => {
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


router.get('/:worktype', async (req, res) => {

  try {
    const workType = req.params.worktype;
    if (workType == 'chef' || workType == 'waiter' || workType == 'manager') {
      const response = await Person.find({ work: workType });
      console.log('response fetched');
      res.status(200).json(response)

    } else {
      res.status(404).json({ error: 'Invalid work type' })
    }
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const updatedPersondata = req.body; //Updated data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedPersondata, {
      new: true, //Return the updated document
      runValidators: true, //Run Mongoose validation
    })

    if (!response) {
      res.status(404).json({ error: 'Person not found' })
    }
    console.log('data Updated');
    res.status(200).json(response)
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: 'Person not found' })
    }
    console.log('data deleted');
    res.status(200).json(response)
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

export default router;