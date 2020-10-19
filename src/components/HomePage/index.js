import React from 'react'
import DisplayProduct from './DisplayProduct'
import SearchTab from './SearchTab'
import { Container} from 'react-bootstrap'

function HomePage() {
    return (
        <div>
            <Container className="mb-5">
            <SearchTab/>
            <DisplayProduct/>
            </Container>
        </div>
    )
}

export default HomePage
