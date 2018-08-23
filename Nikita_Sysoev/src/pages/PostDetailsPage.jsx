import React, {Component} from 'react';

import CommentContainer from '../components/CommentContainer';
import PostDetails from '../components/PostDetails';
import Wrapper from '../components/Wrapper';
import Aside from '../components/Aside';

export default class PostDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        };
    }

    componentDidMount() {
        const {match} = this.props;
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((post) => {
                this.setState({
                    title: post.title,
                    text: post.body
                });
            });
    }

    render() {
        const {title, text} = this.state;
        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        <div className="col-lg-8">
                            <PostDetails title={title} text={text}/>
                            <CommentContainer/>
                        </div>
                        <div className="col-md-4">
                            <Aside/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}