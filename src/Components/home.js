import React, {Component} from 'react'

class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="row no-gutters">
                    <div className="col-12 col-lg-4 text-center">
                        <img src={require('../img/pic.png')} className="imgprofile"/>
                    </div>
                    <div className="col-12 col-lg-8 text-center">
                        <div className="center-box">
                            <h1><strong>SITTHINON SUEA-WAI</strong></h1>
                            <h2>Web and mobile application developer.</h2>
                        </div>
                    </div>
                </div>
                <hr className="hr"/>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h2 className="text-center"><strong>About me</strong></h2>
                        <p className="text-center">
                            <i>" I'm just a man who fell in love with Pokemon and soya milk. "<br/>
                                . . . . . </i>
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h3 className="mt-5"><strong>PERSONAL INFORMATION</strong></h3>
                        <p>
                            <strong>Year of Birth: </strong> 1998 <br/>
                            <strong>Nationality: </strong> Thai <br/>
                            <strong>Gender: </strong> Male
                        </p>
                        <h3 className="mt-5"><strong>HOBBIES</strong></h3>
                        <div className="row">
                            <div className="col-2 col-lg-1 text-center mt-2">
                                <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M6.02 7.389c.399-.285.85-.417 1.292-.417.944 0 1.852.6 2.15 1.599-.382-.294-.83-.437-1.281-.437-.458 0-.919.147-1.321.434-.799.57-1.153 1.541-.845 2.461-1.242-.89-1.247-2.747.005-3.64zm3.741 12.77c.994.334 4.071 1.186 7.635 3.841l6.604-4.71c-1.713-2.402-1.241-4.082-2.943-6.468-1.162-1.628-1.827-1.654-3.037-1.432l.599.84c.361.507-.405 1.05-.764.544l-.534-.75c-.435-.609-1.279-.229-2.053-.051l.727 1.019c.36.505-.403 1.051-.764.544l-.629-.882c-.446-.626-1.318-.208-2.095-.01l.769 1.078c.363.508-.405 1.049-.764.544l-3.118-4.366c-.968-1.358-3.088.083-2.086 1.489l4.605 6.458c-.494-.183-1.363-.349-1.93-.349-1.754 0-2.429 1.92-.222 2.661zm-3.286-2.159h-4.475v-14h10v6.688l2-.471v-8.217c0-1.104-.895-2-2-2h-10c-1.105 0-2 .896-2 2v18.678c-.001 2.213 3.503 3.322 7.005 3.322 1.812 0 3.619-.299 4.944-.894-2.121-.946-6.378-1.576-5.474-5.106z"/>
                                </svg>
                            </div>
                            <div className="col-10 col-lg-5">
                                <div className="center-box">
                                    <p>Read technology news.</p>
                                </div>
                            </div>
                            <div className="col-2 col-lg-1 text-center mt-2">
                                <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M20 16.78c.002-1.8.003-2.812 0-4.027-.001-.417.284-.638.567-.638.246 0 .49.168.538.52.19 1.412.411 2.816.547 3.146.042.099.113.141.185.141.123 0 .244-.123.206-.284-.255-1.069-.493-2.519-.607-3.334 1.904 1.854 2.314 2.005 2.192 3.548-.089 1.129-.52 2.508.373 4.255l-2.563.893c-.062-.314-.138-.637-.226-.933-.515-1.721-1.214-1.752-1.212-3.287zm-16.567-4.665c-.246 0-.49.168-.538.52-.19 1.412-.411 2.816-.547 3.146-.042.099-.113.141-.185.141-.123 0-.244-.123-.206-.284.255-1.069.493-2.519.607-3.334-1.904 1.854-2.314 2.005-2.192 3.548.09 1.128.521 2.507-.372 4.254l2.562.894c.062-.314.138-.637.226-.933.515-1.721 1.214-1.752 1.212-3.287-.002-1.8-.003-2.812 0-4.027.001-.418-.285-.638-.567-.638zm1.567.642zm14.001 2.637c-2.354.194-4.35.62-6.001 1.245v-9.876l.057-.036c1.311-.816 3.343-1.361 5.943-1.603v7.633c-.002-.459.165-.881.469-1.186.377-.378.947-.562 1.531-.391v-8.18c-3.438.105-6.796.658-9 2.03-2.204-1.372-5.562-1.925-9-2.03v8.18c.583-.17 1.153.012 1.531.391.304.305.471.726.469 1.184v-7.631c2.6.242 4.632.788 5.943 1.604l.057.035v9.876c-1.651-.626-3.645-1.052-6-1.246v1.385c0 .234-.021.431-.046.622 2.249.193 4.372.615 6.046 1.381.638.292 1.362.291 2 0 1.675-.766 3.798-1.188 6.046-1.381-.025-.191-.046-.386-.046-.621l.001-1.385zm-12.001-2.426c1.088.299 2.122.64 3 .968v1.064c-.823-.345-1.879-.705-3-1.015v-1.017zm0-1.014c1.121.31 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968v1.017zm0-5.09v1.017c1.121.311 2.177.67 3 1.015v-1.064c-.878-.328-1.912-.669-3-.968zm0 3.058c1.121.31 2.177.67 3 1.015v-1.063c-.878-.328-1.912-.669-3-.968v1.016zm10 4.063c-1.121.31-2.177.67-3 1.015v-1.064c.878-.328 1.912-.669 3-.968v1.017zm0-3.048c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017zm-3-3.105v1.064c.823-.345 1.879-.705 3-1.015v-1.017c-1.088.299-2.122.64-3 .968zm3 1.074c-1.088.299-2.122.64-3 .968v1.064c.823-.345 1.879-.705 3-1.015v-1.017z"/>
                                </svg>
                            </div>
                            <div className="col-10 col-lg-5">
                                <div className="center-box">
                                    <p>Read self-development books.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <h3 className="mt-5"><strong>CONTACT & SOCIAL MEDIA</strong></h3>
                        <p>
                            <strong>Lives in: </strong> Bang Mot, Thung Kru, Bangkok <br/>
                            <strong>Hometown: </strong> Klong Sam, Klong Luang, Pathumthani <br/>
                            <strong>Country: </strong> Thailand
                        </p>
                        <div className="social-box">
                            <div className="row">
                                <div className="col-2 col-lg-1 text-center mt-2">
                                    <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path className="social-svg"
                                              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                                    </svg>
                                </div>
                                <div className="col-10 col-lg-5">
                                    <div className="center-box">
                                        <a className="my-social-link"
                                           href="https://github.com/orbitalno11">github.com/orbitalno11</a>
                                    </div>
                                </div>
                                <div className="col-2 col-lg-1 text-center mt-2">
                                    <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path className="social-svg"
                                              d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/>
                                    </svg>
                                </div>
                                <div className="col-10 col-lg-5">
                                    <div className="center-box">
                                        <a className="my-social-link"
                                           href="https://medium.com/@stn.nths">medium.com/@stn.nths</a>
                                    </div>
                                </div>
                                <div className="col-2 col-lg-1 text-center mt-2">
                                    <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path className="social-svg"
                                              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                                    </svg>
                                </div>
                                <div className="col-10 col-lg-5">
                                    <div className="center-box">
                                        <a className="my-social-link" href="https://facebook.com/sitthinon.s">Aob
                                            Sitthinon</a>
                                    </div>
                                </div>
                                <div className="col-2 col-lg-1 text-center mt-2">
                                    <svg className="social-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path className="social-svg"
                                              d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/>
                                    </svg>
                                </div>
                                <div className="col-10 col-lg-5">
                                    <div className="center-box">
                                        <a className="my-social-link"
                                           href="https://www.instagram.com/sitthinon.s">sitthinon.s</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="mt-5"><strong>PROFESSIONAL SKILLS</strong></h3>
                        <div className="pro-skill-box">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <h5><strong>Programming language</strong></h5>
                                    <ul>
                                        <li><img className="pro-skill-icon" src={ require('../img/java-4.svg') } />Java</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/kotlin-1.svg') } />kotlin</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/python-5.svg') } />python</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/javascript.svg') } />JavaScript</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/php-1.svg') } />php</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <h5><strong>Web stack</strong></h5>
                                    <ul>
                                        <li><img className="pro-skill-icon" src={ require('../img/bootstrap-4.svg') } />Bootstrap</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/express-109.svg') } />Express.js</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/flask.svg') } />Flask</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/jquery-1.svg') } />JQuery</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/laravel-2.svg') } />Laravel</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/react-1.svg') } />React.js</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <h5><strong>Database Tools</strong></h5>
                                    <ul>
                                        <li><img className="pro-skill-icon" src={ require('../img/mysql-5.svg') } />MySQL</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/mongodb.svg') } />MongoDB</li>
                                        <li><img className="pro-skill-icon" src={ require('../img/firebase-2.svg') } />Firebase</li>
                                    </ul>
                                    <h5><strong>Other Tools</strong></h5>
                                    <ul>
                                        <li><img className="pro-skill-icon" src={ require('../img/line-messenger.svg') } />LINE API</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <h5><strong>Foreign languages</strong></h5>
                                    <ul>
                                        <li>English (B1)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <h3 className="mt-5"><strong>PERSONAL SKILLS</strong></h3>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                                <ul>
                                    <li>Time management</li>
                                    <li>Life-Long learning</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-6">
                                <ul>
                                    <li>Emotional intelligence</li>
                                    <li>Adaptability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="btn">btn</button>
            </React.Fragment>
        )
    }

}

export default Home