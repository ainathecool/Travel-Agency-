const Plan = require('../Models/planModel');
const stripe = require('stripe')('sk_test_51N5kYeFsnIifQmeNTfYswDUA8xY7QCHme420ZVOuaBB945qNGbZLzyEl8ZaRX1PYRRUTFXrNvnM7oTFnzcbKkpX300EMMPpaYn');


// Create a plan
const createPlan = async (req, res) => {
  try {
    const { user, accommodations, transportations, activities } = req.body;

    const totalPrice =  750 ;
    var status = "Pending";

    const plan = new Plan({
      user,
      accommodations,
      transportations,
      activities,
      totalPrice,
      status
    });

    await plan.save();

    return res.status(201).json({ plan });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}//create plans end

// Get all plans
const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find().populate('user accommodations transportations activities');
    return res.status(200).json({ plans });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}//get all pans end



 //get plan by status

 const getPlanByStatus = async (req, res) => {
    try {
      const { status } = req.query;
      const plan = await Plan.find({status: { $regex: status, $options: 'i' }}).populate('user accommodations transportations activities');//.populate('reviews');
  
      if (!plan) {
        return res.status(404).json({ message: 'plan not found' });
      }
  
  
      res.status(200).json({ plan: plan });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //end get by status
  


   //update plan  by status
const updatePlanByStatus = async (req, res) => {
    try {

      const { user, accommodations, transportations, activities, status } = req.body;
  
        const totalPrice =  850 ;
      const updatedPlan = await Plan.findOneAndUpdate(
        { status },
        {
            user,
            accommodations,
            transportations,
            activities,
            totalPrice,
            status
        },
        { new: true }
      ).populate('user accommodations transportations activities');//.populate('reviews');
  
      if (!updatedPlan) {
        return res.status(404).json({ message: 'plan not found' });
      }
  
      res.status(200).json({ plan: updatedPlan });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } //update fucntion end

  

    //delete plan
    const deletePlanByStatus = async (req, res) => {
        try {
          const { status } = req.body;
      
          // Delete the location by name
          const result = await Plan.deleteOne({ status });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'plan not found' });
          }
      
          return res.status(200).json({ message: 'plan deleted successfully' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      } //delet booking end


    //payemnt
      // Confirm plan and process payment
      const confirmPlan = async (req, res) => {
        try {
          const { user } = req.params;
      
          // Retrieve the booking from the database
          const plan = await Plan.findOne(user).populate('user accommodations transportations activities');
      
          if (!plan) {
            return res.status(404).json({ message: 'plan not found' });
          }
      
          // Check if the booking is already confirmed
          if (plan.status === 'Confirmed') {
            return res.status(400).json({ message: 'Plan is already confirmed' });
          }
      
          // Process payment using Stripe
          const paymentIntent = await stripe.paymentIntents.create({
            amount: plan.totalPrice * 100, // Stripe accepts the amount in cents
            currency: 'usd', // Replace with your desired currency
            payment_method_types: ['card'],
            description: `Plan ID: ${plan._id}`,
            receipt_email: plan.user.email, // Replace with the user's email
          });
      
          // Update the booking status to "Confirmed"
          plan.status = 'Confirmed';
          await plan.save();
      
          return res.status(200).json({ plan, paymentIntent });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      } //plan confirm  end
      

module.exports = {
    createPlan,
    getAllPlans,
    getPlanByStatus,
    updatePlanByStatus,
    deletePlanByStatus,
    confirmPlan
}
