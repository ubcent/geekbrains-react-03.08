import './UsersList.scss';

import React, {PureComponent,Fragment} from 'react';
import PropTypes from 'prop-types';
import {Table, Container, Row, Col} from 'reactstrap';

export default class UsersList extends PureComponent {
    static propTypes = {
        users: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                username: PropTypes.string.isRequired,
                email: PropTypes.string.isRequired,
                phone: PropTypes.string.isRequired,
                website: PropTypes.string.isRequired,
            })
        ),
    };

    static defaultProps = {
        users: [],
    };
  
    render() {
        const {users} = this.props;
        console.log({users});
        return(
                <Fragment>
                <header className="bg" style={{backgroundImage: `url('./img/about-bg.jpg')`}}>
                    <div className="overlay2"/>
                    <Container>
                        <Row>
                            <Col className="col-lg-8 col-md-10 mx-auto">
                                <div className="posts-heading">
                                    <h1>OUR USERS</h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </header>

                <div className="Blog">
                    <Table striped>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                        </thead>
                        <tbody>

                    {users.map((user) => <Fragment key={user.id}>

                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>

                    </Fragment>)}

                        </tbody>
                    </Table>
                </div>
            </Fragment>
        );
    }  
}
    