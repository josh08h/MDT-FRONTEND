import React, { Component } from 'react'
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router'

const navbars = {
	    mdtCoordinator: ['Referral', 'Triage', 'Live MDT', 'MDT List'],
	    referrer: ['Referral', 'Triage', 'Jobs'],
	    clinician: ['Referral', 'Triage', 'Jobs', 'MDT List'],
	    admin: ['Accounts', 'App Settings', 'Customisation']
};
//cant put in NavbarListNavigation.propTypes here ?

  var listStyles = {
    color: 'white'
  };


export default class NavbarListNavigation extends Component {
  constructor(props){
    super(props)

  }


  buildNav (role){
  	let nav = [];
		if (role){
		nav = navbars[role].map((label)=>{
      label = label.replace(/\s/g, '');
      return (
          <li key={label}><Link className='nav-links' to={label} style={listStyles}>{label}</Link></li>
        )
    })
    	nav.push(<Logout key={'Logout'} logout={this.props.onLogout}/>)
    }
    else{
    	nav.push(<Login key={'Login'} login={this.props.onLogin} />)
    }
    return nav;
  }

  render (){
		const { role } = this.props;
    // const dynamicLogin = (role) ? <Logout /> : <Login />
		return(
		<ul className="nav navbar-nav pull-right">
			{this.buildNav(role)}
		</ul>
		)
	}
}
