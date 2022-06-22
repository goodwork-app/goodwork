import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ProfileNav } from "./nav.jsx";
import { useSelector, useDispatch } from 'react-redux';
import { Accordion, ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { grabValue, populateValuesList, populatePrioritesList } from '../redux/profileSlice';

export default function Profile() {
  const [ inputVal, setValue ] = useState('');
  const [ inputPri, setPriority ] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newValue = {
    inputVal: inputVal,
    inputPri: inputPri
  };

  const addValue = () => {
    console.log(inputVal, inputPri);
  }

  return (
    <div>
      <ProfileNav />
      <Accordion defaultActiveKey={['0']} alwaysOpen flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>My Core Values</Accordion.Header>
          <Accordion.Body>
          <InputGroup className="mb-3">
            <FormControl
              type="inputVal"
              placeholder="Add a Value"
              aria-label="Add a Value"
              aria-describedby="basic-addon1"
              onChange={ e => setValue(e.target.value) } 
            />
            <InputGroup.Text id="basic-addon1" 
              onClick={() => { 
                console.log(this.profile.inputVal);
                dispatch(grabValue(inputVal));
              } }>Add</InputGroup.Text>
          </InputGroup>
          <ListGroup>
            <ListGroup.Item>Balance</ListGroup.Item>
            <ListGroup.Item>Learning</ListGroup.Item>
            <ListGroup.Item>Success</ListGroup.Item>
            <ListGroup.Item>{newValue.inputVal}</ListGroup.Item>
          </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>My Job Priorities</Accordion.Header>
          <Accordion.Body>
          <InputGroup className="mb-3">
            <FormControl
              type="inputVal"
              placeholder="Add a Priority"
              aria-label="Add a Priority"
              aria-describedby="basic-addon1"
              onChange={e => grabValue(e.target.value)} 
            />
            <InputGroup.Text id="basic-addon1" >Click</InputGroup.Text>
          </InputGroup>
          <ListGroup>
            <ListGroup.Item>$150,000+ salary</ListGroup.Item>
            <ListGroup.Item>Fully remote</ListGroup.Item>
            <ListGroup.Item>Good team communication</ListGroup.Item>
          </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}