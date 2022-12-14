import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignin } from "../../reducers/userReducer";
import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";
// import { userSignin } from "../../reducers/signinReducer";

const Signin = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth.user.token) {
      navigatorFunc(paths.home);
    }
  }, [auth.user.token]);

  const clear = () => {
    setUserCredentials({
      email: "",
      password: "",
    });
  };

  const handleInput = (e) => {
    // console.dir(e);
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const signinHandler = (e) => {
    e.preventDefault();
    dispatch(userSignin(userCredentials.email, userCredentials.password));
    clear();
  };
  return (
    <div className="signin">
      <div className="wrapper flex block-view">
        <div className="container container-sm">
          <div className="flex block-view region-sm">
            <h4 className="h6">Login</h4>
            <p className="one-font-size">
              Please fill the following form to login.
            </p>
          </div>
          <form onSubmit={signinHandler}>
            <input
              className="input-field region-margin-tn border-line"
              placeholder="Email"
              name="email"
              value={userCredentials.email}
              onChange={handleInput}
            />
            <input
              className="input-field region-margin-tn border-line"
              placeholder="Password"
              name="password"
              value={userCredentials.password}
              onChange={handleInput}
            />
            <button className="secondary-button region-margin-tn" type="submit">
              signin
            </button>
            <p className="region-margin-tn">
              Not registered yet? <Link to="/signup">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
