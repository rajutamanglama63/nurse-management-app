// import { Link } from "react-router-dom";
const New = () => {
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Register new nurse</h4>

          <p className="one-font-size">
            Fill the following field to register new nurse
          </p>
        </div>
        <button className="btn">Go back</button>
        <form>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Full name"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Contact"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Address"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Gender"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Working days"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Duty time"
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Member status"
          />
          <button className="secondary-button region-margin-tn" type="submit">
            Register nurse
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;
