import React from 'react';
import Card from 'react-bootstrap/Card';

// props = {
//   company,
//   jobTitle,
//   status,
//   displayJobDetails()
// }

function JobCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Company Name</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Job Title</Card.Subtitle>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text> */}
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
        <button className="btn btn-primary">More Details</button>
      </Card.Body>
    </Card>
  )
};

export default JobCard;