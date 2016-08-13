import React, { Component } from 'react'

export default class NavbarCollapseWrapper extends Component {
	render (){
		const { children } = this.props
		return(
		<div id="navbar" className="navbar-collapse collapse">
			{children}
		</div>
		)
	}
}