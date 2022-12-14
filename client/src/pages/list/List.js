import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import { paths } from "../../utils/paths";
import { navigatorFunc } from "../../utils/reuseableFunc";

const List = () => {
  return (
    <div className="wrapper">
      <div className="one-font-size bold region-margin-sm">Nurse list</div>
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

          <tr>
            <td className="img tdata">
              <img
                src="https://res.cloudinary.com/dydwwtmnj/image/upload/v1670844903/nurse/rz03b8azy6aqypojqolz.jpg"
                alt="nursename"
              />
            </td>
            <td className="tdata">Radha Chaulagain</td>
            <td className="tdata">Lagankhel, Lalitpur</td>
            <td className="tdata">9869563222</td>
            <td className="tdata">
              <DoneIcon className="paragraph" />
            </td>
            <td className="tdata">
              <EditIcon className="paragraph btn-edit" />
            </td>
            <td className="tdata">
              <DeleteOutlineIcon className="paragraph btn-del" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default List;
