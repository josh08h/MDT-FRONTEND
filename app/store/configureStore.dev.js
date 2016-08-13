import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk'


//own middleware
const logger = store => next => action => {
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}



const enhancer = compose(
	applyMiddleware(thunk, logger),
	DevTools.instrument()
	)

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );
    return store;
}
