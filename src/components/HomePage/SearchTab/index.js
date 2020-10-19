import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

function SearchTab() {
    return (
        <div className=" mt-5 ">
            <InputGroup className="mb-3">
            <Button variant="primary">Search</Button>{' '}
                {/* <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                </InputGroup.Prepend> */}
                <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
        </div>
    )
}

export default SearchTab
