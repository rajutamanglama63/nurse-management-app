import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNurseDetail } from "../../reducers/nurseReducer";

import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";

const Single = () => {
  const dispatch = useDispatch();
  const nurse_id = useParams();
  const id = nurse_id.nurseId;

  useEffect(() => {
    dispatch(getNurseDetail(id));
  }, [dispatch, id]);

  // const nurse = useSelector((state) => state.nurse);
  // const nurseDetail = nurse.nurseDetail;

  // console.log(typeof nurse_id);
  // console.log(nurse_id.nurseId);

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
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1670844903/nurse/rz03b8azy6aqypojqolz.jpg"
              alt=";alksd"
            />
          </div>
          <p className="paragraph bold">"ramilo"</p>
          <p className="one-font-size">123.com.np</p>
          <button className="member-btn region-margin-sm">Active member</button>
        </div>
        <div className="info card-border split-8 region-left-margin-tn left-margin-collapse top-margin">
          <div className="region-md region-side-tn flex split-center block-view">
            <div className="flex align-center ">
              <p className="paragraph bold">Phone number:</p>
              <p className="one-font-size region-side-tn">";aklsdjf"</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Address:</p>
              <p className="one-font-size region-side-tn">"a;lkdsjf"</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Email:</p>
              <p className="one-font-size region-side-tn">"askldjdf"</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Gender:</p>
              <p className="one-font-size region-side-tn">"ferk"</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Working-Days:</p>
              <p className="one-font-size region-side-tn">
                {/* {nurseDetail ? nurseDetail.workingDays.map((day) => day) : null} */}
                sun, mon
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Duty-Time:</p>
              <p className="one-font-size region-side-tn">"sdf" to "asd"</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Member status:</p>
              <p className="one-font-size region-side-tn">
                {/* {nurseDetail.isRoundingManager ? <>Rounding manager</> : <>-</>} */}
                "slkd"
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Registered By:</p>
              <p className="one-font-size region-side-tn">
                {/* {nurseDetail.registeredBy} */}
                "hakld"
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
