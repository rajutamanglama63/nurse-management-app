import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNurse, nurseUpdate } from "../../reducers/nurseReducer";
import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";

// import { Link } from "react-router-dom";
const New = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const nurse = useSelector((state) =>
    currentId
      ? state.nurse.nurses.find((singleNurse) => singleNurse.id === currentId)
      : null
  );
  const [nurseData, setNurseData] = useState({
    fullname: "",
    email: "",
    contact: +997,
    address: "",
    gender: "",
    photo: "",
    workingDays: "",
    dutyStartTime: "",
    dutyEndTime: "",
    role: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNurseData({ ...nurseData, [name]: value });
  };

  const imageSelector = (e) => {
    // console.dir(e.target);
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      // basically FileReader method have 3
      // different state and they are initialState = 0, processingState = 1, readyState = 2
      if (Reader.readyState === 2) {
        // Reader.result will actually read the url path of pic which we have choose from our machine
        setNurseData({ ...nurseData, photo: Reader.result });
      }
    };
  };

  useEffect(() => {
    if (nurse) setNurseData(nurse);
  }, [nurse]);

  const clear = () => {
    setCurrentId(null);
    setNurseData({
      fullname: "",
      email: "",
      contact: +977,
      address: "",
      gender: "",
      photo: "",
      workingDays: "",
      dutyStartTime: "",
      dutyEndTime: "",
      role: "",
    });
  };

  const nurseRegistrationHandler = (e) => {
    e.preventDefault();
    console.log("from new: ", nurseData);

    if (currentId === null) {
      dispatch(createNurse(nurseData));
      clear();
    } else {
      dispatch(nurseUpdate(currentId, nurseData));
      clear();
    }
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
        <form onSubmit={nurseRegistrationHandler}>
          <input
            className="input-field region-margin-tn border-line"
            accept="image/*"
            type="file"
            onChange={imageSelector}
          />
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
            type="number"
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
            placeholder="Working days -example-- sunday, monday, tuesday"
            name="workingDays"
            value={nurseData.workingDays}
            onChange={handleInput}
          />

          <div className="flex split-pair input-field region-margin-tn">
            <div>
              <label className="paragraph">Gender:</label>

              <select
                name="gender"
                value={nurseData.gender}
                onChange={handleInput}
              >
                <option>--Please choose an option--</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="paragraph">Role:</label>

              <select name="role" value={nurseData.role} onChange={handleInput}>
                <option>--Please choose an option--</option>
                <option>Rounding manager</option>
                <option>Staff</option>
              </select>
            </div>
          </div>

          <div className="flex split-pair input-field region-margin-tn">
            <div>
              <label className="paragraph">Duty start time:</label>

              <select
                name="dutyStartTime"
                value={nurseData.dutyStartTime}
                onChange={handleInput}
              >
                <option>--Please choose an option--</option>
                <option>9am</option>
                <option>10am</option>
                <option>2pm</option>
                <option>7pm</option>
              </select>
            </div>
            <div>
              <label className="paragraph">Duty end time:</label>

              <select
                name="dutyEndTime"
                value={nurseData.dutyEndTime}
                onChange={handleInput}
              >
                <option>--Please choose an option--</option>
                <option>4pm</option>
                <option>5pm</option>
                <option>8pm</option>
                <option>6am</option>
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
