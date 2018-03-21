import React, { Component } from "react";
import { Modal, FormControl, FormGroup, Col, Row, ControlLabel, Button, Form, HelpBlock } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Joi = require('joi-browser')

const schema = Joi.object().keys({

  username: Joi.string().required().error((errors) => {
    return {
      template: 'contains {{errors}} errors, here is the list : {{codes}}',
      context: {
        errors: errors.length,
        codes: errors.map((err) => err.type)
      }
    };
  }),
  password: Joi.string().required()

})

class Login extends Component {

  state = {
    username: "",
    password: "",
    usernameError: false,
    passError: false
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state
    console.log(username, password);

    let input = {
      username: username,
      password: password
    }
    // const result = Joi.validate(value, schema);
    // clearEmpties(input)
    Joi.validate(input, schema, (err, input) => {
      if (username == '') {
        this.setState({
          usernameError: true
        })
      } else {
        usernameError: false
      }
      if (password == '') {
        this.setState({
          passError: true
        })
      } else {
        usernameError: false
      }
    });
  }

  handleChange = (e) => {
    let { name, value } = e.target
    this.setState({
      [name]: value

    })
  }
  render() {
    const { username, password } = this.state;

    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header className="text-center">
            <Modal.Title>Login to Your Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form horizontal onSubmit={this.onSubmit} autoComplete='false'>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Email/Username
                </Col>
                  <Col sm={12}>
                    <FormControl type="text" placeholder="Email/Username" value={username} name="username" onChange={this.handleChange} />
                    {this.state.usernameError && <HelpBlock>Please Enter the Username or Email </HelpBlock>}
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Password
                </Col>
                  <Col sm={12}>
                    <FormControl type="password" placeholder="Password" value={password} name="password" onChange={this.handleChange} />
                    {this.state.passError && <HelpBlock>Please Enter the Username or Email </HelpBlock>}
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