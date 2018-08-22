import React, {Component} from 'react';
import PostsList from '../components/PostsList';

export default class PostsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then((response) => response.json())
            .then((posts) => {
                this.setState({
                    posts: posts.map((post) => ({
                        id: post.id,
                        title: post.title,
                        text: post.body,
                    })),
                    loading: false,
                })
            });
    }

    render() {
        console.log(this.state);
        const {posts, loading} = this.state;
        return (
            loading ? 'Loading...' : <PostsList posts={posts}/>
        );
    }
}