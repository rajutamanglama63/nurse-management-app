import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./pages/nav/Navbar";
import { refreshToken } from "./reducers/userReducer";
import Router from "./Router";
import { getRefreshToken } from "./utils/reuseableFunc";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const ref_token = getRefreshToken();
  const [render, setRender] = useState(false);
  console.log("re-rendering: ", render);
  useEffect(() => {
    setTimeout(() => {
      dispatch(refreshToken(ref_token));
      if (auth.user.token) {
        setRender(true);
      }
    }, 60000);
  }, [dispatch, ref_token, auth.user.token]);
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
