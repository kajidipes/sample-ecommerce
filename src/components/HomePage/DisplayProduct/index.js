import React from 'react'
import DisplayLaptop from './DisplayLaptop'
import Laptops from './ProductDetail'
import { DisplayWrapper } from './style'
import { Col, Row } from "react-bootstrap";
import {Link } from "react-router-dom";

function DisplayProduct() {
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
        <DisplayWrapper>
            <div className=" mt-5 mb-2">
                <h4 className="float-center">Laptop</h4>
            </div>
            <Link to ='/productdetail' > 
            <Row> 
                {laptopList} 
            </Row>
            </Link>    
        </DisplayWrapper>
    )
}

export default DisplayProduct
