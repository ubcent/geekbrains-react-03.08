import './Content.css';

import React, {Component} from "react";

import Wrapper from "../Wrapper";
import Aside from "../Aside";
import CommentContainer from "../CommentContainer";
import PostDetails from "../PostDetails";
import Post from "../Post";

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Wrapper>
                    <div className="space-between">
                        <div className="col-lg-8">
                            <h1 className="my-4">
                                Page Heading
                            </h1>
                            <Post/>
                            <Post/>
                            <Post/>
                            <hr/>
                            <CommentContainer/>
                        </div>
                        <div className="col-md-4">
                            <Aside/>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}