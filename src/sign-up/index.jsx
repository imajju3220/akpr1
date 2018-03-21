import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'

import styled from 'styled-components'
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class SingUp extends Component {
  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          {/* <div className="create_acc"><h3>Create Your Account</h3></div> */}
          <Modal.Header className="text-center">
            <Modal.Title>Sign Up Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={6}>
                    First Name
                    <FormControl type="text" placeholder="First Name" />
                  </Col>
                  <Col componentClass={ControlLabel} sm={6}>
                    Last Name
                    <FormControl type="text" placeholder="Last Name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Email
                    <FormControl type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Password
                    <FormControl type="password" placeholder="Password" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={12}>
                    Confirm Password
                    <FormControl type="password" placeholder="Confirm Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col sm={12}>
                    <Button bsStyle="primary" type="submit" className="loginmodal-submit ">Sign Up</Button>
                  </Col>
                </FormGroup>
              </Form>
              <Col sm={12} className="login-help sign_custom">

                <Link to="/login">Login </Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal.Dialog>
      </div >
    )
  }
}
export default SingUp;