import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css"
const MemeCard = (props) => {

    const navi = useNavigate()
    
    return (
        
        <Card style={{ width: '18rem'  , margin : '25px'}}>
        <Card.Img variant="top" src= {props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={() => navi(`/edit?url=${props.img}`) }>Edit</Button>
        </Card.Body>
      </Card>
    );
}

export default MemeCard