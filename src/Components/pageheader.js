import React from 'react'
import { Container } from 'react-bootstrap'

export default ({ name }) => (
    <Container className="mb-2">
        <h1>
            <strong>{name}</strong>
        </h1>
        <hr className="hr" />
    </Container>
)