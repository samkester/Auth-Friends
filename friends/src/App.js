import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./utils/ProtectedRoute";
import StyledApp from "./components/styled/StyledApp";
import Login from './components/Login';
import FriendPage from './components/FriendPage';
import SingleFriend from './components/SingleFriend';

function App() {
  return (
    <StyledApp>
      <div className="container">
        <Switch>
          <ProtectedRoute path="/friend/:id" component={ SingleFriend } />
          <ProtectedRoute path="/friends" component={FriendPage} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </StyledApp>
  );
}

export default App;
