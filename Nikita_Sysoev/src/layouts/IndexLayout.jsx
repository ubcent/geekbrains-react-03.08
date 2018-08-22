import React, {Component} from 'react';

import Wrapper from '../components/Wrapper';
import {Button} from 'reactstrap';
import {Link} from 'react-router';

export default class IndexLayout extends Component {
    render() {
        return (
            <div className="content masthead"
                 style={{backgroundImage: `url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')`}}>
                <div className="overlay"/>
                <Wrapper>
                    <div className="flex-wrap">
                        <div className="col-md-12">
                            <div className="site-heading">
                                <h1>Welcome to React Blog</h1>
                                <Link to="/blog">
                                    <Button outline color="primary" size="lg">Get Started </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}
