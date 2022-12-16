import { useState } from "react";
import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";

// import { Link } from "react-router-dom";
const New = () => {
  const [nurseData, setNurseData] = useState({
    fullname: "",
    email: "",
    contact: "",
    address: "",
    gender: "",
    photo: "",
    workingDays: "",
    dutyStartTime: "",
    dutyEndTime: "",
    isRoundingManager: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNurseData({ ...nurseData, [name]: value });
  };
  return (
    <div className="wrapper flex block-view">
      <div className="container container-sm">
        <div className="flex block-view region-sm">
          <h4 className="h6">Register new nurse</h4>

          <p className="one-font-size">
            Fill the following field to register new nurse
          </p>
        </div>
        <button className="btn" onClick={() => navigatorFunc(paths.nurseList)}>
          Go back
        </button>
        <form>
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Full name"
            name="fullname"
            value={nurseData.fullname}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Email"
            name="email"
            value={nurseData.email}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Contact"
            name="contact"
            value={nurseData.contact}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Address"
            name="address"
            value={nurseData.address}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Working days"
            name="workingDays"
            value={nurseData.workingDays}
            onChange={handleInput}
          />
          {/* <input
            className="input-field region-margin-tn border-line"
            placeholder="Gender"
            name="gender"
            value={nurseData.gender}
            onChange={handleInput}
          /> */}
          <div className="flex split-pair align-center">
            <div>
              <label className="paragraph region-margin-tn" for="gender">
                Choose a gender:
              </label>
              <select name="gender" id="gender" onChange={handleInput}>
                <option value={nurseData.gender}>Male</option>
                <option value={nurseData.gender}>Female</option>
              </select>
            </div>
            <div>
              <label
                className="paragraph region-margin-tn"
                for="isRoundingManager"
              >
                Member status:
              </label>
              <select
                name="isRoundingManager"
                id="isRoundingManager"
                onChange={handleInput}
              >
                <option value={nurseData.isRoundingManager}>False</option>
                <option value={nurseData.isRoundingManager}>true</option>
              </select>
            </div>
          </div>

          <div className="flex split-pair align-center">
            <div>
              <label className="paragraph region-margin-tn" for="dutyStartTime">
                Duty start time:
              </label>
              <select
                name="dutyStartTime"
                id="dutyStartTime"
                onChange={handleInput}
              >
                <option value={nurseData.dutyStartTime}>7am</option>
                <option value={nurseData.dutyStartTime}>10am</option>
                <option value={nurseData.dutyStartTime}>2pm</option>
                <option value={nurseData.dutyStartTime}>6pm</option>
              </select>
            </div>
            <div>
              <label className="paragraph region-margin-tn" for="dutyEndTime">
                Duty End time:
              </label>
              <select
                name="dutyEndTime"
                id="dutyEndTime"
                onChange={handleInput}
              >
                <option value={nurseData.dutyEndTime}>4pm</option>
                <option value={nurseData.dutyEndTime}>6pm</option>
                <option value={nurseData.dutyEndTime}>8pm</option>
                <option value={nurseData.dutyEndTime}>7am</option>
              </select>
            </div>
          </div>

          <button className="secondary-button region-margin-tn" type="submit">
            Register nurse
          </button>
        </form>
      </div>
    </div>
  );
};

export default New;
