import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './containers/App';


import configureStore from './stores/index';

const store = configureStore();


const Routes = (props) => (
  <Provider store={store}>
      <Router>
       <div>
        <Route exact path="/" component={App}/>
        </div>
      </Router>

  </Provider>
)

export default Routes