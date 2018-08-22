import React, {Component,Fragment} from 'react';

import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

export default class Post extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comments: [],
        }
    }
    handleSubmit = (comment) => {
        const {comments} = this.state;

        this.setState({
            comments: comments.concat([comment]),
        })
    };

    render() {
        const {comments} = this.state;

        return(
            <Fragment>
                <h1 className="mt-4">Post title</h1>
                <p className="lead">by <a href="https://getbootstrap.com/">Start Bootstrap</a></p>
                <hr/>
                <p>Posted on January 1, 2018 at 12:00 PM</p>
                <hr/>
                <img src="http://placehold.it/900x300" alt="image" className="img-fluid rounded"/>
                <hr/>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum delectus,
                    itaque magni maiores natus nihil nostrum omnis pariatur porro qui, quod, quos sapiente sed sit temporibus ullam unde vero!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut cupiditate
                    dolor explicabo ipsum maiores nesciunt porro, quibusdam ratione recusandae sapiente totam vel.
                    Accusamus accusantium at dicta quo ullam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto dolorum iste modi,
                    molestias possimus temporibus! Ab alias deserunt doloribus ea fugiat neque nisi quae, qui quo sed soluta.</p>
                <blockquote className="blockquote">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ea ex explicabo fuga illum, impedit iste iure, libero molestias numquam placeat provident recusandae sequi tempore temporibus voluptate voluptatum. Dolorum, quo.</p>
                    <footer className="blockquote-footer">
                        Someone famous in &nbsp;
                        <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aut cupiditate dolor
                    explicabo ipsum maiores nesciunt porro, quibusdam ratione recusandae sapiente totam vel. Accusamus accusantium at dicta quo ullam!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto dolorum
                    iste modi, molestias possimus temporibus! Ab alias deserunt doloribus ea fugiat neque nisi quae, qui quo sed soluta.</p>
                <hr/>
                <CommentsForm onSubmit={this.handleSubmit}/>
                <CommentsList comments={comments}/>
            </Fragment>
        )
    }
}