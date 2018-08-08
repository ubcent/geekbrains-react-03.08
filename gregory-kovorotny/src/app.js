import React from 'react';
import ReactDOM from 'react-dom';
import { User } from './components/user';
import { Developer } from './components/developer';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <User
          firstName="Agent"
          lastName="Smith"
        />

        <Developer
          firstName="Gregory"
          lastName="Kovorotny"
        />
      </div>
    );
  }
}
