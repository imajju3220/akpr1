import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Grid } from "react-bootstrap";

import { graphql, compose, withApollo } from 'react-apollo';
import { gql } from "graphql-tag";
import Login from './login';
import SingUp from './sign-up';
import Dashboard from './dashboard';

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
      <Router>
        <Switch>
          {/* <Grid> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SingUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          {/* </Grid> */}
        </Switch>
      </Router>
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