import React from "react";
import {Link } from "react-router-dom";
import {AiOutlineEdit,AiOutlineDelete} from "react-icons/ai"
import "./table.css";

function table(props) {
  console.log(props.values);
  return (
    <div style={{ width: "100%" }}>
      
      <table className="table">
        <tbody>
          <tr>
            <th className="col-2" scope="row" style={{ width: "5%" }}>
              {props.index + 1}
            </th>
            <td className="col-4" style={{ width: "15%" }}>
              {props.FullName}
            </td>
            <td className="col-2" style={{ width: "15%" }}>
              {props.Username}
            </td>
            <td className="col-2" style={{ width: "15%" }}>
              {props.Password}
            </td>
            
            
            <td className="col-2" style={{ width: "20%" }}>
              {props.Email}
            </td>
            <td className="col-2" style={{ width: "10%" }}>
              {props.PhoneNumber}
            </td>
            <td className="col-2 " style={{ width: "10%" }}  >
            <Link to={`/edit/${props.info._id}`} > <AiOutlineEdit size={30} color='black' className="tablebutton"/></Link>
            </td>
            <td className="col-2" style={{ width: "10%" }} onClick={()=>props.handleDelete(props.info._id)}>
              
            <AiOutlineDelete size={30} className="tablebutton"/>
            </td>
           
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default table;
