import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/Users';

import {Provider} from 'react-redux';
import store from './store';
import UserItem from './components/UserItem';
import Comment from './components/Comment';
import PhotoAlbum from './components/PhotoAlbum';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" component={Users} />
              <Route path='/post/:user_id' component={UserItem} />
              <Route path="/comment/:user_id" component={Comment} />
              <Route path='/photo-album/:user_id' component={PhotoAlbum} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
