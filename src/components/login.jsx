import React, { useState } from 'react';
import { Form, Button }  from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { grabUsername, currUser, userLoggedIn } from '../redux/usernameSlice';


function LoginModule() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = {
    username: username,
    password: password
  };

  const login = () => {
    // Check if username and password are valid (not empty string and string length > 5)
    if (username.length < 5 || password.length < 5) {
      window.alert('Invalid username or password, must both be 5 characters or more');
      return;
    };

    // dispatch(userLoggedIn());
    // Once server verifies login is valid and sends back user data in response
    
    // Make a post req to server
    // fetch('/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(userData)
    // })
    // .then(response => response.json())
    // .then()
    
    // Update store to identify current username
    // Route user to dashboard page
    navigate("/dashboard");
  };

  const register = () => {
    // Verifies valid arguments
    if (username.length < 5 || password.length < 5) {
      window.alert('Invalid username or password, must both be 5 characters or more');
      return;
    };
    // Post req to server
    // fetch('/auth/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(userData)
    // })
    // .then(response => response.json())
    // .then()

    // Routes user into profile page
    // navigate("/profile");
  };

  return (
    <div className='centerContainer'>
      <h1>Welcome to goodwork!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Button onClick={() => {
          register();
          dispatch(grabUsername(username));
        }}
          className="me-2 bg-secondary">
            Register
        </Button>
        <Button onClick={() => {
          login();
          dispatch(grabUsername(username));
        }}>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginModule;