import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="flex split-pair align-center flow-direction-tn">
        <div className="logo">Nurse</div>
        <div className="flex gap-2 align-center">
          <Link to="#" className="text-link font-sm bold">
            Welcome Raju
          </Link>
          <Link to="/signin" className="text-link font-sm">
            Login
          </Link>
          <Link to="/signup" className="text-link font-sm">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
