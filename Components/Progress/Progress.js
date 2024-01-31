import React, { useState } from 'react';
import './Progress.css';
import Navbar from '../Navbar';
import Footer from '../footer/footer';
import CustomAppbar from '../Appbar/CustomAppbar';
function ProgressTrackingPage() {
  const [progressData, setProgressData] = useState([
    {
      id: 1,
      title: 'Classes Attended',
      value: 0,
      unit: 'classes',
    },
    
    {
      id: 2,
      title: 'Total Practice Duration',
      value: 0,
      unit: 'minutes',
    },
    {
      id: 3,
      title: 'Achieved Milestones',
      value: 0,
      unit: 'milestones',
    },
    {
      id: 4,
      title: 'Yoga Challenges Completed',
      value: 0,
      unit: 'challenges',
    },
    {
      id: 5,
      title: 'Mindfulness Minutes',
      value: 0,
      unit: 'minutes',
    },
    {
      id: 6,
      title: 'Yoga Workouts',
      value: 0,
      unit: 'workouts',
    },
  ]);

  const handleIncrement = (id) => {
    setProgressData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : item
      )
    );
  };

  return (
    <>
    <CustomAppbar/>
    <Navbar/>
    <div className='pic'>
    <div className="progress-tracking">
      <h1 className="progress-tracking-title">Progress Tracking</h1>
      <div className="progress-cards">
        {progressData.map((progressItem) => (
          <div className="progress-card" key={progressItem.id}>
            <h2 className='title'>{progressItem.title}</h2>
            <p>
              <strong>{progressItem.value}</strong> {progressItem.unit}
            </p>
            <button
              className="btn btn-primary"
              onClick={() => handleIncrement(progressItem.id)}
            >
              Increment
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
  </div>
    </>
  );
}

export default ProgressTrackingPage;
