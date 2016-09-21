import React, { Component } from 'react'

var logoutBtn = {
	color: 'white'
}
export default class Logout extends Component {
	render() {
		return (
				<li><a href='#' style={logoutBtn} onClick={this.props.logout}>Logout</a></li>
			)
	}
}