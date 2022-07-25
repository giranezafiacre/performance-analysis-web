import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Piechart from '../../components/piechart';
import Sidebar from '../../components/sidebar';
import ReactToPrint from 'react-to-print';

class Piecharts extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (

      <div style={{'display':'flex','flexDirection':'column','alignItems':'center','paddingLeft':'40px','paddingTop':'40px'}}>
        <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
          <Piechart labels={this.props.data ? Object.keys(this.props.data['program']) : []} series={this.props.data ? Object.values(this.props.data['program']) : []} />
          <Piechart labels={this.props.data ? Object.keys(this.props.data['gender']) : []} series={this.props.data ? Object.values(this.props.data['gender']) : []} />
        </div>
        <div style={{ 'display': 'flex', 'gap': '20px', 'justifyContent': 'center' }}>
          <Piechart labels={this.props.data ? Object.keys(this.props.data['health']) : []} series={this.props.data ? Object.values(this.props.data['health']) : []} />
        </div>

      </div>
    );
  }
}
class Overview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
    this.getData = this.getData.bind(this)
  }

  getData = async () => {
    if (!localStorage.getItem('user')) {
      window.location.href = "http://localhost:3000/login";
    }
    if (!localStorage.getItem('username')) {
      window.location.href = 'http://localhost:3000/login';
    }
    const response = await fetch("http://127.0.0.1:8000/latest/")
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });
    this.setState({ data: response });
    console.log(response);
  };


  componentDidMount() {
    if (!this.state.data)
      this.getData = this.getData();
  }

  render() {
    return (
      <>
        <Header />
        <div style={{ 'display': 'flex', 'align-items': 'start' }}>
          <div>
            <Sidebar element='overview' />
          </div>
          <div>
            <Piecharts data={this.state.data} />
          </div>
        </div>
      </>
    );
  }


}
export default Overview;