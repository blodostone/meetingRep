import React from "react";
import Auth from './Auth';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const App = () => {
  return (
    <div>
      <Auth />
      <Login />
      <Logout></Logout>
      <Spinner size={50} />
    </div>
  )
};

export default App;