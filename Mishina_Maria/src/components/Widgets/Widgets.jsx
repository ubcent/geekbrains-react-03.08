import React, {Component,Fragment} from 'react';
import {Card, Button, CardHeader, CardBody, Input, InputGroup, Row, Col} from 'reactstrap';

export default class Widgets extends Component {

    render() {

        function Search_Widget(){
            return(
                <Card className="my-4">
                    <CardHeader tag="h5">Search</CardHeader>
                    <CardBody>
                        <InputGroup>
                            <Input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <Button>Go!</Button>
                            </span>
                        </InputGroup>
                    </CardBody>
                </Card>
            );
        }

        function Categories_Widget(){
            return(
                <Card className="my-4">
                    <CardHeader tag="h5">Categories Widget</CardHeader>
                    <CardBody>
                        <Row>
                            <Col xs="lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="">HTML</a>
                                    </li>
                                    <li>
                                        <a href="">Freebies</a>
                                    </li>
                                </ul>
                            </Col>
                            <Col xs="lg-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="">CSS</a>
                                    </li>
                                    <li>
                                        <a href="">Tutorials</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            )
        }

        function Side_Widget() {
            return(
                <Card className="my-4">
                    <CardHeader tag="h5">Side Widget</CardHeader>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur blanditiis consequuntur.
                    </CardBody>
                </Card>
            )
        }

    return(
      <Fragment>
          <Search_Widget/>
          <Categories_Widget/>
          <Side_Widget/>
      </Fragment>
      );
    }  
}
    