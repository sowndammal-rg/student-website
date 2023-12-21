import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">
                    <p>>Login Module</p>
                    <p>>registration Module</p>
                    <p>>search Module</p>
                    <p>>Attendance Module</p>
                    <p>>Attendance Module</p>
                    </p>
                    
                    <p className='text'>We will give you Great platform</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About