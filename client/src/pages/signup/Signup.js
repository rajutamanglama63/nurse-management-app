import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Register</h4>
          <p className="one-font-size">Please registered yourself.</p>
        </div>
        <form>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Full Name"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Password"
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
