import './Blog.scss';

import React, {PureComponent,Fragment} from 'react';
import PropTypes from 'prop-types';
import Post from 'components/Post';
import {Container, Row, Col} from 'reactstrap';

export default class Blog extends PureComponent {

    static propTypes = {
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                userId: PropTypes.number.isRequired,
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
            })
        )
    };

    static defaultProps = {
        posts: [],
    };

    render() {
        const {posts} = this.props;
        return(
            <Fragment>
                <header className="bg" style={{backgroundImage: `url('./img/about-bg.jpg')`}}>
                    <div className="overlay2"/>
                    <Container>
                        <Row>
                            <Col className="col-lg-8 col-md-10 mx-auto">
                                <div className="posts-heading">
                                    <h1>THE POSTS</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>

                <div className="Blog">
                    {posts.map((post) => <Fragment key={post.id}><Post {...post} /></Fragment>)}
                </div>
            </Fragment>
      );
    }  
}
    