import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fosterLogin } from "./fostersSlice";

function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();

  function handleNewUserSubmit(e) {
    e.preventDefault();
    fetch("/fosters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        location: location,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((foster) => {
          dispatch(fosterLogin(foster));
        });
      } else {
        response.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
    <div>
      <div className="center">
        <Form>
          <h4>Create a new account</h4>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput2">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput4">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="signUpForm.ControlInput5">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onSubmit={handleNewUserSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
      <div>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SignUp;
