import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import Menu from './components/Menu/';

const menuItems = [{
	label: 'Home',
	href: '/'
},
{label: 'News',
 href: '/new'
 },
 ]

class App extends Component {
	//процесс отрисовки компонента метод render
	
	render() {
		return (
			<div>
				<Menu size="small" items={menuItems} />
				
				
			
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));




