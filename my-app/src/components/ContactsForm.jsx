import React from 'react';
import {Form, Button} from 'react-bootstrap';

function ContactsForm() {
    return (
        
<Form className="p-5">

<Form.Group controlId="formGridText">
    <Form.Label><h3>Contact Form</h3></Form.Label>
</Form.Group>

<Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>


    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Question</Form.Label>
    <Form.Control placeholder="Enter your question here" as="textarea" rows={2} />
  </Form.Group>

    <Button variant="primary" type="submit">
        Send
    </Button>
</Form>
    )
}

export default ContactsForm
