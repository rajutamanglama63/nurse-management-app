import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../../reducers/userReducer";
import { paths } from "../../utils/paths";
import { getCurrentUser, removeCurrentUser } from "../../utils/reuseableFunc";

const Navbar = () => {
  const currUser = getCurrentUser();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [authenticated, setAuthenticated] = useState(false);
  console.log(authenticated);

  useEffect(() => {
    if (auth.user.token) {
      setAuthenticated(true);
    }
  }, [auth.user.token]);

  const logoutHandler = () => {
    removeCurrentUser();
    dispatch(userLogout());
  };
  return (
    <div className="wrapper">
      <div className="flex split-pair align-center flow-direction-tn">
        <div className="logo">Nurse</div>
        <div className="flex gap-2 align-center">
          {currUser ? (
            <Link to="#" className="text-link font-sm bold">
              {currUser}
            </Link>
          ) : null}

          <Link to={paths.home} className="text-link font-sm">
            Home
          </Link>
          {currUser ? (
            <>
              <Link to={paths.nurseList} className="text-link font-sm">
                Nurses
              </Link>
              <p className="text-link font-sm" onClick={() => logoutHandler()}>
                Logout
              </p>
            </>
          ) : (
            <>
              <Link to={paths.login} className="text-link font-sm">
                Login
              </Link>
              <Link to={paths.register} className="text-link font-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
