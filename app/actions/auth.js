import authConstants from '../constants/auth'
import { push } from 'react-router-redux'
import * as api from '../api/auth'
import axios from 'axios'
import decoded from 'jwt-decode'


export function loginUserSuccess(data){
	//set token in localStorage
	localStorage.setItem('uid', data._id);
	localStorage.setItem('role', data.role);
	console.log(data)
	return {
		type: authConstants.LOGIN_SUCCESS,
		payload: {
			uid: data._id,
			email: data.email,
			role: data.role
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
	localStorage.removeItem("uid");
	localStorage.removeItem("role");
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
		// const token = api.getToken(email,password);
		axios.post('http://localhost:8000/api/login', {
		    username: email,
		    password: password
		  })
		  .then(function (response) {
		    if(response.data.token){
		    	var data = decoded(response.data.token)
		    	dispatch(loginUserSuccess(data));
		    } else {
		    	console.log(response.data.message)
		    }

		  })
		  .catch(function (error) {
		    dispatch(loginUserFailure({
						response:{
							status: 403,
							statusText: 'Invalid username and password'
						}
					}))
		  });
		// token ? dispatch(loginUserSuccess(token))
		// 			: dispatch(loginUserFailure({
		// 				response:{
		// 					status: 403,
		// 					statusText: 'Invalid username and password'
		// 				}
		// 			}))
				} catch (e){
					dispatch(loginUserFailure(e))
				}
	}	
}


