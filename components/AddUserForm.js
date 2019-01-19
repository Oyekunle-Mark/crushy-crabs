import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
            <div className='addForm' >
                <h1>Add Contact</h1>
                <hr />
                <form className='form' onSubmit={event => {
                        event.preventDefault()
                        this.props.addUser(this.state)
                        this.setState({
                            name: '',
                            phone: '',
                            email: ''
                        })
                    }} >
                    <label className='label' >Name</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange} className='input' /> <br />
                    <label className='label'>Telephone</label>
                    <input type='number' name='phone' value={this.state.phone} onChange={this.handleChange} className='input' /> <br />
                    <label className='label'>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} className='input' /> <br />
                    <button className='button'type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

AddUserForm.propTypes = {
    addUser: PropTypes.func,
}

AddUserForm.defaultProps = {
    addUser: f => f,
}

export default AddUserForm