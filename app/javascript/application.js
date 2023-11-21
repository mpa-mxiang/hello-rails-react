import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../redux/store';
import Greeting from '../components/Greeting';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/greeting" component={Greeting} />\
        </Switch>
      </Router>
    </Provider>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
