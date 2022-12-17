import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNurses,
  getNurseDetail,
  removeNurse,
} from "../../reducers/nurseReducer";
import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";
import { useNavigate } from "react-router-dom";

const List = ({ setCurrentId }) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const nurseList = useSelector((state) => state.nurse);

  useEffect(() => {
    dispatch(getAllNurses());
  }, [dispatch]);

  const singleNurseHandler = (nurseId) => {
    dispatch(getNurseDetail(nurseId));
    history(`${paths.singleNurse}/${nurseId}`);
  };

  const deleteHandler = async (nurseId) => {
    await dispatch(removeNurse(nurseId));
    dispatch(getAllNurses());
  };

  const editHandler = (nurseId) => {
    setCurrentId(nurseId);
    history(`${paths.addNewNurse}`);
  };

  return (
    <div className="wrapper">
      <div className="one-font-size bold region-margin-sm">
        Nurse list{" "}
        <span className="one-font-size no-font-weight region-side-tn">
          {paths.nurseList}
        </span>
      </div>
      <button className="btn " onClick={() => navigatorFunc(paths.addNewNurse)}>
        Add nurse
      </button>
      <div className="table-responsive region-margin-sm">
        <table className="table ">
          <tr>
            <th className="thead">Image</th>
            <th className="thead">Name</th>
            <th className="thead">Address</th>
            <th className="thead">Contact</th>
            <th className="thead">Rounding manager</th>
            <th className="thead">Edit</th>
            <th className="thead">Remove</th>
          </tr>

          {nurseList.nurses && nurseList.nurses.length !== 0
            ? nurseList.nurses.map((nurse) => (
                <>
                  <tr key={nurse.id}>
                    <td
                      className="img tdata pointer"
                      onClick={() => singleNurseHandler(nurse.id)}
                    >
                      <img src={nurse.photo} alt={nurse.fullname} />
                    </td>
                    <td
                      className="tdata pointer"
                      onClick={() => singleNurseHandler(nurse.id)}
                    >
                      {nurse.fullname}
                    </td>
                    <td className="tdata">{nurse.address}</td>
                    <td className="tdata">{nurse.contact}</td>
                    <td className="tdata">
                      {nurse.role === "Rounding manager" ? (
                        <DoneIcon className="paragraph" />
                      ) : (
                        <HorizontalRuleIcon className="paragraph" />
                      )}
                    </td>
                    <td className="tdata">
                      <EditIcon
                        className="paragraph btn-edit"
                        onClick={() => editHandler(nurse.id)}
                      />
                    </td>
                    <td className="tdata">
                      <DeleteOutlineIcon
                        className="paragraph btn-del"
                        onClick={() => deleteHandler(nurse.id)}
                      />
                    </td>
                  </tr>
                </>
              ))
            : null}
        </table>
      </div>
    </div>
  );
};

export default List;
