import React from 'react';
import axios from 'axios';

const SignupForm = () => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      // Make API request to signup endpoint
      const response = await axios.post('localhost:3000/user/signup', {
        email,
        password,
      });

      // Handle successful signup
      console.log(response.data); // You can customize this based on your needs

      // Clear form fields
      emailRef.current.value = '';
      passwordRef.current.value = '';
    } catch (error) {
      // Handle signup error
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <label>
        Email:
        <input type="email" ref={emailRef} required />
      </label>
      <label>
        Password:
        <input type="password" ref={passwordRef} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
