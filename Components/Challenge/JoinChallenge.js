import React, { useState } from 'react';
import './JoinChalleneg.css';
import CustomAppbar from '../Appbar/CustomAppbar';
import Navbar from '../Navbar';
import Footer from '../footer/footer';

const ChallengeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    challengeName: '',
    weight: '',
    height: '',
    moto: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the form submission logic here (e.g., make an API call to save the data)
    // For now, just log the form data
    console.log(formData);
    // Show the pop-up notification
    setShowNotification(true);
  };

  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
    <CustomAppbar/>
    <Navbar/>
    <div className='bg2'>
    <div className="challenge-form">
      <h2 className='title'>Join the Challenge!</h2>
      <form className='form2'onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />

        <label htmlFor="challengeName">Challenge Name:</label>
        <input type="text" id="challengeName" name="challengeName" value={formData.challengeName} onChange={handleChange} required />

        <label htmlFor="weight">Weight:</label>
        <input type="number" id="weight" name="weight" value={formData.weight} onChange={handleChange} required />

        <label htmlFor="height">Height:</label>
        <input type="number" id="height" name="height" value={formData.height} onChange={handleChange} required />

        <label htmlFor="moto">Moto of Challenge:</label>
        <textarea id="moto" name="moto" value={formData.moto} onChange={handleChange} required />

        <button type="submit">Join Now</button>
      </form>

      {showNotification && (
        <div className="popup-notification">
          <p>Start your new journey!</p>
          <button onClick={() => setShowNotification(false)}>Close</button>
        </div>
      )}
    </div>
    </div>
      <Footer/>
      </>
  );
};

export default ChallengeForm;
