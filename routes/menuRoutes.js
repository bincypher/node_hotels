import express from 'express';
import MenuItem from '../models/menu.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newItem = new MenuItem(data);
    await newItem.save();

    res.status(200).json({
      message: "Item saved successfully",
      item: newItem
    });
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

//GET method to get the menu
router.get('/', async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).json({
      message: "Item details fetched successfully",
      data: data
    });
  } catch (error) {
    console.error("❌ Error:", error);

    res.status(500).json({
      error: error.message // optional: send real error to Postman
    });
  }
})

router.get('/:taste', async (req,res) =>{
    
      try {
        const taste = req.params.taste;
        if (taste == 'sweet' || taste == 'spicy' || taste == 'sour') {
          const response = await MenuItem.find({ taste: taste });
          console.log('response fetched');
          res.status(200).json(response)
    
        } else {
          res.status(404).json({ error: 'Invalid taste details' })
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
    const itemId = req.params.id; //extract the id from the URL parameter
    const updatedItemdata = req.body; //Updated data for the person

    const response = await MenuItem.findByIdAndUpdate(itemId, updatedItemdata, {
      new: true, //Return the updated document
      runValidators: true, //Run Mongoose validation
    })

    if (!response) {
      res.status(404).json({ error: 'Item not found' })
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
    const itemId = req.params.id; //extract the id from the URL parameter
    const response = await MenuItem.findByIdAndDelete(itemId);
    if (!response) {
      return res.status(404).json({ error: 'item not found' })
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