import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import './Form.css';

class FormExampleCaptureValues extends Component {
	state = { email: '', password: '', submittedEmail: '', submittedPassword: '' };

	handleSubmit = () => {
		const {  email, password } = this.state;

		this.setState({ submittedEmail: email, submittedPassword: password })
	};

	handleChange = (e, { email, value }) => this.setState({ [email]: value });

	render() {
		const {email, password, submittedEmail, submittedPassword } = this.state;

		return (
			<div>
				<Form class='form' onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Input
							placeholder='Email'
							name='email'
							value={email}
							onChange={this.handleChange}
						/>
						<Form.Input
							placeholder='Password'
							name='Password'
							type='password'
							value={password}
							onChange={this.handleChange}
						/>
						<Form.Button content='Submit'/>
					</Form.Group>
				</Form>
			</div>
		)
	}
}

export default FormExampleCaptureValues
