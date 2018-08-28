import React from 'react';
import Aside from '../components/Aside';
import Wrapper from '../components/Wrapper';

export default class PageNotFound extends React.Component {
    render() {
        return <div className="content">
        <Wrapper>
                <div className="space-between">
                    <div className="col-lg-8">
                        <div className="blog-header">
                            <h1>Error 404!</h1>
                            <p>Такой страницы не существует</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Aside/>
                    </div>
                </div>
            </Wrapper>
        </div>
    }
}