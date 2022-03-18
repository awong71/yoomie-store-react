import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../libs/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { IoToggleSharp } from 'react-icons/io5';
import {LoginContainer, LoginForms, LoginForm, LoginLogoImage, LoginButton, LoginToggle, LoginText} from './styles'

function Login(props) {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const notify = (error) => toast.error(error.code,{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });

    function onSubmitHandler(e){
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            navigation('/dashboard')
        })
        .catch(error=>{
            notify(error)
        })
    }

    return ( 
        <LoginContainer style={{ backgroundImage: "url(/img/login-bg.jpg)"}}>
            <LoginLogoImage src="/img/logo-nobg.png" alt="Yoomie logo"></LoginLogoImage>

        <ToastContainer/>

        <LoginForms onSubmit={onSubmitHandler}>
            <LoginForm required className="userNameForm" type="text" id="userName" name="userName" placeholder="Username" 
            onChange={(e)=>setEmail(e.target.value)}></LoginForm>
        
        
            <LoginForm required className="passwordForm" type="password" id="password" name="password" placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}></LoginForm>

            <LoginButton className="loginButton" type="submit">GET STARTED</LoginButton>

            <div className='loginFeatures'>

                <LoginToggle className="toggle">
                    <IoToggleSharp className="toggleIcon" size="1.5rem" style={{color:'white', fill:'rgba(0,0,0,0.5)'}}></IoToggleSharp>
                    <span className="loggedInText" style={{width:'100%'}}> Keep Logged In </span>
                </LoginToggle>

                <LoginText href='#' className="forgotPwText" style={{textAlign:'right', marginBottom:'1rem'}}>Forgot Password?</LoginText>
                <LoginText href='#' className="createText">CREATE ACCOUNT</LoginText>
                <LoginText href='#' className="helpText" style={{textAlign:'right'}}>NEED HELP?</LoginText>

            </div>
            </LoginForms>
            
        
        </LoginContainer>
     );
}

export default Login;