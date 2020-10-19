import React from 'react'
import SearchTab from './SearchTab'
import { Container} from 'react-bootstrap'
import DisplayProduct from './DisplayProduct'

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
