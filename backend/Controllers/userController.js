// const User = require('../Models/userModel');
// const { generateToken, hashPassword, comparePassword } = require('../Utils/jwt');
// const { getUserProfileFromSocialMediaAPIGoogle, getUserProfileFromSocialMediaAPIFacebook, getUserProfileFromSocialMediaAPIGoogle } = require('../Utils/socialMediaAPI');

const User = require("../Models/userModel")
const jwt = require("jsonwebtoken");
const { getUserProfileFromSocialMediaAPIGoogle, getUserProfileFromSocialMediaAPIFacebook } = require('../Utils/socialMediaAPI');

let signup = async (req,res) => {
    
    let {password, name, email, socialMediaAccessToken, socialMediaProvider } = req.body;

    let user = await User.findOne({ email }); //chechking if user already exists
    let idToken = socialMediaAccessToken;

    if (user) { //if user exists already
      return res.status(400).json({ message: 'User already exists' });
    }


    //if user wants to signup from google
    if (idToken && socialMediaProvider === "google") { //if both things are provided
      const { name, email } = await getUserProfileFromSocialMediaAPIGoogle(idToken);

      user = new User({ email, name });
    }
    //if user wants to signup from facebook
    else if(socialMediaAccessToken && socialMediaProvider === "facebook"){
        const { name, email } = await getUserProfileFromSocialMediaAPIFacebook(socialMediaAccessToken, socialMediaProvider);

      user = new User({ email, name });
    }
    //if user wants to signup from email+password
     else {
      //const hashedPassword = await hashPassword(password);

      user = new User({ email, password, name });
    }

    //saving user
    await user.save().then((user)=>{
        if(!user){
            res.status(400).json({"message": "User not created"})
        }
        else{
            res.status(200).json({"Message": "User created successfully", user:user})
        }

    }).catch(err =>{
        res.status(400).json({err:err, "message": "User not created"})
    })

    } //signup function ending




let login = async (req,res) =>{


    let{email,password, socialMediaAccessToken, socialMediaProvider} = req.body;

                if (socialMediaAccessToken && socialMediaProvider === 'google') {
                const { name, email } = await getUserProfileFromSocialMediaAPIGoogle(socialMediaAccessToken, socialMediaProvider);
                user = await User.findOne({ email });
          
                if (!user) {
                  // Create a new user if not found in the database
                  user = new User({ email, name });
                  await user.save();
                }

              } else if (socialMediaAccessToken && socialMediaProvider === 'facebook') {
                const { name, email } = await getUserProfileFromSocialMediaAPIFacebook(socialMediaAccessToken, socialMediaProvider);
                user = await User.findOne({ email });
          
                if (!user) {
                  // Create a new user if not found in the database
                  user = new User({ email, name });
                  await user.save();
                }
              } 

              else {
                //         // Login with email and password
                            
                    User.findOne({email:email}).then(founduser=>{
                        if(!founduser){
                            res.status(404).send({"Message":"User not exist"})
                        }else{
                            if(password=founduser.password){
                                let token = jwt.sign({
                                    id: founduser._id,
                                    role: founduser.role,
                                }, process.env.JWT_SECRET_KEY , {
                                    expiresIn: '24h'
                                })
                                res.status(200).send({user:founduser, token:token})
                            }else{
                                res.status(400).send({"Message":"Password Not Match"})
                            }
                        }
                    }).catch(e=>{
                        res.status(500).send({e:e})
                    });

                    }
} //login function ending


var verifyUserLoggedIn = (req,res,next) =>{
    let token = req.headers['token'];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if(!err){
            req.decoded = decoded;
            console.log(req);
            next();
        }else{
            res.status(401).send({"Message":"You are not authorised"})
        }

    })

}


//update profile for user
// Update profile function
const updateProfile = async (req, res) => {
    try {
      const { email, name, profilePicture, interests, password } = req.body;
     // const { id } = req.user; //  extract the userId from the token
  
      // Find the user by userId
      let user = await User.findOne({ email });

      if(user)
      {
                    // Update user profile fields if provided
                if (name) {
                    user.name = name;
                }
            
                if (profilePicture) {
                    //user.profilePicture = profilePicture;
                    user.profilePicture = req.file
                }
            
                if (interests) {
                    user.interests = interests;
                }
            
                if (password === user.password) {
                    var isPasswordValid = true;
            
                    if (!isPasswordValid) {
                    return res.status(401).json({ message: 'Invalid password' });
                    }
            
                    // Hash and update the new password
                    //const hashedPassword = await hashPassword(password);
                    user.password = password;
                }
            
                // Save the updated user
                await user.save();
            
                return res.status(200).json({ message: 'Profile updated successfully' });
                
                }
  
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }
  
   
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } //profile update function end
  


  // Search and filter users by interests
  const searchUsersByInterests = async (req, res) => {
    try {
      const { interest } = req.query;
  
      // Find users with a partial string match for the specified interest
      const users = await User.find({ interests: { $regex: interest, $options: 'i' } });
  
      return res.status(200).json({ users: users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }//end searcj interests function

  const searchUsersByName = async (req, res) => {
    try {
      const { name } = req.query;
  
      // Search for users with matching name (case-insensitive)
      const users = await User.find({ name: { $regex: name, $options: 'i' } });
  
      return res.status(200).json({ users: users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } //end search name fucntion


module.exports = {
    signup,
    login,
    verifyUserLoggedIn,
    updateProfile,
    searchUsersByInterests,
    searchUsersByName
}





















// //signup fucntion using email+password or social media accounts(google facebook)
// const signup = async (req, res) => {
//   try {
//     const { email, password, name, socialMediaAccessToken, socialMediaProvider } = req.body;

//     let user = await User.findOne({ email }); //chechking if user already exists

//     if (user) { //if user exists already
//       return res.status(400).json({ message: 'User already exists' });
//     }


//     /* req.body
//             {
//         "email": "johndoe@example.com",
//         "name": "John Doe",
//         "socialMediaAccessToken": "abc123def456ghi789",
//         "socialMediaProvider": "google"
//         }

//     */ 

//         //if user wants to signup from google
//     if (socialMediaAccessToken && socialMediaProvider === "google") { //if both things are provided
//       const { name, email } = await getUserProfileFromSocialMediaAPIGoogle(socialMediaAccessToken, socialMediaProvider);

//       user = new User({ email, name });
//     }
//     //if user wants to signup from facebook
//     else if(socialMediaAccessToken && socialMediaProvider === "facebook"){
//         const { name, email } = await getUserProfileFromSocialMediaAPIFacebook(socialMediaAccessToken, socialMediaProvider);

//       user = new User({ email, name });
//     }
//     //if user wants to signup from email+password
//      else {
//       const hashedPassword = await hashPassword(password);

//       user = new User({ email, password: hashedPassword, name });
//     }

//     //saving user
//     await user.save();

//     const token = generateToken(user._id);

//     return res.status(201).json({ token });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   }//try catch ending

// }//signup function end




// // Login function using email+password or social media accounts (Google, Facebook)
// const login = async (req, res) => {
//     try {
//       const { email, password, socialMediaAccessToken, socialMediaProvider } = req.body;
  
//       let user;
//       let token;
  
//       if (socialMediaAccessToken && socialMediaProvider === 'google') {
//         const { name, email } = await getUserProfileFromSocialMediaAPIGoogle(socialMediaAccessToken, socialMediaProvider);
//         user = await User.findOne({ email });
  
//         if (!user) {
//           // Create a new user if not found in the database
//           user = new User({ email, name });
//           await user.save();
//         }
//       } else if (socialMediaAccessToken && socialMediaProvider === 'facebook') {
//         const { name, email } = await getUserProfileFromSocialMediaAPIFacebook(socialMediaAccessToken, socialMediaProvider);
//         user = await User.findOne({ email });
  
//         if (!user) {
//           // Create a new user if not found in the database
//           user = new User({ email, name });
//           await user.save();
//         }
//       } else {
//         // Login with email and password
//         user = await User.findOne({ email });
  
//         if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//         }
  
//         const isPasswordValid = await comparePassword(password, user.password);
  
//         if (!isPasswordValid) {
//           return res.status(401).json({ message: 'Invalid password' });
//         }
//       }
  
//       token = generateToken(user._id);
  
//       return res.status(200).json({ token });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Internal server error' });
//     }
//   }
  


// module.exports = {
//     signup, login
// }
