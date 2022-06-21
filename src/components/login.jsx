import React, { useState } from 'react';
import { Form, Button }  from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { grabUsername, currUser } from '../redux/currUser';

function LoginModule() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const current = useSelector(currUser);

  const login = () => {
    // Check if username and password are valid (not empty string and string length > 5)
    if (username.length < 5 || password.length < 5) {
      window.alert('Invalid username or password');
      return;
    };
    // Make a post req to server
    // Once server verifies login is valid and sends back user data in response
    // Update store to identify current username
    // Updates state store to hold current user
    dispatch(grabUsername(username));
    console.log(current);
    // Route user to dashboard page
  };

  const register = () => {
    // Verifies valid arguments
    // Post req to server
    // Routes user into dashboard page
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
        <Button onClick={register} className="me-2 bg-secondary">
          Register
        </Button>
        <Button onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default LoginModule;