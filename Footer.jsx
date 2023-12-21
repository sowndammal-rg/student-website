import React from 'react';
import "./Footer.css";

const Footer = () => {

    let date = new Date();

  return (
    <footer className='footer bg-black flex flex-center' id = "footer">
        <div className='container flex flex-center w-100'>
            <div className='grid footer-content text-center'>
                <p className='text'>We will give our best!</p>
                <span className='text'>&copy; {date.getFullYear().toString()} Studentinfo. Theme</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
