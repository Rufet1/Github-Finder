import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class User extends Component {

    render() {
        const {login, avatar_url } = this.props.user
        return (
            <div className=' mt-2 col-md-3 col-sm-6 col-xs-6'>
                <div className="card">
                    <img src={avatar_url} className='img-fluid' />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <Link to={`/users/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
