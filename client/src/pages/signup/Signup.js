import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSignup } from "../../reducers/userReducer";

const Signup = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const clear = () => {
    setUserData({
      fullname: "",
      email: "",
      password: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch(userSignup(userData));
    clear();
  };
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Register</h4>
          <p className="one-font-size">Please registered yourself.</p>
        </div>
        <form onSubmit={signupHandler}>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Full Name"
            name="fullname"
            value={userData.fullname}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleInput}
          />
          <button className="secondary-button region-margin-tn" type="submit">
            Signup
          </button>
          <p className="region-margin-tn">
            Aready registered? <Link to="/signin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
