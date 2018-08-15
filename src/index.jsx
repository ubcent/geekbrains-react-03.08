import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/new'
  },
]

class App extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <div>Hello world</div>
          <Menu size="big" />
        </Wrapper>
=======
import CommentsList from 'components/CommentsList';
import CommentsForm from 'components/CommentsForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    }
  }
  
  handleSubmit = (comment) => {
    const { comments } = this.state;

    this.setState({
      comments: comments.concat([comment]),
    })
  }

  render() {
    const { comments } = this.state;

    return (
      <Fragment>
        <CommentsList comments={comments} />
        <CommentsForm onSubmit={this.handleSubmit} />
>>>>>>> 9fbd6fb0e995e7f3985912624fc44654ea0962df
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
