import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

// animation
import { Animated } from 'react-animated-css'

const WorkBox = ({ image, name, start, end, position, detail }) => (
    <Animated animationIn="fadeInUp" isVisible={true}>
        <Row className="my-5">
            <Col xs={12} md={3} className="mb-1">
                <Image
                    src={image}
                    className="mx-auto d-block"
                    style={{ height: "10rem" }}
                    roundedCircle />
            </Col>
            <Col xs={12} md={9}>
                <h3>{name}</h3>
                <h5 className="my-2">{position}</h5>
                <h6>{start} - {end}</h6>
                <div>
                    {detail}
                </div>
            </Col>
        </Row>
    </Animated>
)

export default WorkBox