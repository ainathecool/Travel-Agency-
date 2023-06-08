const { google } = require('googleapis'); //for google
const axios = require('axios'); //for facebook

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

//will be using access tokens functionalities


//accessing from google
const getUserProfileFromSocialMediaAPIGoogle = async (idToken) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { name, email } = payload;
    return { name, email };
  } catch (error) {
    console.error('Error verifying Google ID token:', error);
    throw error;
  }
};

//accessing from facebook
const getUserProfileFromSocialMediaAPIFacebook = async (accessToken, provider) => {
  const { data } = await axios.get(`https://graph.facebook.com/v11.0/me?fields=name,email&access_token=${accessToken}`);

  return { name: data.name, email: data.email };
}

module.exports = { getUserProfileFromSocialMediaAPIFacebook, getUserProfileFromSocialMediaAPIGoogle };
