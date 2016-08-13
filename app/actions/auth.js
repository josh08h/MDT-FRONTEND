import authConstants from '../constants/auth'
import { push } from 'react-router-redux'
import * as api from '../api/auth'

export function loginUserSuccess(token){
	//set token in localStorage
	return {
		type: authConstants.LOGIN_SUCCESS,
		payload: {
			uid: token.uid,
			role: token.role
		}
	}
}

export function loginUserFailure(error){
	//remove token in localStorage
	return {
		type: authConstants.LOGIN_FAILURE,
		payload:{
			status: error.response.status,
			statusText: error.response.statusText
		}
	}
}

export function loginUserRequest(){
	return {
		type: authConstants.LOGIN_REQUEST
	}
}

export function logout(){
	//remove localStorage token
	return {
		type: authConstants.LOGOUT
	}
}

// export function logoutAndRedirect(){
// 	return (dispatch, state) => {
// 		dispatch(logout());
// 		dispatch(pushState(null, '/'))
// 	}
// } Not using redux router so hmmm...

export function loginUser(email, password) {
	return function(dispatch){
		try{
		dispatch(loginUserRequest());
		const token = api.getToken(email,password);
		token ? dispatch(loginUserSuccess(token))
					: dispatch(loginUserFailure({
						response:{
							status: 403,
							statusText: 'Invalid username and password'
						}
					}))
				} catch (e){
					dispatch(loginUserFailure(e))
				}
	}	
}


