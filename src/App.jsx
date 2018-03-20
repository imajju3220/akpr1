import React, { Component } from 'react';
import BrowserRouter from 'react-dom';
import { graphql, compose, withApollo } from 'react-apollo';
import { gql } from "graphql-tag";
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import WeatherData from './Table'
import Navbar from './navbar'
import SignUP from './signUp'

class App extends Component {
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

  // componentWillMount() {
  //   console.log(this.props)

  //   this.getCountries()
  // }

  // getCountries = async () => {
  //   let res = this.props.client.query({
  //     query: gql`

  //       `
  //   })
  //   console.log(res)
  // }
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reac</h1>
        </header>


        <SignUP />
        {/* <WeatherData /> */}
      </div>
    );
  }
}

export default compose(withApollo)(App)
