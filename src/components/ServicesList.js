import React, { Component } from 'react'


import * as contentful from 'contentful'

import Service from './Service'

const SPACE_ID = 'qhq9zxsybmmx'
const ACCESS_TOKEN = '3455d1cf5bda7c866feaa7a7262d23bd3d921438161da6c223aa3b33768b9e96'

class ServicesList extends Component {
    state = {
      posts: []
    }
    client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    })
    componentDidMount() {
      this.fetchPosts().then(this.setPosts);
    }
    fetchPosts = () => this.client.getEntries()
    setPosts = response => {
      this.setState({
        posts: response.items
      })
    }
    render() {
      return (
        <div>
            <br/>
            { this.state.posts.map(({fields}, i) =>
                <Service key={i} {...fields}/>
            )}
        </div>
      )
    }
  }

export default ServicesList;