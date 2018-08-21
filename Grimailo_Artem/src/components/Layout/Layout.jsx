import './Layout.css';

import React, { Component, Fragment } from 'react';

import HeaderMenu from 'components/HeaderMenu';
import Footer from 'components/Footer';
import Header from 'components/Header';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/news'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];
const headerText = {
  title: 'Clean Blog',
  description: 'A Blog Theme by Start Bootstrap',
};

export default class Layout extends Component{
  render(){
    const { children } = this.props;

    return(
      <Fragment>
        <div className="wrapper">
      <HeaderMenu items={menuItems} />
      <Header headerText={headerText}/>

          <div className="content">
          {children}
          </div>

        </div>

      <Footer/>
      </Fragment>
    );
  }
}