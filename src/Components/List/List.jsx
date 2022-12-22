import React from "react";
import Table from "./../Table/Table";
import TableHeader from "./../TableHeader/TableHeader";
import { useState, useEffect } from "react";
import {
  getApplicant,
  deleteApplicant,
} from "./../../Service/api";


const handleDelete = async (id) => {
  console.log(id);
  let response = await (await deleteApplicant(id)).data;
  console.log(response);
};

function List() {
  const [applicantData, setApplicantData] = useState([]);

 
  
  useEffect(() => {
    getApplicatsDetails();
  }, [applicantData]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  };

  return (
    <div>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-12">
          <TableHeader />
          {applicantData.map((info, i) => (
            <Table
              index={i}
              info={info}
              FullName={info.FullName}
              handleDelete={handleDelete}
              Username={info.Username}
              Password={info.Password}
          
              Email={info.Email}
  
              PhoneNumber={info.PhoneNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
