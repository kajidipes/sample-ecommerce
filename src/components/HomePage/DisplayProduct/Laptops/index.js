import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayLaptop from '../DisplayLaptop'
import { Col, Row } from "react-bootstrap";


function Laptops() {
    const laptops =[
        {
            id: 1,
            title: 'Laptop1',
            image : '../../../../../image/laptop.jpg',
            description : 'HP high quality laptop'
        },
        {
            id: 2,
            title: 'Laptop2',
            image : '../../../../../image/laptop.jpg',
            description : 'HP high quality laptop'
        },
        {
            id: 3,
            title: 'Laptop3',
            image : '../../../../../image/laptop.jpg',
            description : 'HP high quality laptop'
        },
    ]

    const laptopList = laptops.map(laptop => 
        <Col sm= "4">
            <DisplayLaptop laptop= {laptop}/>
        </Col>)

    return (
        <React.Fragment>
            <div className=" mt-5 mb-2">
                <h4 className="float-center">Laptop</h4>
            </div>
            <Container fluid> 
                <Row>
                    {laptopList}
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Laptops
