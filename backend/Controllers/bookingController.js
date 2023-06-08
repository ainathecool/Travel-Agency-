const Booking = require('../Models/bookingModel');
const stripe = require('stripe')('sk_test_51N5kYeFsnIifQmeNTfYswDUA8xY7QCHme420ZVOuaBB945qNGbZLzyEl8ZaRX1PYRRUTFXrNvnM7oTFnzcbKkpX300EMMPpaYn');

// Create a booking
const createBooking = async (req, res) => {
  try {
    const { user, bookingType, bookingId, status, totalPrice } = req.body;

    const booking = new Booking({
      user,
      bookingType,
      bookingId,
      status,
      totalPrice
    });

    await booking.save();

    return res.status(201).json({ message: "booking created" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}// booking creation end


  //get all bookings
  const getAllBookings = async (req, res) => {
    try {
      const bookings = await Booking.find().populate('user').populate('bookingId');
      return res.status(200).json({ bookings: bookings});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }/// end get all 


    //get booking by type

    const getBookingByBookingType = async (req, res) => {
        try {
          const { bookingType } = req.query;
          const booking = await Booking.find({  bookingType: { $regex: bookingType, $options: 'i' }  }).populate('user').populate('bookingId');//.populate('reviews');
      
          if (!booking) {
            return res.status(404).json({ message: 'booking not found' });
          }
      
          res.status(200).json({ booking: booking });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      } //end get by type 
      

      //get booking by status

    const getBookingByStatus = async (req, res) => {
        try {
          const { status } = req.query;
          const booking = await Booking.find({ status: { $regex: status, $options: 'i' }  }).populate('user').populate('bookingId');//.populate('reviews');
      
          if (!booking) {
            return res.status(404).json({ message: 'booking not found' });
          }
      
      
          res.status(200).json({ booking: booking });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      } //end get by status 
      


      //update booking  by type
const updateBookingByType = async (req, res) => {
    try {

      const { user, bookingType, bookingId, status, totalPrice } = req.body;
  
      const updatedBooking = await Booking.findOneAndUpdate(
        { bookingType },
        {
            user,
            bookingId,
            status,
            totalPrice
        },
        { new: true }
      ).populate('user').populate('bookingId');//.populate('reviews');
  
      if (!updatedBooking) {
        return res.status(404).json({ message: 'booking not found' });
      }
  
      res.status(200).json({ message: "booking updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //update fucntion end



     //delete booking
     const deleteBookingByType = async (req, res) => {
        try {
          const { bookingType } = req.body;
      
          // Delete the location by name
          const result = await Booking.deleteOne({ bookingType: { $regex: bookingType, $options: 'i' }   });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'booking not found' });
          }
      
          return res.status(200).json({ message: 'booking deleted successfully' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      } //delet booking end
    



      //payemnt
      // Confirm booking and process payment
  const confirmBooking = async (req, res) => {
  try {
    const { user } = req.params;

    // Retrieve the booking from the database
    const booking = await Booking.findOne(user).populate('user').populate('bookingId');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Check if the booking is already confirmed
    if (booking.status === 'Confirmed') {
      return res.status(400).json({ message: 'Booking is already confirmed' });
    }

    // Process payment using Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: booking.totalPrice * 100, // Stripe accepts the amount in cents
      currency: 'usd', // Replace with your desired currency
      payment_method_types: ['card'],
      description: `Booking ID: ${booking._id}`,
      receipt_email: booking.user.email, // Replace with the user's email
    });

    // Update the booking status to "Confirmed"
    booking.status = 'Confirmed';
    await booking.save();

    return res.status(200).json({ booking, paymentIntent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
} //booking confirm  end



module.exports = {
    createBooking,
    getAllBookings,
    getBookingByBookingType,
    getBookingByStatus,
    updateBookingByType,
    deleteBookingByType,
    confirmBooking
}