// import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'

// export default class Login extends Component {
// 	render() {
// 		return (

// 				<li><Link to='/about' onClick={()=>this.props.login('avz','123')}>Login</Link></li>
// 			)
// 	}
// }



import React, { Component, PropTypes } from 'react'

var styles = {
  loginButton: {
    marginTop: '8px',
    marginLeft: '8px'
  }
}

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props

    return (
      <div className='login-input'>
        <input type='text' ref='username' className="form-control" placeholder='Username' style={styles.loginButton}/>
        <input type='password' ref='password' className="form-control" placeholder='Password' style={styles.loginButton}/>
        <button onClick={(event) => this.handleClick(event)} className="btn btn-primary" style={styles.loginButton}>
          Login
        </button>

        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
    )
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.login(creds.username, creds.password)
  }     
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}