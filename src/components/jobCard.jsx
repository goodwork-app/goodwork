import React from 'react';
import Card from 'react-bootstrap/Card';

function JobCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.company}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.title}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Application Status: {props.status}</Card.Subtitle>

        <button className="btn btn-primary" onClick={() => props.showDetails(props.company)}>More Details</button>
      </Card.Body>
    </Card>
  )
};

export default JobCard;