import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div>
      <div className="center">
        <Form>
          <h4>Log in</h4>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control size="sm" type="text" placeholder="" />
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

export default Login;
