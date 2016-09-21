import React, { Component } from 'react';

var navStyle = {
	backgroundColor: '#2d3e4f'
}
export default class NavbarHeader extends Component {
	render(){
    const { children } = this.props
		return(
				  <nav className="navbar navbar-default" style={navStyle}>
            <div className="container-fluid">
            { children }
            </div>
          </nav>
			)
	}
}