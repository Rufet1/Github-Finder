import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            keyword: ''
        }
    }

    onChange(e) {
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()      
        if(this.state.keyword === ''){
            this.props.setAlert('Boş ola bilməz !','danger')
        }else{
            this.props.searchUsers(this.state.keyword);
            this.setState({ keyword: '' })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.onSubmit}>
                    <div className="input-group">
                        <input value={this.state.keyword} type="text" onChange={this.onChange} className="form-control" />
                        <div className="input-group-append">
                            <button type="submit" className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </form>
                {this.props.usersLength == 0 ? null : <div onClick={this.props.clearUsers} className="btn btn-secondary btn-sm btn-block my-2">
                    Clean Results
                </div>}

            </div>

        )
    }
}

export default Search
