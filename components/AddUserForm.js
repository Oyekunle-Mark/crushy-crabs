import React, { Component } from 'react'

class AddUserForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            email: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        this.setState({
           [event.target.name]: event.target.value
        })
    }
     
    render() {
        return (
            <div className='form'>
                <form onSubmit={event => {
                        event.preventDefault()
                        this.props.addUser(this.state)
                        this.setState({
                            name: '',
                            phone: '',
                            email: ''
                        })
                    }} >
                    <label>Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                    <label>Telephone</label>
                    <input type='number' name='phone' value={this.state.phone} onChange={this.handleChange} />
                    <label>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddUserForm