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
    contact: "",
    address: "",
    gender: "",
    photo: "",
    workingDays: "",
    dutyStartTime: "",
    dutyEndTime: "",
    isRoundingManager: false,
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
      contact: "",
      address: "",
      gender: "",
      photo: "",
      workingDays: "",
      dutyStartTime: "",
      dutyEndTime: "",
      isRoundingManager: false,
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
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Gender"
            name="gender"
            value={nurseData.gender}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Duty start time. Specificy with am/pm"
            name="dutyStartTime"
            value={nurseData.dutyStartTime}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Duty end time. Specificy with am/pm"
            name="dutyEndTime"
            value={nurseData.dutyEndTime}
            onChange={handleInput}
          />
          <input
            className="input-field region-margin-tn border-line"
            placeholder="Is rounding manager? True/False"
            name="isRoundingManager"
            value={nurseData.isRoundingManager}
            onChange={handleInput}
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
