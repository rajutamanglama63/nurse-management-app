import nurse from "../../images/nurse.svg";

const Home = () => {
  return (
    <div className="wrapper region-md">
      <div className="flex split-pair align-center split-pair flow-direction-tn ">
        <div className="flex block-view ">
          <h1 className="h3">Nursing Management</h1>
          <h5 className="h5">Welcome to nurse management app</h5>
          <button className="learn-btn">Learn more</button>
        </div>
        <div className="flex align-center split-center top-margin">
          <img src={nurse} alt="nursemgmt" />
        </div>
      </div>
    </div>
  );
};

export default Home;
