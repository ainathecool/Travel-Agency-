const Activity = require('../Models/activityModel');




// Create a new activity
const createActivity = async (req, res) => {
    try {
      const { name, description, imageUrl, price, location, rating } = req.body;
  
      const activity = new Activity({
        name,
        description,
        imageUrl,
        price,
        location,
        rating,
        reviews: [],
      });
  
      await activity.save();
  
      return res.status(201).json({ activity });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } //end create


  //get all activities
const getAllActivities = async (req, res) => {
    try {
      const activities = await Activity.find().populate('location reviews');
      return res.status(200).json({ activities: activities });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }/// end get all 


  //get axctivity by name

  const getActivityByName = async (req, res) => {
    try {
      const { name } = req.query;
      const activities = await Activity.find({ name: { $regex: name, $options: 'i' } }).populate('location');//.populate('reviews');
  
      if (!activities) {
        return res.status(404).json({ message: 'activities not found' });
      }
  
      res.status(200).json({ activities: activities });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //end get by name
  

//update activity by name
const updateActivityByName = async (req, res) => {
    try {

      const { name, description, imageUrl, price, location, rating  } = req.body;
  
      const updatedActivity = await Activity.findOneAndUpdate(
        { name },
        {
            name,
            description,
            imageUrl,
            price,
            location,
            rating,
            reviews: [],
        },
        { new: true }
      ).populate('location');//.populate('reviews');
  
      if (!updatedActivity) {
        return res.status(404).json({ message: 'activity not found' });
      }
  
      res.status(200).json({ activity: updatedActivity });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //update fucntion end


    //delete actvity
    const deleteActivityByName = async (req, res) => {
        try {
          const { name } = req.body;
      
          // Delete the location by name
          const result = await Activity.deleteOne({ name });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'activty not found' });
          }
      
          return res.status(200).json({ message: 'activity deleted successfully' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      } //delet activity end
    


  module.exports = {
    createActivity,
    getAllActivities,
    getActivityByName,
    updateActivityByName,
    deleteActivityByName
    
  }