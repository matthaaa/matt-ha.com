import React from 'react';
import {Route} from 'react-router-dom';

import MainViewScreen from './components/views/MainViewScreen';

const App = ({children}) => (
  <div className="App">
    <Route path="/" component={MainViewScreen} />
  </div>
);

export default App;
