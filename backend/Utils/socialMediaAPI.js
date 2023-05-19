const { google } = require('googleapis'); //for google
const axios = require('axios'); //for facebook


//will be using access tokens functionalities


//accessing from google
const getUserProfileFromSocialMediaAPIGoogle = async (accessToken, provider) => {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });

  const plus = google.plus({ version: 'v1', auth: oauth2Client });
  const { data: { emails, displayName } } = await plus.people.get({ userId: 'me' });

  return { name: displayName, email: emails[0].value };
}


//accessing from facebook
const getUserProfileFromSocialMediaAPIFacebook = async (accessToken, provider) => {
  const { data } = await axios.get(`https://graph.facebook.com/v11.0/me?fields=name,email&access_token=${accessToken}`);

  return { name: data.name, email: data.email };
}

module.exports = { getUserProfileFromSocialMediaAPIFacebook, getUserProfileFromSocialMediaAPIGoogle };
