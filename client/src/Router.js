import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { getCurrentUser } from "./utils/reuseableFunc";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Router = () => {
  const authenticatedUser = getCurrentUser();
  const auth = useSelector((state) => state.auth);

  // this state is created to make this component re-render so that browser can reload and get actual state of localStorage.loggedInUser
  const [isAuth, setIsAuth] = useState(false);
  console.log("from router:", isAuth);

  useEffect(() => {
    if (auth.user.token) {
      setIsAuth(true);
    }
  }, [auth.user.token]);
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="nurses">
          <Route index element={authenticatedUser ? <List /> : <Home />} />
          <Route
            path="single/:nurseId"
            element={authenticatedUser ? <Single /> : <Home />}
          />
          <Route path="new" element={authenticatedUser ? <New /> : <Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
