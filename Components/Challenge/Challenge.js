import React from 'react';
import './Challenge.css';
import Navbar from '../Navbar';
import Footer from '../footer/footer';
import CustomAppbar from '../Appbar/CustomAppbar';
import { Link } from 'react-router-dom';
class ChallengesPage extends React.Component {
  render() {
    const challenges = [
      {
        title: '30-Day Yoga Challenge',
        description: 'Join our 30-day yoga challenge to develop a consistent yoga practice and experience transformation in your mind and body.',
      },
      {
        title: 'Flexibility Challenge',
        description: 'Enhance your flexibility and stretch your limits with our 21-day flexibility challenge designed for all levels.',
      },
      {
        title: 'Strength and Balance Challenge',
        description: 'Build strength and improve balance with our 14-day challenge that combines yoga and strength training exercises.',
      },
      {
        title: 'Mindfulness Meditation Challenge',
        description: 'Deepen your mindfulness practice and cultivate inner peace with our 7-day meditation challenge.',
      },
      
    ];

    return (
        <>
      <CustomAppbar/>
        <Navbar/>
        <div className='pic2'>
      <div className="challenges-page">
        <h1>Yoga Challenges and Goals</h1>
        <div className="challenges-list">
          {challenges.map((challenge, index) => (
            <div className="challenge-card" key={index}>
              <h2 className='title'>{challenge.title}</h2>
              <p>{challenge.description}</p>
              <div className="challenge-actions">
                <Link to='/ChallengeStart'>
                <button className="btn-primary">Join Challenge</button></Link>
                <button className="btn-secondary">Learn More</button>n
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer/>
      </>
    );
  }
}

export default ChallengesPage;
