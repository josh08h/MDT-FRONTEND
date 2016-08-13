import React, { Component } from 'react'

export default class Login extends Component {
	render() {
		return (
				<li><a href='#' onClick={()=>this.props.login('avz','123')}>Login</a></li>
			)
	}
}