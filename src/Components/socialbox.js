import React from 'react'
import { Col, Row } from 'react-bootstrap'


export default ({ image, title, link }) => (
    <Row className="my-3">
        <Col xs={2} md={1} className="text-center">
            {image}
        </Col>
        <Col xs={10} md={5}>
            <div className="box-center">
                <a className="my-social-link"
                    href={link} style={{ alignSelf: "center" }}>{title}</a>
            </div>
        </Col>
    </Row>
)