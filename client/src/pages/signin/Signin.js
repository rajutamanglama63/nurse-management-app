import { Link } from "react-router-dom";

const Signin = () => {
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
          <form>
            <input
              className="input-field region-margin-tn border-line"
              placeholder="Email"
            />
            <input
              className="input-field region-margin-tn border-line"
              placeholder="Password"
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
