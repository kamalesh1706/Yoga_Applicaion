import React from 'react';
import './Community.css'; // Import the CSS file for styling
import Navbar from '../Navbar';
import Footer from '../footer/footer';
import CustomAppbar from '../Appbar/CustomAppbar';

const SocialMediaPage = () => {
  const posts = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Just finished a relaxing yoga session. Feeling amazing! 🧘‍♂️',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Excited to join the upcoming yoga challenge! 🌟',
      likes: 15,
      comments: 3,
    },
    {
    id: 3,
    user: 'Sanjay Kumaar',
    content: '🌟',
    likes: 15,
    comments: 3,
  },
  {
    id: 4,
    user: 'Sriram',
    content: 'Hukum',
    likes: 15,
    comments: 3,
  },
    
    
    // Add more posts here...
  ];

  const faq = [
    {
      id: 1,
      question: 'What are the benefits of practicing yoga regularly?',
      answer: 'Regular yoga practice can improve flexibility, strength, and overall well-being. It can also reduce stress and promote relaxation.',
    },
    {
      id: 2,
      question: 'How often should I practice yoga?',
      answer: 'The frequency of your yoga practice depends on your personal goals and schedule. It\'s recommended to start with a few sessions per week and gradually increase as you feel comfortable.',
    },
    // Add more FAQ items here...
  ];

  return (
    <>
    <CustomAppbar/>
    <Navbar/>
    <div className="social-media-page">
      <h2 className='title'>Social Media</h2>
      <div className="social-media-feed">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="user">{post.user}</div>
            <div className="content">{post.content}</div>
            <div className="interactions">
              <span>{post.likes} Likes</span>
              <span>{post.comments} Comments</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className='title'>FAQ</h2>
      <div className="faq-section">
        {faq.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="question">{item.question}</div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SocialMediaPage;
