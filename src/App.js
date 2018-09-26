
import React, { Component } from 'react'

import Layout from './components/layout'
import ServicesList from './components/ServicesList'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
          <h1>Hello !! Welcome to Maulik Tech Labs.</h1>
          <h3>Make Small Business Great Again !!</h3>
          <p>Here we will help small business owners build,maintain, scale and automate their online business application</p>
          <p>Whether you want a CMS based ready to go solution, or want speacialised web development solutions; we can get your feet wet.</p>
          <p>Here are the list of solution solutions we provide</p>
          <ServicesList />               
       </div>
    )
  }
}

export default App;
