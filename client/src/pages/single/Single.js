const Single = () => {
  return (
    <div className="wrapper">
      <div className="one-font-size bold region-margin-sm">Nurse list</div>
      <div className="flex split-pair">
        <div className="pic card-border split-4 flex block-view split-center align-center region-sm">
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
        <div className="info card-border split-8 region-left-margin-tn">
          <div className="grid grid-common">
            <div className="card-border">fa</div>
            <div className="card-border">adsf</div>
            <div className="card-border">fdsg</div>
            <div className="card-border">zb</div>
            <div className="card-border">zfg</div>
            <div className="card-border">reas</div>
            <div className="card-border">ad</div>
            <div className="card-border">rt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
