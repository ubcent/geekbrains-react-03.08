import './LoginModal.css';

import React, {Component} from 'react';
export default class LoginModal extends Component {

    render() {
        return (
            <div className="login-card">
                <p className='close-login-modal' onClick={this.closeLogin}>X</p>
                <h1>Log-in</h1>
                <form>
                    <input type="text" name="user" placeholder="Username"/>
                    <input type="password" name="pass" placeholder="Password"/>
                    <input type="submit" name="login" className="login login-submit" value="login"/>
                </form>
            </div>
            )
        }
    closeLogin() {
        document.querySelector('.login-card').style.display = 'none';
        }
    }

