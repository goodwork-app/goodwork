import React from 'react';
import { Form, Button }  from 'react-bootstrap';

function LoginModule() {
  const login = () => {
    console.log(text);
  };

  return (
    <div className='centerContainer'>
      <h1>Welcome to goodwork!</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={e => setText(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button className="me-2 bg-secondary">
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