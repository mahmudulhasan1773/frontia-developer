import React from "react";
import "./SalaryCart.css";
const SalaryCart = (props) => {
  // const { sallary } = props.displayProgrammarInfo;
  const programmarsInfo = props.displayProgrammarInfo;
  console.log(programmarsInfo);

  let totalSalary = 0;
  for (const programmar of programmarsInfo) {
    if (programmarsInfo.length >= 0) {
      console.log(programmar.sallary);
      totalSalary = totalSalary + programmar.sallary;
      console.log(totalSalary);
    }
  }
  return (
    <div className="card">
      <div className="salaryCart">
        <ul className="list-group list-group-flush">
          <b style={{ padding: "10px" }}>
            {" "}
            programmar counted:{" "}
            <span className="text-danger">{programmarsInfo.length}</span>
          </b>
          <li className="list-group-item"> Salary is: {totalSalary}</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
};

export default SalaryCart;
