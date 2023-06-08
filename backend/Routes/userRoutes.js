const userRouter = require("express").Router();
const {signup, login, verifyUserLoggedIn, updateProfile, searchUsersByInterests, searchUsersByName} = require("../Controllers/userController");
const {upload} = require("../Utils/files");
const {populateLocations, getAllLocations, getLocationByName, createLocation, updateLocationByName, deleteLocationByName} = require("../Controllers/locationController");
const {populateAccommodations, createAccommodation, getAccommodations, getAccommodationsByName, updateAccommodationByName, deleteAccommodationByName} = require("../Controllers/accommodationController");
const {createTransportation, getAllTransportations, getTransportationsByName, updateTransportationByName, deleteTransportationByName} = require("../Controllers/transportationController");
const {createActivity, getAllActivities, getActivityByName, updateActivityByName, deleteActivityByName} = require("../Controllers/activitiesController");
const {createBooking, getAllBookings, getBookingByBookingType, getBookingByStatus, updateBookingByType, deleteBookingByType, confirmBooking} = require("../Controllers/bookingController");
const { createPlan, getAllPlans, getPlanByStatus, updatePlanByStatus, deletePlanByStatus, confirmPlan} = require("../Controllers/planController");
const {createReview, getAllReviews, getReviewsByType} = require("../Controllers/reviewController");
const {checkAdmin, checkStudent} = require("../Utils/authenticate");

//signup route
userRouter.post("/signup", signup)

//login route
userRouter.get("/login", login )

//verifying user is logged in
userRouter.get("/USER", verifyUserLoggedIn, (req,res, next)=>{
    res.status(201).send({"Message":"User Browser"})
})

//update profile
userRouter.post("/updateProfile",  upload.array("file"), updateProfile,  (req,res, next)=>{
    res.status(201).send({"Message":"Update Profile"})
})


//admin route
userRouter.get('/SearchUserByInterests', searchUsersByInterests, (req,res,next)=>{
    res.status(201).send({"Message": "Search Users Filtered By Interests"})
} )

userRouter.get('/SearchUserByName', searchUsersByName, (req,res,next)=>{
    res.status(201).send({"Message": "Search Users Filtered By Name"})
} )


userRouter.get("/")



//location routes

//create location through API
userRouter.get('/CreateLocationsThroughApi', populateLocations, (req,res,next)=>{
    res.status(201).send({"Message":"Populate Locations Through API"})
})


//view all locations
userRouter.get('/viewAllLocations', getAllLocations, (req,res,next)=>{
    res.status(201).send({"Message":"View All Locations"})
})


//serach locations by name
userRouter.get('/viewLocationByName', getLocationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Get Location By Name"})
})


//create location yourself
userRouter.post('/createLocation', createLocation, (req,res,next)=>{
    res.status(201).send({"Message":"Create Location"})
})


//update location by name
userRouter.put('/updateLocation', updateLocationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Update Location"})

})


//delete location by name
userRouter.delete('/deleteLocation', deleteLocationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Delete Location"})

})




//accommodations routes

//create accommodations through API
userRouter.get('/CreateAccommodationsThroughApi', populateAccommodations, (req,res,next)=>{
    res.status(201).send({"Message":"Populate Accommodations Through API"})
})

//create accomodataions urself
userRouter.post('/createAccommodation', createAccommodation, (req,res,next)=>{
    res.status(201).send({"Message":"Create Accommodation"})
})

//view all accommodations
userRouter.get('/viewAllAccommodations', getAccommodations, (req,res,next)=>{
    res.status(201).send({"Message":"View All Accommodations"})
})

//view accommodations by name
userRouter.get('/viewAccommodationByName', getAccommodationsByName, (req,res,next)=>{
    res.status(201).send({"Message":"View Accommodations By Name"})
})


//update accommodations by name
userRouter.put('/updateAccommodation', updateAccommodationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Update Accommodation"})

})

//delete accommodations by name
userRouter.delete('/deleteAccommodation', deleteAccommodationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Delete Accommodation"})

})




//transportation routes

//create transportation 
userRouter.post('/CreateTransportation', createTransportation, (req,res,next)=>{
    res.status(201).send({"Message":"Populate Transportation"})
})

//view all transportation
userRouter.get('/viewAllTransportation', getAllTransportations, (req,res,next)=>{
    res.status(201).send({"Message":"View All Transportation"})
})

//view transportation by name
userRouter.get('/viewTransportationByName', getTransportationsByName, (req,res,next)=>{
    res.status(201).send({"Message":"View Transportation By Name"})
})

//update transportation by name
userRouter.put('/updateTransportation', updateTransportationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Update Transportation"})

})


//delete transportation by name
userRouter.delete('/deleteTransportation', deleteTransportationByName, (req,res,next)=>{
    res.status(201).send({"Message":"Delete Transportation"})

})




//activities routes

//create activity
userRouter.post('/CreateActivity', createActivity, (req,res,next)=>{
    res.status(201).send({"Message":"Create Activity"})
})

//view all activities
userRouter.get('/viewAllActivities', getAllActivities, (req,res,next)=>{
    res.status(201).send({"Message":"View All Activities"})
})

//view activity by name
userRouter.get('/viewActivityByName', getActivityByName, (req,res,next)=>{
    res.status(201).send({"Message":"View Activity By Name"})
})

//update activity by name
userRouter.put('/updateActivity', updateActivityByName, (req,res,next)=>{
    res.status(201).send({"Message":"Update Activity"})

})

//delete activity by name
userRouter.delete('/deleteActivity', deleteActivityByName, (req,res,next)=>{
    res.status(201).send({"Message":"Delete Activity"})

})




//booking controller
//create booking
userRouter.post('/CreateBooking', verifyUserLoggedIn, createBooking, (req,res,next)=>{
    res.status(201).send({"Message":"Create Booking"})
})

//view all bookings
userRouter.get('/viewAllBookings', verifyUserLoggedIn, getAllBookings, (req,res,next)=>{
    res.status(201).send({"Message":"View All Bookings"})
})

//view booking by booking type
userRouter.get('/viewBookingByBookingType', getBookingByBookingType, (req,res,next)=>{
    res.status(201).send({"Message":"View Booking By Booking Type"})
})

//view booking by status
userRouter.get('/viewBookingByStatus', getBookingByStatus, (req,res,next)=>{
    res.status(201).send({"Message":"View Booking By Status"})
})

//update booking by type
userRouter.put('/updateBookingByType', verifyUserLoggedIn, updateBookingByType, (req,res,next)=>{
    res.status(201).send({"Message":"Update booking by type"})
})

//delete booking by type
userRouter.delete('/deleteBookingByType', verifyUserLoggedIn, deleteBookingByType, (req,res,next)=>{
    res.status(201).send({"Message":"Delete booking by type"})
})

//confirm bookimg through payement
userRouter.put('/confirmBooking', verifyUserLoggedIn, confirmBooking, (req,res,next)=>{
    res.status(201).send({"Message":"Confirm Booking"})
})


//plans routes


//create plan
userRouter.post('/CreatePlan', verifyUserLoggedIn, createPlan, (req,res,next)=>{
    res.status(201).send({"Message":"Create Plan"})
})

//view all plans
userRouter.get('/viewAllPlans', verifyUserLoggedIn, getAllPlans, (req,res,next)=>{
    res.status(201).send({"Message":"View All Plans"})
})

//get plan by status
userRouter.get('/viewPlanByStatus', getPlanByStatus, (req,res,next)=>{
    res.status(201).send({"Message":"View Plan By Status"})
})

//update plan by status
userRouter.put('/updatePlanByStatus', verifyUserLoggedIn, updatePlanByStatus, (req,res,next)=>{
    res.status(201).send({"Message":"Update Plan By Status"})
})

//delete plan by status
userRouter.delete('/deletePlanByStatus', verifyUserLoggedIn, deletePlanByStatus, (req,res,next)=>{
    res.status(201).send({"Message":"Delete Plan By Status"})
})

//confirm plan through payement
userRouter.put('/confirmPlan', verifyUserLoggedIn, confirmPlan, (req,res,next)=>{
    res.status(201).send({"Message":"Confirm Plan"})
})




//review routes

//create review
userRouter.post('/CreateReview', verifyUserLoggedIn, createReview, (req,res,next)=>{
    res.status(201).send({"Message":"Create Review"})
})

//view all reviews
userRouter.get('/viewAllReviews', verifyUserLoggedIn, getAllReviews, (req,res,next)=>{
    res.status(201).send({"Message":"View All Reviews"})
})


//get review by tyoe
userRouter.get('/getReviewByType', getReviewsByType, (req,res,next)=>{
    res.status(201).send({"Message":"View All Reviews"})
})
module.exports = userRouter;
