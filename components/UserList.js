import React from 'react'

const UserList = (props) => {
    return (
        <div className='list'>
            <table>
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
                            <tr key={user.id} >
                                <th>{user.name}</th>
                                <th>{user.phone}</th>
                                <th>{user.email}</th>
                                <th><button onClick={() => props.deleteUser(user.id)}>Delete</button></th>
                            </tr>
                        )) : 
                        <tr>
                            <td colSpan='3'>No records yet.</td>                
                        </tr>
                    }  
                </tbody>
            </table>
        </div>
    )
}

export default UserList