import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Form from '../Form';

const ModalExampleShorthand = () => (

	<Modal
		trigger={<Button>Login</Button>}
		header='Login'
		content={ <Form /> }
	/>
);
{/*<Form.Button content='Submit' />*/}

export default ModalExampleShorthand;