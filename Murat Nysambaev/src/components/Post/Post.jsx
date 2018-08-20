import './Post.css';
import React, {Component} from 'react';

export default class Post extends Component {
    render() {

        return (
            <section id="postIndex" className="widthWrapper">

                <article>
                    <a target="_blank" href="https://sitechop.com/posts/12-speeding-up-your-website">
                        <div className="postImg">
                            <img src="http://sitechop.com/images/demos/speed-website.png"/>
                        </div>
                        <h2>Speeding Up Your Website 101</h2>
                        <p>It seems like only a select few, besides big companies and corporations, care about web page
                            speed and performance. Browsing the web, it's common to see load times of 5 seconds and
                            pages that weigh 4, 5, sometimes 10 megabytes! Even if that's not you, is your website
                            optimized to its full potential? This post is not about stripping your page, its about
                            optimizing everything so that your website loads as fast as possible.</p>
                    </a>
                </article>

                <article>
                    <a target="_blank" href="https://sitechop.com/posts/11-guide-to-grunt-js-basics">
                        <div className="postImg">
                            <img src="http://sitechop.com/images/demos/gruntjs-basics.png"/>
                        </div>
                        <h2>Guide to Grunt JS (The Basics)</h2>
                        <p>Grunt is one of those tools I've heard of forever, but never got around to using. Everyone
                            raves about how great it is and the amount of time they've saved, but could it really be
                            that great? This week I took some time to learn the basics and try it on a project. They
                            were right... Grunt is pretty awesome. Today I'm going to take you through the installation
                            process, teach you the basics, and take you through the creation of your first
                            Gruntfile.</p>
                    </a>
                </article>

                <article>
                    <a target="_blank" href="https://sitechop.com/posts/10-svg-social-media-sprite-icon-tutorial">
                        <div className="postImg">
                            <img src="http://sitechop.com/images/demos/svg-sprite-social-icons.png"/>
                        </div>
                        <h2>Social Media Icons Tutorial (SVG Sprite + Image Replacement)</h2>
                        <p>Nearly every modern website has social media icons on their page. It's a great and stylish
                            why to cross link and hold everything together. There are ton's of bad methods to add these
                            icons to your page though. Today I offer you a clean and semantic way to add social media
                            icons to your website using a SVG sprite sheet and image replacement. A PNG fall back and
                            IE6+ support is included as well.</p>
                    </a>
                </article>

            </section>
        )
    }

}