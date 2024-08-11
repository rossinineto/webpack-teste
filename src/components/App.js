import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { imported } from 'react-imported-component';
import Home from './Home';
import Loading from './Loading';

const AsyncDynamicPage = imported(
  () => import(/* webpackChunkName:'DynamicPage' */ './DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = imported(
  () => import(/* webpackChunkName:'NoMatch' */ './NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<AsyncDynamicPage/>} />
          <Route path="*" element={<AsyncNoMatch/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;