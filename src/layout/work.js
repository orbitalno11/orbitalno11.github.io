import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

// component
import WorkBox from '../Components/workplace'
import PageHeader from '../Components/pageheader'

// image
import LS from '../img/ls_web_logo.png'
import SoLA from '../img/sola.png'

class Work extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader name="Work Expereinces" />
                <Container>
                    <WorkBox
                        name={<Fragment><strong>Science Learning Space, </strong><span style={{ fontSize: "1.25rem" }}>Faculty of Science, KMUTT</span></Fragment>}
                        position={"Student employment of Activity management and Website support."}
                        detail={
                            <ul>
                                <li>Develop "Science Learning Space" application (android) and administrator website.</li>
                                <li>Edit and support the department website in the Faculty of Science.</li>
                            </ul>
                        }
                        start={"June 2019"}
                        end={"Present"}
                        image={LS} />
                    <WorkBox
                        name={<Fragment><strong>Dean's Office, </strong><span style={{ fontSize: "1.25rem" }}>School of Liberal Arts, KMUTT</span></Fragment>}
                        position={"Student employment of Supplies Subdivision and Audio-visual Subdivision."}
                        detail={
                            <ul>
                                <li>Managing durable goods in the School of Liberal Arts.</li>
                            </ul>
                        }
                        start={"January 2018"}
                        end={"May 2019"}
                        image={SoLA} />
                </Container>
            </Fragment>
        )
    }
}

export default Work