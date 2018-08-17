import React, { Component, Fragment } from 'react';

import MenuHeader from 'components/MenuHeader';
import Footer from 'components/Footer';
import PageContent from 'components/PageContent';

import Content from './Content';


export class App extends Component {
  render() {
    return (
        <Fragment>
          <MenuHeader items={Content.menu} />
          <PageContent />
          <Footer />
        </Fragment>
    );
  }
}
