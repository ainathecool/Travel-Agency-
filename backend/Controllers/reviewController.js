const Review = require('../Models/reviewModel');
const Transportation = require("../Models/transportationModel");
const Location = require("../Models/locationModel");
const Activity = require("../Models/activityModel");
const Accommodation = require("../Models/accommodationModel");




// Create a review
const createReview = async (req, res) => {
  try {
    const { user, reviewType, reviewId, comment } = req.body;

    const review = new Review({
      user,
      reviewType, //enum: ['Accommodation', 'Transportation', 'Activity', 'Location']
      reviewId,
      comment
    });

    await review.save();

    if(reviewType === "Transportation")
    {
        await updateTransportationWithReview(req, res);
    }
    else if(reviewtype === "Location")
    {
        await LocationWithReview(req, res);
    }
    else if(reviewType === 'Activity')
    {
        await updateActivityWithReview(req, res);
    }
    else(reviewType === 'Accommodation')
    {
        await updateAccommodationWithReview(req, res);
    }

    return res.status(201).json({ review });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('user').populate('reviewId');
    return res.status(200).json({ reviews: reviews });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

 // Get review by type
 const getReviewsByType = async (req, res) => {
  try {
    const { reviewType } = req.query;
    const reviews = await Review.find({ reviewType: { $regex: reviewType, $options: 'i' }  }).populate('user').populate('reviewId');

    if (!reviews) {
      return res.status(404).json({ message: 'reviews not found' });
    }

    res.status(200).json({ reviews: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
} //end get by name


// Update transportation to add a review
const updateTransportationWithReview = async (req, res) => {
    try {
    
      const { reviewId, comment} = req.body;
  
      // Find the transportation by ID
      const transportation = await Transportation.findById(reviewId);
  
      if (!transportation) {
        return res.status(404).json({ message: 'Transportation not found' });
      }
  
      // Add the review to the transportation
      transportation.reviews.push(reviewId);
  
      // Save the updated transportation
      await transportation.save();
  
      return res.status(200).json({ transportation });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Update transportation to add a review
const LocationWithReview = async (req, res) => {
    try {
    
      const { reviewId, comment} = req.body;
  
      // Find the transportation by ID
      const location = await Location.findById(reviewId);
  
      if (!location) {
        return res.status(404).json({ message: 'location not found' });
      }
  
      // Add the review to the transportation
      location.reviews.push(reviewId);
  
      // Save the updated transportation
      await location.save();
  
      return res.status(200).json({ location });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


    // Update actovty to add a review
const updateActivityWithReview = async (req, res) => {
    try {
    
      const { reviewId, comment} = req.body;
  
      // Find the transportation by ID
      const activity = await Activity.findById(reviewId);
  
      if (!activity) {
        return res.status(404).json({ message: 'activity not found' });
      }
  
      // Add the review to the transportation
      activity.reviews.push(reviewId);
  
      // Save the updated transportation
      await activity.save();
  
      return res.status(200).json({ activity });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  
    // Update accommodation to add a review
const updateAccommodationWithReview = async (req, res) => {
    try {
    
      const { reviewId, comment} = req.body;
  
      // Find the transportation by ID
      const accommodation = await Accommodation.findById(reviewId);
  
      if (!accommodation) {
        return res.status(404).json({ message: 'accommodation not found' });
      }
  
      // Add the review to the transportation
      accommodation.reviews.push(reviewId);
  
      // Save the updated transportation
      await accommodation.save();
  
      return res.status(200).json({ accommodation });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = {
    createReview,
    getAllReviews,
    getReviewsByType
}