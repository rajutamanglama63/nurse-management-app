const Single = () => {
  return (
    <div className="wrapper">
      <div className="one-font-size bold region-margin-sm">Nurse list</div>
      <div className="flex split-pair flow-direction flow-direction-tn">
        <div className="pic card-border split-4 flex block-view split-center align-center region-sm ">
          <div className="img">
            <img
              src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1670844903/nurse/rz03b8azy6aqypojqolz.jpg"
              alt="nursepic"
            />
          </div>
          <p className="paragraph bold">Jhamak Kumari Ghimire</p>
          <p className="one-font-size">ghimire.123@gmail.com</p>
          <button className="member-btn region-margin-sm">Active member</button>
        </div>
        <div className="info card-border split-8 region-left-margin-tn left-margin-collapse top-margin">
          <div className="region-md region-side-tn flex split-center block-view">
            <div className="flex align-center ">
              <p className="paragraph bold">Phone number:</p>
              <p className="one-font-size region-side-tn">9858582013</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Address:</p>
              <p className="one-font-size region-side-tn">Sankhu, Kathmandu</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Email:</p>
              <p className="one-font-size region-side-tn">
                ghimire.123@gmail.com
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Gender:</p>
              <p className="one-font-size region-side-tn">Female</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Working-Days:</p>
              <p className="one-font-size region-side-tn">
                Sunday, Monday, Tuesday
              </p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Duty-Time:</p>
              <p className="one-font-size region-side-tn">10am to 5pm</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Member status:</p>
              <p className="one-font-size region-side-tn">Rounding manager</p>
            </div>
            <div className="flex align-center ">
              <p className="paragraph bold">Registered By:</p>
              <p className="one-font-size region-side-tn">Raju</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
