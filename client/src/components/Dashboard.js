import React from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Form from './Form'

class Dashboard extends React.Component {
  state = { dishes: [], showForm: false }

  componentDidMount() {
    axios.get('/api/dishes')
      .then( res => this.setState({ dishes: res.data }) )
  }

  show() {
    let { dishes } = this.state
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
  }

  form() {
    return <Form submit={this.submit} />
  }

  submit = (dish) => {
    let { dishes } = this.state
    axios.post('/api/dishes', { dish } )
      .then( res=> this.setState({ dishes: [res.data, ...dishes ], showForm: false }) )
      .catch( e => console.log(e.response.data.errors) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    let { showForm } = this.state
    return (
      <div>
        <h2>Dishes</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default Dashboard