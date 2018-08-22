import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';
import Button from './components/Button';
import CommentList from 'components/CommentList';
import CommentForm from 'components/CommentForm';

const menuItems = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Blog',
        href: '/'
    },
    {
        label: 'Comments',
        href: '/'
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }
    handleSubmit = (comment) =>{
        const { comments } = this.state;
        this.setState({
            comments: comments.concat([comment]),
        });
    };

    render() {
        const { comments } = this.state;
        return (

            <div>
                <div id="header"><Menu size='small' items={menuItems}/><Button/></div>
                <div><Wrapper> Hello users!</Wrapper></div>
               <div>
                <CommentList/>
                <CommentForm onSubmit={this.handleSubmit()}/>
            </div>
            </div>
        )

    }
}


ReactDOM.render(<App/>, document.getElementById('app'));