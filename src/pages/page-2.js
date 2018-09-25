import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Technolgy Adoption Consulting</h1>
    <p>The new economy is changing real fast.The technologies coming out today are influencing our business practices rapidly.
       Uber, Airbnb and Netflix have completely distrupted numerous traditional industries. It is essential that in our to stay competitive 
       your business need to be concurrent with trending technologies and practices. Here at Maulik Tech Labs, we guide small business owners on 
       how to understand, apply and migrate to new technology domains in order to suite their business needs. These are the following new technolgy stack we 
       are providing currently but more will added in future:
       <li>Artificial Intelligence</li>
       <li>Machine Learning</li>
       <li>Industrial Robotics</li>
       <li>Cloud Computing</li>
       <li>Fintech</li>
       <li>Enterprise Automation</li>
       <li>Blockchain</li>
    </p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
