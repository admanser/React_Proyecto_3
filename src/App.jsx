import Main from "./pages/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "./css/globals.css";
import "../src/css/signup.css";
import "../src/css/contact.css";
import "../src/css/nosotros.css";
import { useState } from "react";

import { decodeToken } from "react-jwt";
//import { getDropdownMenuPlacement } from "react-bootstrap/esm/DropdownMenu";

const USERS = [
  { userName: "admin", pass: "admin", role: "admin" },
  { userName: "user", pass: "user", role: "user" },
];

function App() {
  const [token, setToken] = useState(null);

  const loggedIn = () => {
    return token !== null;
  };

  const currentUser = () => {
    return loggedIn() && decodeToken(token);
  }

  const loggedAdmin = () => {
    if (loggedIn()) {
      console.log(currentUser())
      return currentUser().role;
    }

    return false;
  };

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <>
      <BrowserRouter>
        <Main
          currentUser={currentUser}
          login={login}
          logout={logout}
          loggedIn={loggedIn}
          loggedAdmin={loggedAdmin}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
