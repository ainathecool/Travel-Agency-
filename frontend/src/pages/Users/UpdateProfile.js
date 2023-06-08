import React, { useState } from 'react';

const UpdateProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [interests, setInterests] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'interests') {
      setInterests(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleFileInputChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('interests', interests);
    formData.append('password', password);
    if (profilePicture) {
      formData.append('file', profilePicture);
    }

    try {
      const response = await fetch(`http://localhost:3000/user/updateProfile`, {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to update profile');
    }
  };

  return (
    <div>
      <h3>Update Profile</h3>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Profile Picture:</label>
          <input type="file" name="profilePicture" onChange={handleFileInputChange} />
        </div>
        <div>
          <label>Interests:</label>
          <input type="text" name="interests" value={interests} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Update Profile</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateProfileScreen;
