import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

class Login extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header className="text-center">
            <Modal.Title>Login to Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email/Username
                </Col>
                  <Col sm={12}>
                    <FormControl type="text" placeholder="Email/Username" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                  <Col sm={12}>
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Col sm={12}>
                    <Button type="submit" className="loginmodal-submit ">Sign in</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Col sm={12} className="login-help">
                Already Have Account <Link to="/sign-up">SignUp</Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
      </div >
    )
  }
}
export default Login;