import React, {Component,Fragment} from 'react';
import {Container} from 'reactstrap';

export default class Footer extends Component {

    render() {
    return(
      <Fragment>
          <footer className="py-5 bg-dark">
              <Container>
                  <p className="m-0 text-center text-white">Copyroght &copy; Your Website 2018</p>
              </Container>
          </footer>
      </Fragment>
      );
    }  
}
    