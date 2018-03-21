import React, { Component } from "react";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import Navbar from '../navbar'
import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2485f979fb97edebcf0386f92517b038')
      .then((result) => {
        const messages = result.data;
        this.setState({
          data: messages.list
        })
        console.log("COMPONENT WILL Mount messages2 : ", this.state.data);
      })
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  render() {
    return [
      <Navbar />,
      <div className="container mt-5">
        <ReactTable
          key={this.state.data.index}
          data={this.state.data}
          columns={[
            {
              Header: "Temp",
              accessor: "main.grnd_level"
            },
            {
              Header: "Pressure",
              id: "lastName",
              accessor: "main.pressure"
            },
            {
              Header: "Humidity",
              id: "lastName",
              accessor: "main.humidity"
            },
            {
              Header: "Min",
              id: "lastName",
              accessor: "main.temp_min"
            },
            {
              Header: "Max",
              id: "lastName",
              accessor: "main.temp_max"
            }
          ]}
        />
      </div>
    ]

  }
}

export default Dashboard;