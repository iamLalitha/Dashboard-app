import React, {useState} from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {IoLogoDiscord} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './Home.css';



function Home() {
    const navigate =useNavigate();
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegisterSuccess = () => {
          setRegistrationSuccess(true);
        
        setTimeout(() => {
            setRegistrationSuccess(false);
            navigate('/dashboard');
          }, 3000); // Automatically redirect after 3 seconds
        }; // Redirect to the Dashboard route
      
  return (
    
    <div className="home-container" >
      
        <div className="google-signin-container">
        <h4 className="logo" >LOGO</h4>
            <h1 style={{color:'white', textAlign:'center'}}>Board.</h1>
            <div className='icon-container'> 
            <AiFillGithub/>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <IoLogoDiscord/>
            </div>
        </div>
      
      <div className="signin-form-container">
        <h2 style={{textAlign:'left'}}>Sign In <br></br><span style={{fontSize:'15px'}}>Sign in to your account</span></h2>
        {registrationSuccess && (
        <div className="success-alert">
          Registration is successful! Redirecting to Dashboard...
        </div>
      )}
      <GoogleOAuthProvider clientId="782722390854-djn2vp6dv97p1fc5uceac3lgk8f7s3g2.apps.googleusercontent.com" onSuccess={handleRegisterSuccess}>
        <Google />
      </GoogleOAuthProvider>
      <br></br>
        <form className="signin-form">
          <label>Email address:</label> &nbsp;
          <input type='email' placeholder='Enter your email id' id='email' />
          <br></br>
          
          <label>Password:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='password' placeholder='Enter your password' id='password' />
          <br></br>
          <p>
            <a href='/forgot-password' style={{color:'blue'}}> Forgot Password?</a>
          </p>
          <button type='submit' className='button'>Sign In</button>
        </form>

        <div>
          
          <p>Don't have an account?
           <a href='/register'style={{color:'blue'}} >Register here </a>
          </p>
        </div>
     
      </div>
      
    </div>
    
  )
}

export default Home