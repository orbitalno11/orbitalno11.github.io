import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'

// component
import SchoolBox from '../Components/school'
import PageHeader from '../Components/pageheader'

// images
import KMUTT from '../img/KMUTT.png'
import DP5 from '../img/DP5_Logo_2_clean.png'

class Education extends Component {
    render() {
        return (
            <Fragment>
                <PageHeader name="Education" />
                <Container>
                    <SchoolBox
                        className={<strong>B.Sc. (Applied Computer Science)</strong>}
                        schoolName={
                            <Fragment>
                                King Mongkut's University of Technology Thonburi (KMUTT)<br />Bangkok, Thailand
                            </Fragment>
                        }
                        start={"August 2017"}
                        end={"Present"}
                        image={KMUTT} />
                    <SchoolBox
                        className={<strong>First-Class Honors, Sciences and Mathematics Program</strong>}
                        schoolName={
                            <Fragment>
                                Dipangkornwittayapat (Mattayom Wat Hattasarn Kaset) Under the Royal School<br />Pathumthani, Thailand
                            </Fragment>
                        }
                        start={"May 2011"}
                        end={"March 2017"}
                        image={DP5} />
                </Container>
            </Fragment>
        )
    }
}

export default Education