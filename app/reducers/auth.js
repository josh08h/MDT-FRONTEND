import authConstants from '../constants/auth'

const initialState = {
	uid: '',
	role: '',
	isAuthenticated: false,
	isAuthenticating: false,
	statusText: ''
}

export default function auth(state=initialState, action){
	switch(action.type){
		case authConstants.LOGIN_REQUEST:
			return {...state,
				'isAuthenticating': true
			}
		case authConstants.LOGIN_SUCCESS:
			return {...state,
				'isAuthenticating': false,
				'isAuthenticated': true,
				'uid': action.payload.uid,
				'role': action.payload.role,
				'statusText': ''
			}
		case authConstants.LOGIN_FAILURE:
			return {...state,
				isAuthenticating: false,
				isAuthenticated: false,
				uid: '',
				role: '',
				statusText: 'Auth error: ' + action.payload.statusText + ". CODE = " + action.payload.status
			}
		case authConstants.LOGOUT:
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