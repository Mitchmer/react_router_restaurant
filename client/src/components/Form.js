import React from 'react'

class Form extends React.Component {
  defaultValues = { name: '', price: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let dish= { ...this.state }
    this.props.submit(dish)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    let { target: { id, value }} = e
    this.setState({ [id]: value })
  }

  render() {
    let { name, price } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          id="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
          required
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form