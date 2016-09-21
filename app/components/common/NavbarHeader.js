import React, { Component } from 'react';
import { Link } from 'react-router'
var logoStyles = {
  width: '30%',
  marginTop: '-15px'
}
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
            <Link className="navbar-brand" to="/"><img src='http://uploads.webflow.com/57a668ea3e4192b946e35418/57afa3a1e18710ca164835fe_peach-cancer-white.svg' style={logoStyles}/></Link>
          </div>
			)
	}
}