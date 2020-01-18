import React, {Component} from "react";


class Portfolio extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="page-name">
                    <h1><strong>PORTFOLIO</strong></h1>
                    <hr className="hr"/>
                    <div className="row">
                        <div className="col-12 col-md-1 col-lg-1 mb-2">
                            <h3><strong>2020</strong></h3>
                        </div>
                        <div className="col-12 col-md-11 col-lg-11">
                            <span className="my-circle-point mr-4"/>
                            <strong>FSci Student Information Management system (FSIM)</strong>
                            <p style={{marginLeft: '2.5rem'}}>
                                This project is a web application that can show a summary of student data and
                                analyze
                                the performance of faculty activities. <br/>
                                So, This project in progress by using Agile methodology to develop.
                            </p>
                            <span className="my-circle-point mr-4"/>
                            <strong>Science Learning Space application (android) and administrator website.</strong>
                            <p style={{marginLeft: '2.5rem'}}>
                                Use Java language to develop the application and use php language to develop the
                                administrator’s website.<br/>This project is being developed the new version using
                                kotlin.
                            </p>
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 mb-2">
                            <h3><strong>2019</strong></h3>
                        </div>
                        <div className="col-12 col-md-11 col-lg-11">
                            <span className="my-circle-point mr-4"/>
                            <strong>find my house web application (Web Programming subject project)</strong>
                            <p style={{marginLeft: '2.5rem'}}>
                                Use Node.js framework such as Express as a back-end and use MongoDB to be a website
                                database. Front-end was developed by using Bootstrap CSS framework.
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-4 col-lg-4 text-center p-3">
                                    <img src={require('../img/find-my-house-logo.png')} className="fmh-logo"/>
                                </div>
                                <div className="col-12 col-md-8 col-lg-8">
                                    <div className="box-center">
                                        <div className="btn-group" style={{alignSelf: "center"}}>
                                            <a href="https://find-my-house.herokuapp.com/"
                                               className="btn btn-outline-primary">Enter
                                                find my house website</a>
                                            <a href="https://drive.google.com/file/d/14Wl93lZUcRUieZcl5G3oMtSwxoniEcd8/view?usp=sharing" className="btn btn-outline-primary">Download find my house
                                                presentation
                                                (pdf file)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-1 col-lg-1 mb-2">
                            <h3><strong>2018</strong></h3>
                        </div>
                        <div className="col-12 col-md-11 col-lg-11">
                            <span className="my-circle-point mr-4"/>
                            <strong>UniGO android application
                                (Object Oriented Programming subject project)</strong>
                            <p style={{marginLeft: '2.5rem'}}>
                                Use Java language to develop the application and integrate the Object-Oriented
                                Programming concept to the project such as Encapsulation and Polymorphism.
                            </p>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 text-center">
                                    <img src={require('../img/icon_app.jpg')} className="unigo-icon"/><br/>
                                    <div className="btn-group mt-2">
                                        <a href="https://drive.google.com/file/d/1xhF2r-2q8xcJ2MeU5qafEa_xE0i4l5YH/view?usp=sharing" className="btn btn-outline-primary">Download Uni Go application
                                            (apk file)</a>
                                        <a href="https://drive.google.com/file/d/1kiLwmTbMYKZvVDpVIsvdBOE6rqHVYS_a/view?usp=sharing" className="btn btn-outline-primary">Download Uni Go presentation
                                            (pdf file)</a>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 text-center">
                                    <img src={require('../img/Poster_UniGo.png')} className="unigo-poster"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Portfolio