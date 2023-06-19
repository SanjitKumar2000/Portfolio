import '../App.css'
import React from 'react'


function Contant() {
    return (
        <div className="contact" >
            <div className='main' >
                <div className='social'>
                    <h4>SOCIAL</h4>
                    <a href="mailto:sanjitkuamr.pro@gmail.com" target='_blank'><img src={require('../icon/icons8-gmail-250.png')} alt='linkedin' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="https://www.linkedin.com/in/sanjit-kuamr-9894a227b/" target='_blank'><img src={require('../icon/icons8-linkedin-240.png')} alt='linkedin' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="https://github.com/SanjitKumar2000" target='_blank'><img src={require('../icon/icons8-github-240.png')} alt='github' style={{ width: "40px", marginRight: "0.7vw" }} /></a>
                    <a href="https://www.instagram.com/manu_dhiman_22_/" target='_blank'><img src={require('../icon/icons8-instagram-250.png')} alt='github' style={{ width: "35px", marginRight: "0.7vw" }} /></a>
                </div>
                <div className="bottomInfo">
                    <h4 >SANJIT KUMAR</h4>
                    <p >A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                </div>
                <br />
                <br />
                <hr className='hrtag'/>
                <p> &copy; Copyright 2023. Made by <a href="">Sanjit Kuamr</a></p>
            </div>
        </div>
    );
};

export default Contant;