import React from 'react'
import SearchTab from './SearchTab'
import { Container} from 'react-bootstrap'
import DisplayProduct from './DisplayProduct'
import { HomeWrapper } from './style'

function HomePage() {
    return (
        <HomeWrapper>
            <Container className="mb-5">
                <SearchTab/>
                <DisplayProduct/>
            </Container>
        </HomeWrapper>
    )
}

export default HomePage
