import React from 'react';
import ReactDOM from 'react-dom';
import { User } from './components/user';
import { Developer } from './components/developer';


ReactDOM.render(
  <User
    firstName="Agent"
    lastName="Smith"
  />,
  document.getElementById('user')
);

ReactDOM.render(
  <Developer
    firstName="Gregory"
    lastName="Kovorotny"
  />,
  document.getElementById('developer')
);
