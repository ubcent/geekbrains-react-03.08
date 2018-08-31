import React, {PureComponent} from 'react';
import CommentsList from 'components/CommentsList';

    export  default class CommentsListContainer extends PureComponent {

        constructor(props){
            super(props);
            this.state = {
                loading: true,
                comments: [],
                page: 1,
            }
        }

        loadMore() {
            const {page} = this.state;
            fetch(`http://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`)
                .then((response) => response.json())
                .then((comments) => {
                    this.setState((prevState) => ({
                        comments: prevState.comments.concat(comments.map((comment) =>
                            ({id: comment.id, author: comment.name, message: comment.body}))),
                        page: prevState.page + 1,
                        loading: false,
                    }));
                })
        }

        componentDidMount() {
            this.loadMore();
        }

        handleLoadMore = (event) => {
            event.preventDefault();
            this.loadMore();
        };

        render () {
            const {comments,loading} = this.state;
            return(
                loading ? 'Loading' : <CommentsList onLoadMore={this.handleLoadMore} comments={comments}/>
            )
    }
}