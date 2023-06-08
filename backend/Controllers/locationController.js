const axios = require('axios');
const Location = require('../Models/locationModel');

// Function to populate locations from OpenStreetMap API
const populateLocations = async () => {
  try {
    const searchQuery = 'New York'; // Replace with your desired search query
    
    // Send GET request to Nominatim API
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${searchQuery}`);

    // Extract location details from the response
    const locations = response.data.map((result) => ({
      name: result.display_name,
      description: result.type,
      imageUrl: '', // Add image URL if available
      address: result.address,
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
    }));

    // Save locations to the database
    await Location.create(locations);

    console.log('Locations populated successfully');
    res.status(200).json({ message: 'Locations populated successfully' });
  } catch (error) {
    console.error('Error populating locations:', error);
  }
} //locations populated from API



//get all locations 
const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json({ locations: locations  });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to get locations' });
  }
} //get locations end



//get locations by name
const getLocationByName = async (req, res) => {
  try {
    const { name } = req.query;
    const location = await Location.find({ name: { $regex: name, $options: 'i' } });
    
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    
    return res.status(200).json({ location: location });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to get location' });
  }
}



//create location yourself
const createLocation = async (req, res) => {
  try {
    const { name, description, imageUrl, latitude, longitude } = req.body;
    const location = new Location({
      name,
      description,
      imageUrl,
      latitude,
      longitude,
    });
    await location.save();
    res.status(201).json({ location });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create location' });
  }
} //location creation urself




//update location 

const updateLocationByName = async (req, res) => {
  try {
    const { name, newDescription, newImageUrl } = req.body;

    // Find the location by name
    let location = await Location.findOne({ name: { $regex: name, $options: 'i' }  });

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }

    // Update the location fields if provided
    if (newDescription) {
      location.description = newDescription;
    }

    if (newImageUrl) {
      location.imageUrl = newImageUrl;
    }

    // Save the updated location
    await location.save();

    return res.status(200).json({ message: 'Location updated successfully', location });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}// end update location




//delete location 
const deleteLocationByName = async (req, res) => {
  try {
    const { name } = req.body;

    // Delete the location by name
    const result = await Location.deleteOne({ name: { $regex: name, $options: 'i' } });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Location not found' });
    }

    return res.status(200).json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}




module.exports = {
    populateLocations,
    getAllLocations,
    getLocationByName,
    createLocation,
    updateLocationByName,
    deleteLocationByName
}