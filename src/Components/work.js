import React, {Component} from "react";


class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="page-name">
                    <h1><strong>WORK EXPERIENCES</strong></h1>
                    <hr className="hr"/>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3 col-lg-3 mb-2">
                        <strong>June 2019 - Present</strong>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <p>
                            <strong>Science Learning Space</strong>, Faculty of Science, KMUTT<br/>
                            Student employment of Activity management and Website support.
                        </p>
                        <ul>
                            <li>Develop "Science Learning Space" application (android) and administrator website.</li>
                            <li>Edit and support the department website in the Faculty of Science.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 mb-2">
                        <strong>January 2018 - May 2019</strong>
                    </div>
                    <div className="col-12 col-md-9 col-lg-9">
                        <p>
                            <strong>Dean's Office</strong>, School of Liberal Arts, KMUTT<br/>
                            Student employment of Supplies Subdivision and Audio-visual Subdivision.
                        </p>
                        <ul>
                            <li>Managing durable goods in the School of Liberal Arts.</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Work