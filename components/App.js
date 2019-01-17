import React, { Component, Fragment } from 'react'
import AddUserForm from './AddUserForm'
import UserList from './UserList'

class App extends Component {
   constructor(props) {
       super(props)
       this.state = {
           user: []
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
    
    deleteUser(id) {
        const newUsers = this.state.user.filter(user => user.id !== id)
        this.setState({
            user: newUsers 
        })
    }
    
    render() {
        return ( 
            <div className='app' >
                <AddUserForm addUser={this.addUser} />
                <UserList user={this.state.user} deleteUser={this.deleteUser} />
            </div>
        )
    }
}
		
export default App