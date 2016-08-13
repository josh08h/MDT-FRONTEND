import expect from 'expect'
import * as actions from '../../actions/auth'
import constants from '../../constants/auth'

describe('authentication actions', () => {

  it('create an action for successful login', () => {
    const token = {
    	uid: 123,
    	role: 'clinician'
    }
    const expectedAction = {
      type: constants.LOGIN_SUCCESS,
      payload: {
				uid: 123,
				role: 'clinician'
			}
    }
    expect(actions.loginUserSuccess(token)).toEqual(expectedAction)
  })

  it('return correct error code and status on login failure', ()=>{
    const status = 403
    const statusText = 'Bad request'
    const error = {
      response:{
        status,
        statusText 
      }
    }

    expect(actions.loginUserFailure(error))
      .toEqual({
        type: constants.LOGIN_FAILURE,
        payload:{
          status: 403,
          statusText: 'Bad request'
        }
      })

  })

  

})
