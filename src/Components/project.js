import React from 'react'
import { Row, Col } from 'react-bootstrap'

// animation
import { Animated } from 'react-animated-css'

export default ({ name, detail, imgList }) => (
    <Animated animationIn="fadeInUp" isVisible={true} className="mb-2">
        <span className="my-circle-point mr-4" />
        <strong style={{ fontSize: "1.5rem" }}>{name}</strong>
        <p style={{ marginLeft: '2.5rem' }}>{detail}</p>
        <Row>
            {
                imgList !== null && imgList !== undefined && (
                    imgList.length !== 0 && (
                        imgList.map((item, index) => (
                            <Col xs="6" md="3" key={index} className="my-auto" >
                                <img className="my-2" src={item} alt={name + index} className="mx-auto" style={{ width: "100%" }} />
                            </Col>
                        ))
                    )
                )
            }
        </Row>
    </Animated>
)
