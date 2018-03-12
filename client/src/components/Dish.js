import React from 'react'
import axios from 'axios'

class Dish extends React.Component {
  state = { dish: {} }

  componentDidMount() {
    axios.get(`/api/dishes/${this.props.match.params.id}`)
      .then( res => this.setState({ dish: res.data }) )
  }

  render() {
    let { dish: { name, price }} = this.state
    return (
      <div>
        <h1>{name}</h1>
        <h3>${price}</h3>
      </div>
    )
  }
}

export default Dish