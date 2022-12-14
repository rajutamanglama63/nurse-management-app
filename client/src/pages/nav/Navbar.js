import { Link } from "react-router-dom";
import { paths } from "../../utils/paths";

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="flex split-pair align-center flow-direction-tn">
        <div className="logo">Nurse</div>
        <div className="flex gap-2 align-center">
          <Link to="#" className="text-link font-sm bold">
            Raju
          </Link>
          <Link to={paths.home} className="text-link font-sm">
            Home
          </Link>
          <Link to={paths.login} className="text-link font-sm">
            Login
          </Link>
          <Link to={paths.register} className="text-link font-sm">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
