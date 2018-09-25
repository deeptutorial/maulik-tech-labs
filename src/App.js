
import React, { Component } from 'react'

import Layout from './components/layout'

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
          <h1>Hello</h1>
          <h2>Welcome to Maulik Tech Labs.</h2>
          <h3>Make Small Business Great Again !!</h3>
          <p>Here we will help small business owners build,maintain, scale and automate their online business application</p>
          <p>Whether you want a CMS based ready to go solution, or want speacialised web development solutions; we can get your feet wet.</p>
          <p>Here are the list of solution solutions we provide</p>
          <li>Business Desgn/Project Management Solutions</li>
          <li>Front-End Development/Web Development</li>
          <li>Back-end Development/Application programming</li>
          <li>Software Automation/Workflow Integetration</li>
          <li>Consulting on new technology adoption(eg: AI,Fintech,Blockchain)</li>
          <li>Software Documentation</li>        
       </div>
    )
  }
}

export default App;
