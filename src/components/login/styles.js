import styled from 'styled-components';

const LoginContainer = styled.section`
    background: no-repeat bottom right / cover;
    height: 100vh;
    padding-top: 5rem;
`;

const LoginForms = styled.form`
/* position: relative; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-wrap:wrap;
`;

const LoginForm = styled.input`
    width: 100%;
    font-size: 0.8rem;
    color:white;
    margin: 1rem 50rem;
    background-color: rgba(100, 100, 100, 0.3);
    border: none;
    border-radius: 20px;
    outline: none;
    padding: 0.8rem 4rem 0.8rem 3rem;
`;

const LoginLogoImage = styled.img`
    display:block;
    height:8rem;
    margin: 2rem auto;
`;

const LoginButton = styled.button`
  background-color: rgba(100, 10, 10, 0.2);
  border: none;
  border-radius: 20px;
  width: 100%;
  margin: 1rem 50rem;
  padding: 0.8rem;
  color: white;
`;

const LoginToggle = styled.div`
`;

const LoginText = styled.a`
display: block;
  width:50%;
`;



export {LoginContainer, LoginForms, LoginForm, LoginLogoImage, LoginButton, LoginToggle, LoginText}