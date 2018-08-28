import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import cookie from 'react-cookie';
import { Provider } from 'react-redux';

import MenuHeader from 'components/MenuHeader';
import Footer from 'components/Footer';
import PageContent from 'components/PageContent';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import Content from 'root/Content'; // временное решенеие, надо будет с БД грузить в будущем?
import store from 'root/store';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      noGreetingModal: cookie.load('no-greeting-modal') || false,
    }

    console.log(cookie.load('no-greeting-modal'));
    console.log(this.state);
  }

  handleModalClose = () => {
    this.setState({ noGreetingModal: true });
    cookie.save('no-greeting-modal', true, { path: '/', maxAge: 100 });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <MenuHeader items={Content.menu} />
            <PageContent />
            <Footer />
            <Modal centered isOpen={!this.state.noGreetingModal} toggle={this.handleModalClose}>
              <ModalBody>
                <p>We greet you at The Blog Place!</p>
                <p>Here you can start your blog, view other blogger's posts, and even comment!</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.handleModalClose}>Got it!</Button>
              </ModalFooter>
            </Modal>
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
