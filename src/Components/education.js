import React, {Component} from "react";

class Education extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-name">
                        <h1><strong>EDUCATION</strong></h1>
                    <hr className="hr"/>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-3 mb-2">
                        <strong>August 2017 - Present</strong>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <p>
                            <strong>B.Sc. (Applied Computer Science)</strong><br/>
                            King Mongkut's University of Technology Thonburi (KMUTT)<br/>
                            Bangkok, Thailand
                        </p>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 mb-2">
                        <strong>May 2011 - March 2017</strong>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <p>
                            <strong>First-Class Honors, Sciences and Mathematics Program</strong><br/>
                            Dipangkornwittayapat (Mattayom Wat Hattasarn Kaset) Under the Royal School<br/>
                            Pathumthani, Thailand
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Education