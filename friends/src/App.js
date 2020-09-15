import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from "./utils/ProtectedRoute";
//import { FriendsContext } from './store/contexts';
import StyledApp from "./components/styled/StyledApp";
import Login from './components/Login';

function App() {
  const [friends, setFriends] = useState([]);

  return (
    <div>
      <Switch>
        {/*<FriendsContext.Provider value={{friends, setFriends}}>
          <ProtectedRoute path="/friend/:id" component={ single friend } />
          <ProtectedRoute path="/friends" component={ friends list } />
        </FriendsContext.Provider>*/}
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
