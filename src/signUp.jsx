import React, { Component } from 'react';
import { graphql, compose, withApollo } from 'react-apollo';
import { gql } from "graphql-tag";

class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  ashwani() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1 class="text-center mt-5">Sign-Up </h1>
        <hr />
        <div id="formValue"></div>
        <form class="mt-5" id="signup" onsubmit="signUp">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail41">First Name</label>
              <input type="text" class="form-control" id="fname" placeholder="First Name" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword42">Last Name</label>
              <input type="text" class="form-control" id="inputPassword42" placeholder="Last Name" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option value="Delhi">Delhi</option>
                <option value="UP">UP</option>
                <option value="HR">HR</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
                        </label>
            </div>
          </div>
          <button onclick="signUp()" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    );
  }
}

export default compose(withApollo)(SignUP)
