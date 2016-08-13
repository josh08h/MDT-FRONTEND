import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as api from '../app/api/auth'

//own middleware
const logger = store => next => action => {
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}



//ACTIONS
function loginUserSuccess(token){
	//set token in localStorage
	return {
		type: 'LOGIN_SUCCESS',
		payload: {
			uid: token.uid,
			role: token.role
		}
	}
}

function loginUserFailure(error){
	//remove token in localStorage
	return {
		type: 'LOGIN_FAILURE',
		payload:{
			status: error.response.status,
			statusText: error.response.statusText
		}
	}
}

function loginUserRequest(){
	return {
		type: 'LOGIN_REQUEST'
	}
}

function logout(){
	//remove localStorage token
	return {
		type: 'LOGOUT'
	}
}

function loginUser(email, password) {
	return function(dispatch){
		try{
		dispatch(loginUserRequest());
		const token = api.getToken(email,password);
		//works up to here.
		token ? dispatch(loginUserSuccess(token))
					: dispatch(loginUserFailure({
						response:{
							status: 403,
							statusText: 'Invalid token'
						}
					}))
				} catch (e){
					dispatch(loginUserFailure(e))
				}
	}	
}

const initialState = {
	uid: '',
	role: '',
	isAuthenticated: false,
	isAuthenticating: false,
	statusText: ''
}
function auth(state=initialState, action){
	switch(action.type){
		case 'LOGIN_REQUEST':
			return {...state,
				'isAuthenticating': true
			}
		case 'LOGIN_SUCCESS':
			return {...state,
				'isAuthenticating': false,
				'isAuthenticated': true,
				'uid': action.payload.uid,
				'role': action.payload.role
			}
		case 'LOGIN_FAILURE':
			return {...state,
				isAuthenticating: false,
				isAuthenticated: false,
				uid: '',
				role: '',
				statusText: 'Auth error: ' + action.payload.statusText + ". CODE = " + action.payload.status
			}
		case 'LOGOUT':
			return {...state,
				isAuthenticated:false,
				isAuthenticating:false,
				uid:'',
				role:'',
				statusText: ''
			}
		default :
			return state;
	}
}

const store = createStore(auth, applyMiddleware(thunk, logger))

store.dispatch(loginUser('123', 'p123'))