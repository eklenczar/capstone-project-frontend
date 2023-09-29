import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp() {
  return (
    <div>
      <div className="center">
        <Form>
          <h4>Create a new account</h4>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput2">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput4">
            <Form.Label>Location</Form.Label>
            <Form.Control type="location" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput5">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
