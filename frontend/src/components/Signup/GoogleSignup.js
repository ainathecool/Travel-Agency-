import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleSignupButton = () => {
  const { signIn } = useGoogleLogin({
    clientId: process.env.GOOGLE_CLIENT_ID,
    onUserLoaded: async (user) => {
      // Handle the Google sign-up response
      console.log(user);
      
      // Prepare the data to be sent to your backend
      const { id_token } = user.tokens;
      const { name, email } = user.profile;
      const socialMediaAccessToken = id_token;
      const socialMediaProvider = 'google';

      try {
        // Make a POST request to your backend endpoint for signing up with Google
        const response = await fetch('localhost:3000/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            socialMediaAccessToken,
            socialMediaProvider,
          }),
        });

        if (response.ok) {
          // Sign-up success
          const data = await response.json();
          console.log(data);
          // Perform any additional actions after successful sign-up
        } else {
          // Sign-up failed
          const errorData = await response.json();
          console.error(errorData);
          // Handle the error case
        }
      } catch (error) {
        console.error(error);
        // Handle any network or server errors
      }
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <button onClick={signIn}>
      Sign up with Google
    </button>
  );
};

export default GoogleSignupButton;
