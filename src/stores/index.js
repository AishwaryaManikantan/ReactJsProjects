import { createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index'
import thunk from 'redux-thunk'
import { getAllProducts } from '../actions'

const configureStore=()=> {

const middleware = [ thunk ];

  const store = createStore(reducers, applyMiddleware(...middleware))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }
store.dispatch(getAllProducts())

  return store
}

export default configureStore;