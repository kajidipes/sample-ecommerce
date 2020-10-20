import React from 'react'
import { Card } from 'react-bootstrap'
//import {  MDBView } from "mdbreact";

function DisplayLaptop({laptop}) {

    return (
        <div className=" mb-2 ">
             <Card className = "zoom">
                <Card.Img variant="top" src={laptop.image} />
                <Card.Body>
                <Card.Title>{laptop.title}</Card.Title>
                <Card.Text>
                    {laptop.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            
        </div>
    )
}

export default DisplayLaptop
