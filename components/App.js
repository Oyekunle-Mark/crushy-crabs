import React, { Component, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import UserList from './UserList'

class App extends Component {
   constructor(props) {
       super(props)
       this.state = {
           user: [],
           editing: false
       }
       this.addUser = this.addUser.bind(this)
       this.deleteUser = this.deleteUser.bind(this)
   }
    
    addUser(user) {
        user.id = this.state.user.length + 1
        this.setState({
            user: this.state.user.concat(user)
        })
    }
    
    editUser(id, user) {
        const newUsers = this.state.user.filter(u => u.id === id ?
                                                    user : u)
        this.setState({
            user: newUsers
        })
    }                   
        
    deleteUser(id) {
        const newUsers = this.state.user.filter(user => user.id !== id)
        this.setState({
            user: newUsers 
        })
    }
    
    render() {
        const { user, editing } = this.state
        return ( 
            <div className='container'>
                <h1>The Phonebook CRUD App</h1>
                {this.editing ? 
                    <EditForm editUser={this.editUser} /> 
                    :            
                    <AddUserForm addUser={this.addUser} />
                }   
                <UserList user={user} deleteUser={this.deleteUser} />
            </div>
        )
    }
}
		
export default App