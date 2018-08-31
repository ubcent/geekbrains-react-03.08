import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import CommentsList from 'containers/CommentsListContainer';
import HomePage from 'components/HomePage';

import routes from './routes';
import store from './store';
import Header from 'components/Header';

class App extends Component {
	constructor(props){
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
	}
	render() {
		const { comments } = this.state;
		
		return (
			
		<Provider store={store}>
				<BrowserRouter>
				<Fragment>
					<Header>I'm header</Header>
					<Switch>
						{routes.map((route, idx) => <Route key={idx} {...route} />)}
					 </Switch>
					<footer>I'm footer</footer>
				</Fragment>
				</BrowserRouter>
		</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
