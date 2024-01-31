import React, { useState } from 'react';
import './Livesession.css';
import Navbar from '../Navbar';
import CustomAppbar from '../Appbar/CustomAppbar';
import Footer from '../footer/footer';
import axios from 'axios';

const LiveClassJoining = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [progressRecorded, setProgressRecorded] = useState(false);

  const handleJoinClass = async () => {
    
    setProgressRecorded(true);
    setTimeout(() => {
      setProgressRecorded(false);
    }, 3000); // 3 seconds
    const res = {"date":selectedDate,"time":selectedTime,"instructor":selectedInstructor}
    // console.log(res);
    const val = await axios.post("http://localhost:8001/feedback/addf",res);
    console.log(val);
  };


  return (
    <div className='bg32'>  
    <>
    <CustomAppbar/>
    <Navbar/>
    <div className='back'>
    <div className="live-class-joining">
      <h2 className='title1'>Join a Live Yoga Class</h2>
      <div className="form-group">
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Select Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label>Select Instructor:</label>
        <select
          value={selectedInstructor}
          onChange={(e) => setSelectedInstructor(e.target.value)}
        >
          <option value="">Select an Instructor</option>
          <option value="John">John</option>
          <option value="Mitchel">Michel</option>
          <option value="Kumar">Kumar</option>
          <option value="Mugesh">Mugesh</option>
        </select>
      </div>
      
      <button className='button1'onClick={handleJoinClass}>Join Class</button>
      
      {progressRecorded && <div className="progress-message">Your progress is recorded!</div>}
    </div>
    </div>
    <Footer/>
    </>
    </div>
  );
};

export default LiveClassJoining;
