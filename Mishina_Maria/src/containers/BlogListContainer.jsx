import React, {PureComponent} from 'react';
import Blog from 'components/Blog';

export default class BlogListContainer extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        fetch(`http://jsonplaceholder.typicode.com/posts?_limit=10`)
            .then((response) => response.json())
            .then((posts) => {
                this.setState({
                    posts: posts.map((post) => ({
                        userId: post.userId,
                        id: post.id,
                        title: post.title,
                        body: post.body,
                    })),
                })
            })
    }

    render(){
        const {posts} = this.state;
        return(
            <Blog posts={posts}/>
        )
    }
}