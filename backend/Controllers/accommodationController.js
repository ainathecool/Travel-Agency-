const axios = require('axios');
const Accommodation = require('../Models/accommodationModel');



//populate accomodations through API
const populateAccommodations = async () => {
  try {
    const query = `
      [out:json];
      (
        node["tourism"="hotel"];
        node["tourism"="guest_house"];
        node["tourism"="apartment"];
      );
      out center;
    `;

    const response = await axios.post('https://overpass-api.de/api/interpreter', query);

    const accommodations = response.data.elements.map((element) => ({
      name: element.tags.name || 'Unnamed Accommodation',
      description: element.tags.tourism || 'Unknown',
      imageUrl: '', // Add image URL if available
      address: element.tags.address || 'Unknown',
      location: null, // Set the location reference
      price: 0, // Set the default price
      amenities: [], // Initialize amenities array
      reviews: [], // Initialize reviews array
    }));

    await Accommodation.create(accommodations);

    console.log('Accommodations populated successfully');
  } catch (error) {
    console.error('Error populating accommodations:', error);
  }
}// end api population



//create accommodations urself
const createAccommodation = async (req, res) => {
    try {
      const { name, description, imageUrl, address, location, price, amenities } = req.body;
      const accommodation = new Accommodation({
        name,
        description,
        imageUrl,
        address,
        location,
        price,
        amenities,
      });
  
      await accommodation.save();
      res.status(201).json({ message : "accommodation created"});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }



  // Get all accommodations
const getAccommodations = async (req, res) => {
    try {
      const accommodations = await Accommodation.find().populate('location reviews');
       // const accommodations = await Accommodation.find().populate('location');
      res.status(200).json({ accommodations: accommodations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }//get all accomodations end



  // Get accommodations by name
const getAccommodationsByName = async (req, res) => {
    try {
      const { name } = req.query;
      const accommodations = await Accommodation.find({ name: { $regex: name, $options: 'i' }  }).populate('location').populate('reviews');
  
      if (!accommodations) {
        return res.status(404).json({ message: 'accommodations not found' });
      }
  
      res.status(200).json({ accommodations: accommodations });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //end get by name




  //update accommodations by name
  const updateAccommodationByName = async (req, res) => {
    try {

      const { name, description, imageUrl, address, location, price, amenities } = req.body;

     // let updatedAccommodation = await Location.findOne({ name });
  
      const updatedAccommodation = await Accommodation.findOneAndUpdate(
        { name: { $regex: name, $options: 'i' } },
        {
          description,
          imageUrl,
          address,
          location,
          price,
          amenities,
        },
        { new: true }
      ).populate('location').populate('reviews');
  
      if (!updatedAccommodation) {
        return res.status(404).json({ message: 'Accommodation not found' });
      }
  
      res.status(200).json({ message: "accommodation updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //update fucntion end




//delete accommodation 
const deleteAccommodationByName = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Delete the location by name
      const result = await Accommodation.deleteOne({ name: { $regex: name, $options: 'i' } });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'Accommodation not found' });
      }
  
      return res.status(200).json({ message: 'Accommodation deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }


module.exports = {
    populateAccommodations,
    createAccommodation,
    getAccommodations,
    getAccommodationsByName,
    updateAccommodationByName,
    deleteAccommodationByName
}