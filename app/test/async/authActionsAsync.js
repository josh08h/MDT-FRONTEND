import expect from 'expect'
import * as actions from '../../actions/auth'
import constants from '../../constants/auth'
import thunk from 'redux-thunk'
// import nock from 'nock' THIS IS FOR HTTP REQ. use when implementing real auth system.
import configureMockStore from 'redux-mock-store'

// //own middleware
const logger = store => next => action => {
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const middlewares = [ thunk]
const mockStore = configureMockStore(middlewares)

describe('async auth actions', ()=>{
	it('creates LOGIN_SUCCESS when successful login has occured', ()=>{
	//array of expected actions to be dispatched.
	const expectedActions = [
      { type: constants.LOGIN_REQUEST },
      { type: 'LOGIN_SUCCESS',
				payload: {
					uid: '123abc',
					role: 'clinician'
		}}
   ]
  const store = mockStore({ auth : {} })

	return store.dispatch(actions.loginUser('abc@123.com', 'password123'))
	expect(store.getActions()).toEqual(expectedActions)
	})

	it('creates LOGIN_ERROR when unsuccessful login has occured', ()=>{
		const expectedActions = [
			{type: constants.LOGIN_REQUEST},
			{type: 'LOGIN_FAILURE',
				payload:{
					status: 403,
					statusText: 'Invalid username and password'
				}}
		]
		const store = mockStore({auth : {} })

	  return	store.dispatch(actions.loginUser('/abc@123.com', 'password123'))
		expect(store.getActions()).toEqual(expectedActions)
	})

})