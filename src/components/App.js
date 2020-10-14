import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Users from './Users'
import axios from 'axios'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import UserDetails from './UserDetails'

export class App extends Component {
    constructor(props) {
        super(props)
        this.searchUsers = this.searchUsers.bind(this)
        this.clearUsers = this.clearUsers.bind(this)
        this.setAlert = this.setAlert.bind(this)
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this)
        this.state = {
            users: [],
            user: {},
            loading: false,
            alert: null,
            repos : []
        }
    }

    searchUsers(keyword) {
        this.setState({ loading: true })
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => this.setState({ users: res.data.items, loading: false }))
        }, 1000)

    }

    getUser(username) {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`)
                .then(res => this.setState({ user: res.data, loading: false }))
        }, 1000)
    }

    getUserRepos(username) {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}/repos`)
                .then(res => this.setState({ repos: res.data, loading: false }))
        }, 1000)
    }

    clearUsers() {
        this.setState({ users: [] })
    }
    setAlert(msg, type) {
        this.setState({
            alert: { msg, type }
        })
        setTimeout(() => {
            this.setState({
                alert: null
            })
        }, 3000)
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar title="Github Finder" icon="fab fa-github" />
                <Alert alert={this.state.alert} />
                <Switch>
                    <Route exact path='/' render={props => (
                        <>
                            <Search setAlert={this.setAlert} usersLength={this.state.users.length} clearUsers={this.clearUsers} searchUsers={this.searchUsers} />
                            <Users loading={this.state.loading} users={this.state.users} />
                        </>
                    )
                    } />
                    <Route path='/about' component={About} />
                    <Route path='/users/:login' render={props => (
                        <UserDetails {...props}
                            loading={this.state.loading}
                            getUser={this.getUser}
                            user={this.state.user}
                            getUserRepos = {this.getUserRepos}
                            repos = {this.state.repos} />
                    )} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
