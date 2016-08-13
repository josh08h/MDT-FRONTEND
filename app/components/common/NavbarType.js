import React, { Component } from 'react';

export default class NavbarHeader extends Component {
	render(){
    const { children } = this.props
		return(
				  <nav className="navbar navbar-default">
            <div className="container-fluid">
            { children }
            </div>
          </nav>
			)
	}
}