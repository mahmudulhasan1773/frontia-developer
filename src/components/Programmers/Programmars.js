import React, { useEffect, useState } from "react";
import Programmer from "../Programmer/Programmer";
import SalaryCart from "../SalaryCart/SalaryCart";
import "./Programmars.css";

const Programmars = () => {
  const [programmers, setProgrammers] = useState([]);
  const [displayProgrammar, setDisplayProgrammar] = useState([]);
  const [displayProgrammarInfo, setDisplayProgrammarInfo] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProgrammers(data));
  }, []);

  //handleCart
  const handdleSalaryInfo = (programmer) => {
    const allProgrammersInfo = [...displayProgrammarInfo, programmer];
    setDisplayProgrammarInfo(allProgrammersInfo);
  };
  const handleSearch = (e) => {
    const searchText = e.target.value;
    const searchResult = programmers.filter((programmar) =>
      programmar.category.includes(searchText)
    );
    setDisplayProgrammar(searchResult);
  };
  return (
    <div>
      <div className="search-programmar">
        <input
          style={{
            width: "100%",
            padding: "10px",
            textAlign: "center",
            boxShadow: "inset 2px 2px 5px px wheat",
          }}
          onChange={handleSearch}
          type="text"
          name=""
          id=""
          placeholder="search programmar by category, Frontend or backend"
        />
      </div>
      <h2 className="text-center"> Programmers hub </h2>
      <div className="programmers">
        <div className="display-programmers">
          {displayProgrammar.map((programmer) => (
            <Programmer
              handdleSalaryInfo={handdleSalaryInfo}
              key={programmer.employer_id}
              programmer={programmer}
            ></Programmer>
          ))}
        </div>
        <div className="display-salary">
          <SalaryCart
            displayProgrammarInfo={displayProgrammarInfo}
          ></SalaryCart>
        </div>
      </div>
    </div>
  );
};

export default Programmars;
