import expect from 'expect'
import authConstants from '../../constants/auth'
import authReducer from '../../reducers/auth'
import * as actions from '../../actions/auth'


describe('authentication reducer', ()=>{

	let initialState = {
				uid: '',
				role: '',
				isAuthenticated: false,
				isAuthenticating: false,
				statusText: ''
			}

	it('should return the initial state', ()=>{
		expect(authReducer(undefined, {}))
			.toEqual({
				uid: '',
				role: '',
				isAuthenticated: false,
				isAuthenticating: false,
				statusText: ''
			})
	})

	it('should handle login request', ()=>{
		expect(authReducer(initialState, {
			type: authConstants.LOGIN_REQUEST
		}))
			.toEqual({
				uid: '',
				role: '',
				isAuthenticated: false,
				isAuthenticating: true,
				statusText: ''
			})
	})

	it('should handle successful login', ()=>{
		expect(authReducer(undefined, {
			type: authConstants.LOGIN_SUCCESS,
			payload: {
				uid: '123abc',
				role: 'clinician'
			}
		}))
			.toEqual({
				uid: '123abc',
				role: 'clinician',
				isAuthenticating: false,
				isAuthenticated: true,
				statusText: ''
			})
	})

	it('should handle unsuccessful login', ()=>{
		let status = 403
		let statusText = "Wrong username or password"
		expect(authReducer(initialState, {
			type: authConstants.LOGIN_FAILURE,
			payload:{
				status,
				statusText
			}
		}))
			.toEqual({
				...initialState,
				statusText: 'Auth error: Wrong username or password. CODE = 403'
			})
	})

	it('should handle logging out', ()=>{
		expect(authReducer({
				uid: '123abc',
				role: 'clinician',
				isAuthenticating: false,
				isAuthenticated: true,
				statusText: ''
			}, {
				type: authConstants.LOGOUT
			}))
			.toEqual({
				...initialState
			})
	})

})