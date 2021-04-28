import React, { Component, Fragment } from 'react'
import { Container, Image, Row, Col, Carousel } from 'react-bootstrap'
import axios from 'axios'

// image
import mediumIcon from '../img/medium-icon.png'

// utils
import { mediumFetch } from '../utils/Constants'

// component
import Article from '../Components/article'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            articleList: null,
            highlight: null
        }
    }

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles = () => {
        axios.get(mediumFetch)
            .then(res => {
                let articles = res.data.items
                let highlight = null
                if (articles.length > 4) {
                    highlight = articles.slice(0, 4)
                    articles = articles.slice(4, 8)
                } else {
                    highlight = articles
                    articles = null
                }
                this.setState({
                    isLoading: false,
                    articleList: articles,
                    highlight: highlight
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        let { isLoading, articleList, highlight } = this.state
        return (
            <Fragment>
                <Container className="mb-2">
                    <h1>
                        <strong>My Articles</strong>&nbsp;
                        <span style={{ fontSize: "1.5rem" }}>on</span>&nbsp;
                        <Image src={mediumIcon} height={"45rem"} />&nbsp;
                        <span>
                            <a
                                href="https://medium.com/@orbitalno11"
                                style={{ fontSize: "1rem", color: "black" }}>visit my blog</a>
                        </span>
                    </h1>
                    <hr className="hr" />
                </Container>
                <Container fluid>
                    <Carousel>
                        {
                            !isLoading && (
                                highlight.map((item, index) => (
                                    <Carousel.Item key={index}>
                                        <img className="d-block w-100" src={item['thumbnail']} alt={item['title']} />
                                        <Carousel.Caption style={{ backgroundColor: "#13519375" }}>
                                            <h3>{item['title']}</h3>
                                            <h4>{item['pubDate']}</h4>
                                            <div className="article-read-more" style={{ textAlign: "center" }}>
                                                <a href={item['link']} target="_blank" style={{ color: "white" }}>Read this article</a>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            )
                        }
                    </Carousel>
                </Container>
                {/* style={{ backgroundColor: "#135193" }} */}
                <div >
                    <Container className="mt-3">
                        <Row className="justify-content-md-center" >
                            {
                                !isLoading && (
                                    articleList.map((item, index) => (
                                        <Col xs={12} md={3} key={index} className="my-2">
                                            <Article name={item['title']} thumbnail={item['thumbnail']} pubDate={item['pubDate']} link={item['link']} />
                                        </Col>
                                    ))
                                )
                            }
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}

export default Home