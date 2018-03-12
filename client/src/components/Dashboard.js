import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import { isAuthenticated } from '../fakeAuth'
import axios from 'axios'

class Dashboard extends React.Component {
  state = { dishes: [] }

  componentDidMount() {
    axios.get('/api/dishes')
      .then( res => this.setState({ dishes: res.data }) )
  }

  render() {
    let { dishes } = this.state
    if (isAuthenticated()) {
      return (
        <ul>
          { dishes.map( d => 
              <li key={d.id}>
                <Link to={`/dishes/${d.id}`}>{d.name}</Link>
              </li>
            )
          }
        </ul>
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}


export default Dashboard