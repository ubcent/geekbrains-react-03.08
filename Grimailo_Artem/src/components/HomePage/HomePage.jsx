import './HomePage.css';

import React, { Component, Fragment} from 'react';
import { Container, Row, Col } from 'reactstrap';

import PostPreview from "components/PostPreview";

export default class HomePage extends Component{
  static propTypes = {};

 render(){
   const post =[
     {
     title: 'Man must explore, and this is exploration at its greatest',
     subtitle: 'Problems look mighty small from 150 miles up',
     from: 'Start Bootstrap',
     date: 'on September 24, 2018'
     },
     {
       title: 'Man must explore, and this is exploration at its greatest',
       subtitle: 'Problems look mighty small from 150 miles up',
       from: 'Start Bootstrap',
       date: 'on September 24, 2018'
     },
     {
       title: 'Man must explore, and this is exploration at its greatest',
       subtitle: 'Problems look mighty small from 150 miles up',
       from: 'Start Bootstrap',
       date: 'on September 24, 2018'
     }
   ];
   return (
     <Fragment>
       <Container>
         <Row>
           <Col lg="8" md="10" className="mx-auto">

            <PostPreview posts={post}/>

           </Col>
         </Row>
       </Container>
     </Fragment>
   );
 }
}