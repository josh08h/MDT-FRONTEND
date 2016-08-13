import React, { Component } from 'react'

export default class Logout extends Component {
	render() {
		return (
				<li><a href='#' onClick={this.props.logout}>Logout</a></li>
			)
	}
}