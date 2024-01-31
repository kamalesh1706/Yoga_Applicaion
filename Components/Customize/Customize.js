import React from 'react';
import './Customize.css';
import Navbar from '../Navbar';
import Footer from '../footer/footer';
import { Button } from '@mui/material';
import CustomAppbar from '../Appbar/CustomAppbar';
const CustomizedProgramsPage = () => {
  return (
    <>
    <CustomAppbar/>
    <Navbar/>
    <div className="customized-programs-page-container">
      <h1>Customized Yoga Programs</h1>

      <div className="program-card">
        <h2 className='custom'>Flexibility Program</h2>
        <p>Improve your flexibility with this customized yoga program.</p>
        <ul>
          <li>Duration: 4 weeks</li>
          <li>Focus areas: Hamstrings, shoulders, and hips</li>
          <li>Recommended classes: Gentle Flow, Yin Yoga</li>
        </ul>
        <Button classvariant="contained" color='primary'
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1ofUg6uDFX0f59EnHqq6isAmVlUsCPNbV/view?usp=sharing"
        );
      }}>Learn More ⬇</Button>
        
      </div>

      <div className="program-card">
        <h2 className='custom'>Stress Reduction Program</h2>
        
        <p>Reduce stress and find inner peace with this customized yoga program.</p>
        <ul>
          
          <li>Duration: 8 weeks</li>
          <li>Focus areas: Relaxation, deep breathing, and meditation</li>
          <li>Recommended classes: Restorative Yoga, Yoga Nidra</li>
        </ul>
        <Button classvariant="contained" color='primary'
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1ofUg6uDFX0f59EnHqq6isAmVlUsCPNbV/view?usp=sharing"
        );
      }}>Learn More ⬇</Button>
        
      </div>

      <div className="program-card">
        <h2 className='custom'>Stress Reduction Program</h2>
        <p>Reduce stress and find inner peace with this customized yoga program.</p>
        <ul>
          
          <li>Duration: 8 weeks</li>
          <li>Focus areas: Relaxation, deep breathing, and meditation</li>
          <li>Recommended classes: Restorative Yoga, Yoga Nidra</li>
        </ul>
        <Button classvariant="contained" color='primary'
      onClick={() => {
        window.open(
          "https://drive.google.com/file/d/1ofUg6uDFX0f59EnHqq6isAmVlUsCPNbV/view?usp=sharing"
        );
      }}>Learn More ⬇</Button>
      
      </div>
      
      {/* Add more program cards as needed */}
    </div>
    <Footer/>
    </>
  );
};

export default CustomizedProgramsPage;
