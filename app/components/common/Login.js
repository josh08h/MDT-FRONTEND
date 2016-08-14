import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Login extends Component {
	render() {
		return (
				<li><Link to='/about' onClick={()=>this.props.login('avz','123')}>Login</Link></li>
			)
	}
}

