import React, { Component } from 'react';
import { Link } from 'react-router'

export default class NavbarHeader extends Component {
	render(){
		return(
				  <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">MDT Application</Link>
          </div>
			)
	}
}