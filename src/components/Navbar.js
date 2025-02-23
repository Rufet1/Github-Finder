import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    const { title, icon } = this.props
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
        <div className="container">
          <Link to="/" className="navbar-brand">
            <i className={icon}></i> {title}
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

Navbar.defaultProps = {
  title: 'Github default title'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
