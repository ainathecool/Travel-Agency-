import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';

const GoogleAuthContext = createContext();

const SignupForm = () => {
  const { nameRef, emailRef, passwordRef } = useContext(GoogleAuthContext);

  const handleGoogleSignup = async (user) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.value;
    const email = emailRef.value;
    const password = passwordRef.value;

    try {
      // Make API request to signup endpoint
      const response = await axios.post('localhost:3000/user/signup', {
        name,
        email,
        password,
      });

      // Handle successful signup
      console.log(response.data); // You can customize this based on your needs

      // Clear form fields
      nameRef.value = '';
      emailRef.value = '';
      passwordRef.value = '';
    } catch (error) {
      // Handle signup error
      console.error(error);
    }
  };

  const { signIn } = useGoogleLogin({
    clientId: process.env.GOOGLE_CLIENT_ID,
    onUserLoaded: handleGoogleSignup,
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <label>
        Name:
        <input type="text" ref={nameRef} required />
      </label>
      <label>
        Email:
        <input type="email" ref={emailRef} required />
      </label>
      <label>
        Password:
        <input type="password" ref={passwordRef} required />
      </label>
      <button type="submit">Sign Up</button>

      <div>
        <p>Or signup with:</p>
        <button onClick={signIn}>Sign Up with Google</button>
        <button>Sign Up with Facebook</button>
      </div>

      <p>
        Already a member? <a href="/login">Login</a>
      </p>
    </form>
  );
};

const SignupFormWithGoogleAuth = () => {

  const nameRef = '';
  const emailRef = '';
  const passwordRef = '';

  return (
    <GoogleAuthContext.Provider value={{ nameRef, emailRef, passwordRef }}>
      <SignupForm />
    </GoogleAuthContext.Provider>

  );
};

export default SignupFormWithGoogleAuth;
