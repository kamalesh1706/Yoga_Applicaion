import React from 'react';
import './Home.css';
// import { useSelector } from 'react-redux';

const HomePage = () => {

  return (
    <div className="home-page-container">
      <h1>Welcome to Yoga Training</h1>

      <div className="feature-section">
        <div className="feature-card">
          <h2>User Registration</h2>
          <p>Create an account to access all features of the platform. Provide basic information and customize your profile.</p>
        </div>

        <div className="feature-card">
          <h2>Class Library</h2>
          <p>Explore our extensive library of pre-recorded yoga classes catering to different skill levels and styles.</p>
        </div>

        <div className="feature-card">
          <h2>Live Classes</h2>
          <p>Join our live streaming or scheduled online yoga classes to practice in real-time with instructors and fellow participants.</p>
        </div>

        <div className="feature-card">
          <h2>Instructional Videos</h2>
          <p>Access our collection of instructional videos to learn proper alignment, breathing techniques, and yoga poses.</p>
        </div>

        <div className="feature-card">
          <h2>Customized Yoga Programs</h2>
          <p>Receive personalized yoga programs tailored to your needs and goals to support your journey.</p>
        </div>

        <div className="feature-card">
          <h2>Progress Tracking</h2>
          <p>Track your yoga practice, monitor your progress, and celebrate your achievements with our progress tracking tools.</p>
        </div>

        <div className="feature-card">
          <h2>Yoga Challenges and Goals</h2>
          <p>Participate in yoga challenges and goal-oriented programs to push yourself and reach new milestones.</p>
        </div>

        <div className="feature-card">
          <h2>Community and Social Features</h2>
          <p>Connect with fellow yoga enthusiasts, engage in discussions, share experiences, and support each other in our community.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
