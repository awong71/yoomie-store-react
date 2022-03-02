import React from 'react';
import {useNavigate} from 'react-router-dom'

import { IoToggleSharp } from 'react-icons/io5';
import {LoginContainer, LoginForms, LoginForm, LoginLogoImage, LoginButton, LoginToggle, LoginText} from './styles'

function Login(props) {
    const navigation = useNavigate()
    function onSubmitHandler(e){
        e.preventDefault();
        navigation('/dashboard')
    }

    return ( 
        <LoginContainer style={{ backgroundImage: "url(/img/login-bg.jpg)"}}>
            <LoginLogoImage src="/img/logo-wName.png" alt="Yoomie logo"></LoginLogoImage>
            


        <LoginForms onSubmit={onSubmitHandler}>
            <LoginForm required className="userNameForm" type="text" id="userName" name="userName" placeholder="Username"></LoginForm>
        
        
            <LoginForm required className="passwordForm" type="password" id="password" name="password" placeholder="Password"></LoginForm>

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