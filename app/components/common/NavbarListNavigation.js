import React, { Component } from 'react'
import Login from './Login'
import Logout from './Logout'

const navbars = {
	    mdtCoordinator: ['Referral', 'Triage', 'Live MDT', 'MDT List'],
	    referrer: ['Referral', 'Triage', 'Jobs'],
	    clinician: ['Referral', 'Triage', 'Jobs', 'MDT List'],
	    admin: ['Accounts', 'App Settings', 'Customisation']
};
//cant put in NavbarListNavigation.propTypes here ?

export default class NavbarListNavigation extends Component {
  constructor(props){
    super(props)

  }

  buildNav (role){
  	let nav = [];
		if (role){
		nav = navbars[role].map((label)=>{
      return (
          <li key={label}><a href='#'>{label}</a></li>
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
