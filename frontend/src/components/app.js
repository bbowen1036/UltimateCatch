import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MapContainer from './map/map_container'
import PostsIndexContainer from './posts/posts_index_container';
import PostFormContainer from './posts/post_form_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/posts" component={PostsIndexContainer} />
        <Route exact path="/posts/new" component={PostFormContainer} />
    </Switch>
  </div>
);

export default App;