import React, { Component, Fragment } from 'react';

import MenuHeader from 'components/MenuHeader';
import Footer from 'components/Footer';
import PageContent from 'components/PageContent';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import Content from './Content';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greetingModal: true, // по идее лучше брать из Cookie и хранить там же
    }
  }

  handleModalClose = () => {
    this.setState({ greetingModal: false });
  }

  render() {
    return (
      <Fragment>
        <MenuHeader items={Content.menu} />
        <PageContent />
        <Footer />
        <Modal centered isOpen={this.state.greetingModal} toggle={this.handleModalClose}>
          <ModalBody>
            <p>We greet you at The Blog Place!</p>
            <p>Here you can start your blog, view other blogger's posts, and even comment!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleModalClose}>Got it!</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}
