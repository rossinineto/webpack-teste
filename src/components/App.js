import React from 'react';
// import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import DynamicPage from './DynamicPage';
import Home from './Home';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<DynamicPage/>} />
          <Route element={<NoMatch/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;