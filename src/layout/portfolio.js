import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMousePointer, faFilePdf } from '@fortawesome/free-solid-svg-icons'

// component
import Pageheader from '../Components/pageheader'
import Project from '../Components/project'

// images
// find my house
import fmh from '../img/find-my-house/find-my-house-logo.png'
import fmh_sc1 from '../img/find-my-house/screen1.png'
import fmh_sc2 from '../img/find-my-house/screen2.png'
import fmh_sc3 from '../img/find-my-house/screen3.png'
// unigo
import unigo from '../img/unigo/icon_app.jpg'
import unigo_poster from '../img/unigo/Poster_UniGo.png'
import unigo_sc1 from '../img/unigo/screen1.png'
// 14d
import app14d from '../img/14d-diary/logo.jpg'
import app14d_sc1 from '../img/14d-diary/screen1.jpg'
import app14d_sc2 from '../img/14d-diary/screen2.jpg'
import app14d_sc3 from '../img/14d-diary/screen3.jpg'

class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <Pageheader name="Portfolio" />
                <Container>
                    <Row className="mb-2">
                        <Col xs={12} md={2}>
                            <h3 className="text-center">
                                <strong>2020</strong>
                            </h3>
                        </Col>
                        <Col xs={12} md={10}>
                            <Project
                                name="Wishlist"
                                detail={"This project is the web application for education management. Use JavaScript to develop this web using express as a back-end framework and use other service such as firebase and LINE APIs (This project is under development)."}
                            />
                            <Project
                                name="14D-Diary"
                                detail={
                                    <Fragment>
                                        This project is an android application.
                                        Use kotlin language to develop the
                                        application and use other services such
                                        as firebase and LINE APIs.
                                        <br />
                                        <ul
                                            className="my-1 article-read-more"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <li>
                                                <a
                                                    href="https://drive.google.com/file/d/15dLM8VF_fTMDYAZ22C2TY7zwFoVXOzYL/view?usp=sharing"
                                                    target="_blank"
                                                >
                                                    More detail about this
                                                    project.
                                                </a>
                                                &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faFilePdf}
                                                />
                                            </li>
                                        </ul>
                                    </Fragment>
                                }
                                imgList={[
                                    app14d,
                                    app14d_sc1,
                                    app14d_sc2,
                                    app14d_sc3
                                ]}
                            />
                            <Project
                                name="FSci Student Information Management system (FSIM)"
                                detail={
                                    <Fragment>
                                        This project is a web application that
                                        can show a summary of student data and
                                        analyze the performance of faculty
                                        activities.
                                        <br />
                                        <ul
                                            className="my-1 article-read-more"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <li>
                                                <a
                                                    href="https://github.com/orbitalno11/FSIM/blob/master/README.md"
                                                    target="_blank"
                                                >
                                                    More detail about this
                                                    project.
                                                </a>
                                                &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMousePointer}
                                                />
                                            </li>
                                        </ul>
                                    </Fragment>
                                }
                            />
                            <Project
                                name="Science Learning Space application (android) and administrator website."
                                detail="Use Java language to develop the application and use php language to develop the administrator’s website.
                                This project is to update the application to the new version using kotlin language and administrator's website use express.js as a back-end framework and react.js as a front-end framework. Use firebase services such as realtime database, authentication and storage, and another service such as LINE APIs."
                            />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} md={2}>
                            <h3 className="text-center">
                                <strong>2019</strong>
                            </h3>
                        </Col>
                        <Col xs={12} md={10}>
                            <Project
                                name="find my house web application (Web Programming subject project)"
                                detail={
                                    <Fragment>
                                        Use Node.js framework such as Express as
                                        a back-end and use MongoDB to be a
                                        website database. Front-end was
                                        developed by using Bootstrap CSS
                                        framework.
                                        <br />
                                        <ul
                                            className="my-1 article-read-more"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <li>
                                                <a
                                                    href="https://find-my-house.herokuapp.com/"
                                                    target="_blank"
                                                >
                                                    Click here to visit find my
                                                    house website.
                                                </a>
                                                &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faMousePointer}
                                                />
                                            </li>
                                            <li>
                                                <a
                                                    href="https://drive.google.com/file/d/14Wl93lZUcRUieZcl5G3oMtSwxoniEcd8/view?usp=sharing"
                                                    target="_blank"
                                                >
                                                    More detail about this
                                                    project.
                                                </a>
                                                &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faFilePdf}
                                                />
                                            </li>
                                        </ul>
                                    </Fragment>
                                }
                                imgList={[fmh, fmh_sc1, fmh_sc2, fmh_sc3]}
                            />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col xs={12} md={2}>
                            <h3 className="text-center">
                                <strong>2018</strong>
                            </h3>
                        </Col>
                        <Col xs={12} md={10}>
                            <Project
                                name="UniGO android application (Object Oriented Programming subject project)"
                                detail={
                                    <Fragment>
                                        Use Java language to develop the
                                        application and integrate the
                                        Object-Oriented Programming concept to
                                        the project such as Encapsulation and
                                        Polymorphism.
                                        <br />
                                        <ul
                                            className="my-1 article-read-more"
                                            style={{ textAlign: 'left' }}
                                        >
                                            <li>
                                                <a
                                                    href="https://drive.google.com/file/d/1kiLwmTbMYKZvVDpVIsvdBOE6rqHVYS_a/view?usp=sharing"
                                                    target="_blank"
                                                >
                                                    More detail about this
                                                    project.
                                                </a>
                                                &nbsp;
                                                <FontAwesomeIcon
                                                    icon={faFilePdf}
                                                />
                                            </li>
                                        </ul>
                                    </Fragment>
                                }
                                imgList={[unigo, unigo_poster, unigo_sc1]}
                            />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Portfolio
