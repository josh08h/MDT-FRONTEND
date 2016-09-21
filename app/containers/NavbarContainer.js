import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logout } from '../actions/auth';
import NavbarCollapseWrapper from '../components/common/NavbarCollapseWrapper';
import NavbarListNavigation from '../components/common/NavbarListNavigation';
import NavbarHeader from '../components/common/NavbarHeader';
import NavbarType from '../components/common/NavbarType';
import Login from '../components/common/Login';


class NavbarContainer extends Component {
   
    render() {
    	const { user } = this.props; 
      console.log(this.props.onLogin)
        return (
			<NavbarType>
        <NavbarHeader />
          <NavbarCollapseWrapper>
            <NavbarListNavigation 
                    role={user.role} 
                    onLogin={this.props.onLogin}
                    onLogout={this.props.onLogout}
                 />
          </NavbarCollapseWrapper>
      </NavbarType>
			);
    }
}


const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onLogin: (email, password) => dispatch(loginUser(email, password)),
    onLogout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(NavbarContainer)