import './HomePage.css';

import React, { Component, Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';

import LeftContent from '../LeftContent';
import MainContent from '../MainContent';

export default class HomePage extends Component{
 render(){
   return (
     <Fragment>
       <Container>
         <Row>
           <Col sm="3" className='left-content'>

             <LeftContent/>

           </Col>
           <Col sm="9" className='main-content'>

             <MainContent/>

           </Col>
         </Row>
       </Container>
     </Fragment>
   );
 }
}