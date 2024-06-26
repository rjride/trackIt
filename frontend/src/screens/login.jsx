import React from 'react'
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material'




const Component = styled(Box)`
width: 400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);

`
const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'

});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div, & > button, & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB6418;
    color;#fff;
    height: 48px;
    border-radius: 2px;
    `

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #28740f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
     color: #878787;
     font-size: 16px;
`;


export default function Login () {
    const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwSo_IDWBaLemSkxPL7o142JAUYhO0guthg&s';
    const [account ,toggleAccount] = useState('login');
    const [credentials, setCredentials] = useState({ email: "",username: "", password: ""});
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    
    const handleLogin = async () => {

    }

    const handleSignup = async () => {
        
    }

    const toggleSignup = ()=>{
       account === 'signup'? toggleAccount('login'): toggleAccount('Signup');
    }
  

    return (
        <Component>
            
            <Box>
                <Image src={imageURL} alt='login' />
                {
                  account === 'login' ?

             <Wrapper>
                <TextField variant="standard"  name="username"  value={credentials.username} onChange={handleChange} label="Enter username" />
                <TextField variant="standard"  name="password"  value = {credentials.password} onChange ={handleChange} label="Enter password" />
                <LoginButton variant="contained" onClick={handleLogin}>Login</LoginButton>
                <Text style={{ textAlign: 'center' }}>OR</Text>
                <SignupButton onClick={()=> toggleSignup()}>Create an account</SignupButton>
            </Wrapper> 
            :
            <Wrapper>
                <TextField variant="standard"  name='email' value={credentials.email} onChange={handleChange}  label="Enter email address" />
                <TextField variant="standard"  name='username' value={credentials.username} onChange={handleChange} label="Enter Username" />
                <TextField variant="standard"  name ='password'value={credentials.password} onChange={handleChange} label="Enter Password" />

                 {/* { error && <Error>{error}</Error>} */}
                <SignupButton onClick={handleSignup}>Signup</SignupButton>
                <Text style={{ textAlign: 'center' }}>OR</Text>
                <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
            </Wrapper>
}
            </Box>
        </Component>
    )
}
