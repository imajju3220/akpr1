import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { graphql, compose, withApollo } from 'react-apollo';
import { gql } from "graphql-tag";
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import WeatherData from './Table'
// import Navbar from './navbar;'
import SignUP from './signUp';
import Login from './login';
import SingUp from './sign-up/';

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

      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={Login} />
      //     <Route exact path="/sign-up" component={SignUP} />
      //     <Route exact path="/sign-up" component={SignUP} />
      //   </Switch>
      // </Router>
      <SingUp />
    );
  }
}
export default App;
// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Login} />
//       </Switch>
//     </Router>
//   )
// }
// export default App;