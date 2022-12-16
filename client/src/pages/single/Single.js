import { useSelector } from "react-redux";
// import { getNurseDetail } from "../../reducers/nurseReducer";

import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";

const Single = () => {
  const nurse = useSelector((state) => state.nurse);

  console.log(nurse);
  const nurseDetail = nurse.nurseDetail;
  const days = nurseDetail.workingDays;

  return (
    <div className="wrapper">
      <div className="one-font-size bold region-margin-sm">
        Nurse list{" "}
        <span className="one-font-size no-font-weight region-side-tn">
          {paths.singleNurse}
        </span>
      </div>
      <div className="flex split-pair flow-direction flow-direction-tn">
        <div className="pic card-border split-4 flex block-view split-center align-center region-sm ">
          <div className="img">
            <img src={nurseDetail.photo} alt={nurseDetail.fullname} />
          </div>
          <p className="paragraph bold">{nurseDetail.fullname}</p>
          <p className="one-font-size">{nurseDetail.email}</p>
          <button className="member-btn region-margin-sm">Active member</button>
        </div>
        <div className="info card-border split-8 region-left-margin-tn left-margin-collapse top-margin">
          <div className="region-md region-side-tn flex split-center block-view">
            <div className="flex align-center ">
              <p className="paragraph bold">Phone number:</p>
              <p className="one-font-size region-side-tn">
                "{nurseDetail.contact}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Address:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.address}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Email:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.email}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Gender:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.gender}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Working-Days:</p>
              <p className="one-font-size region-side-tn">
                {/* {nurseDetail.workingDays.map((day) => day)} */}
                {days}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Duty-Time:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.dutyStartTime} to {nurseDetail.dutyEndTime}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Member status:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.isRoundingManager ? <>Rounding manager</> : <>-</>}
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Registered By:</p>
              <p className="one-font-size region-side-tn">
                {nurseDetail.registeredBy}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="region-tn">
        <button className="btn" onClick={() => navigatorFunc(paths.nurseList)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default Single;
