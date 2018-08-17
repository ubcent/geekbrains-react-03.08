import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Navigation from './components/Navigation';

import '../style.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Wrapper>
					<Navigation />
					<div>
						<Container />
					</div>
				</Wrapper>
			</Fragment>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));
