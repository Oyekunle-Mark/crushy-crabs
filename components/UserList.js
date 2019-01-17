import React from 'react'

const UserList = (props) => {
    return (
        <div className='list'>
            <h1>Contact List</h1>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {(props.user.length > 0) ?
                        props.user.map(user => (
                            <tr key={user.id} className='row' >
                                <th>{user.name}</th>
                                <th>{user.phone}</th>
                                <th>{user.email}</th>
                                <th><button className='button' onClick={() => props.deleteUser(user.id)}>Delete</button></th>
                            </tr>
                        )) : 
                        <tr>
                            <td colSpan='3' className='empty' >No records yet.</td>                
                        </tr>
                    }  
                </tbody>
            </table>
        </div>
    )
}

export default UserList