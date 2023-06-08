const axios = require('axios');
const Transportation = require('../Models/transportationModel');



//creating transportation model urself
const createTransportation = async (req, res) => {
    try {
      const { name, description, imageUrl, type, fromLocation, toLocation, departureTime, arrivalTime, price } = req.body;
      const transportation = new Transportation({
        name,
        description,
        imageUrl,
        type,
        fromLocation,
        toLocation,
        departureTime,
        arrivalTime,
        price,
      });
      await transportation.save();
      return res.status(201).json({ transportation });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } //end create


//get all transportations
const getAllTransportations = async (req, res) => {
  try {
    const transportations = await Transportation.find().populate('fromLocation').populate('toLocation reviews');
    return res.status(200).json({ transportations });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}/// end get all 

  
//get transportation by name

  const getTransportationsByName = async (req, res) => {
    try {
      const { name } = req.query;
      const transportation = await Transportation.find({ name: { $regex: name, $options: 'i' } }).populate('fromLocation').populate('toLocation');//.populate('reviews');
  
      if (!transportation) {
        return res.status(404).json({ message: 'transportation not found' });
      }
  
      res.status(200).json({ transportation: transportation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //end get by name
  

//update transportation by name
const updateTransportationByName = async (req, res) => {
    try {

      const { name, description, imageUrl, type, fromLocation, toLocation, departureTime, arrivalTime, price } = req.body;
  
      const updatedTransportation = await Transportation.findOneAndUpdate(
        { name },
        {
          description,
          imageUrl,
          type,
          fromLocation,
          toLocation,
          price,
            departureTime,
            arrivalTime
        },
        { new: true }
      ).populate('fromLocation').populate('toLocation');//.populate('reviews');
  
      if (!updatedTransportation) {
        return res.status(404).json({ message: 'transportation not found' });
      }
  
      res.status(200).json({ transportation: updatedTransportation });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //update fucntion end



  //delete transportation
  const deleteTransportationByName = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Delete the location by name
      const result = await Transportation.deleteOne({ name });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Transportation not found' });
      }
  
      return res.status(200).json({ message: 'transportation deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


  module.exports = {
    createTransportation,
    getAllTransportations,
    getTransportationsByName,
    updateTransportationByName,
    deleteTransportationByName
}
  