import React, {PureComponent} from 'react';
import OnePost from 'components/OnePost';

export default class PostContainer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            onePost: {},
            loading: true,
        }
    }

    componentDidMount() {
        const {match} = this.props;
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
            .then((response) => response.json())
            .then((onePost) => {
                this.setState({
                    onePost,
                    loading: false,
                })
            })
    }

    render() {
        const {onePost, loading} = this.state;
        return(
            loading ? 'Loading' : <OnePost {...onePost} />
        )
    }
}