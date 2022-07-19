import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Piechart from '../../components/piechart';
import Sidebar from '../../components/sidebar';

function Overview() {
  const [data, setData] = useState();
  if (!localStorage.getItem('user')) {
    window.location.href = "http://localhost:3000/login"
  }
  const getData = async () => {
    if (!localStorage.getItem('username')) {
      window.location.href = 'http://localhost:3000/login'
    }
    const response = await fetch("http://127.0.0.1:8000/latest/")
      .then((res) => res.json())
      .catch((error) => {
        console.log(error)
      });
    setData(response)
    console.log(response)
  }
  useEffect(() => {
    if (!data) getData();
  })
  return (
    <>
      <Header />
      <div style={{ 'display': 'flex', 'align-items': 'start' }}>
        <div>
          <Sidebar element='overview' />
        </div>
        <div style={{ 'marginTop': '10vh' }}>
          <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
            <Piechart labels={data ? Object.keys(data['program']) : []} series={data ? Object.values(data['program']) : []} />
            <Piechart labels={data ? Object.keys(data['gender']) : []} series={data ? Object.values(data['gender']) : []} />
          </div>
          <div style={{ 'display': 'flex', 'gap': '20px', 'justifyContent': 'center' }}>
            <Piechart labels={data ? Object.keys(data['health']) : []} series={data ? Object.values(data['health']) : []} />
          </div>

        </div>
      </div>
    </>
  )
}
export default Overview;