import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./utils/ProtectedRoute";
import { FriendsContext } from './store/contexts';

function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <Switch>
        <FriendsContext.Provider value={{friends, setFriends}}>
          <ProtectedRoute path="/friend/:id" component={/* single friend */} />
          <ProtectedRoute path="/friends" component={/* friends list */} />
        </FriendsContext.Provider>
        <Route path="/login" component={/* login */} />
        <Route path="/" component={/* also login */} />
      </Switch>
    </div>
  );
}

export default App;
