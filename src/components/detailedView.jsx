import React, { Fragment } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DetailedView(props) {
  return (
    <Fragment>
      <div className="detailsContainer">
        <h3>Google</h3>
        <h5>SWE</h5>
        <p>Date Added: 06/22/2022</p>
        <p>Application Status: Offer Accepted</p>
        <p>Link to Posting: www.indeed.com/googleswejob</p>
        <div className="d-inline-flex">
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Select Values
            </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Balance</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Success</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Learning</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Priorities
            </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">$150,00 Salary</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fully Remote</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Generous PTO</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Dogs</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pizza</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      
    </Fragment>
  )
};

export default DetailedView;