import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import Signin from "./pages/signin/Signin";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="nurses">
          <Route index element={<List />} />
          <Route path="single" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
