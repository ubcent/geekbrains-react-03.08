import './vendors';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    showTime() {
        alert(new Date().toLocaleString());
    }

    render() {
        return <h1 onClick={this.showTime}>
            Nikita Sysoev
        </h1>
    }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);