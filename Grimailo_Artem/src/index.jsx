import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';

import Layout from 'components/Layout';
import HomePage from  'components/HomePage';


class App extends Component{
  render(){
    return (
      <Fragment>
        <Layout>

        <HomePage/>

        </Layout>
      </Fragment>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));