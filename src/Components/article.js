import React, { Component, Fragment } from 'react'
import { Card } from 'react-bootstrap'

// animation
import { Animated } from 'react-animated-css'

class ArticleBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            thumbnail: props.thumbnail,
            link: props.link,
            pubDate: props.pubDate
        }
    }

    render() {
        let { name, thumbnail, link, pubDate } = this.state
        return (
            <Fragment>
                <Animated animationIn="fadeInUp" animationInDuration={1500} isVisible={true} className="w-100 h-100">
                    <Card className="w-100 h-100 p-1 article-box">
                        <Card.Img variant="top" src={thumbnail} />
                        <Card.Body>
                            <Card.Title><strong>{name}</strong></Card.Title>
                            <Card.Subtitle>{pubDate}</Card.Subtitle>
                        </Card.Body>
                        <div className="article-read-more">
                            <a href={link} target="_blank">Read this article</a>
                        </div>
                    </Card>
                </Animated>
            </Fragment>
        )
    }
}

export default ArticleBox