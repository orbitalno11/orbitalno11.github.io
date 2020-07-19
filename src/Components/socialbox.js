import React, { Fragment } from 'react'
import { Col } from 'react-bootstrap'


export default ({ image, title, link }) => (
    <Fragment>
        <Col xs={2} md={1} className="text-center mt-2">
            {image}
        </Col>
        <Col xs={10} md={5}>
            <div className="box-center">
                <a className="my-social-link"
                    href={link} style={{ alignSelf: "center" }}>{title}</a>
            </div>
        </Col>
    </Fragment>
)