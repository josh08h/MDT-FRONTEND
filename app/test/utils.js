import expect from 'expect'
import { createConstants } from '../utils'

describe('util helper functions', ()=>{

	it('should create an object of constants given strings', ()=>{
		const expectedObject = {
			ADD_PATIENT: 'ADD_PATIENT',
			REFER_PATIENT: 'REFER_PATIENT',
			REMOVE_PATIENT: 'REMOVE_PATIENT'
		}
		expect(createConstants('ADD_PATIENT','REFER_PATIENT','REMOVE_PATIENT'))
			.toEqual(expectedObject)
	})
	
})
