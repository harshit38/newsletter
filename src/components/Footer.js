import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
         <div className='bottom-0 start-0 ps-5 footer1'>
            <p className="">	&copy; University of Delhi All Right Reserved</p>
            <div className="social">
                <Link to=""><i className="bx bxl-facebook"></i></Link >
                <Link to=""><i className="bx bxl-instagram"></i></Link >
                <Link to=""><i className="bx bxl-linkedin"></i></Link >
                <Link to=""><i className="bx bxl-twitter"></i></Link >
                <Link to=""><i className="bx bxl-pinterest"></i></Link >
            </div>
        </div>
    </>
  );
}

export default Footer;