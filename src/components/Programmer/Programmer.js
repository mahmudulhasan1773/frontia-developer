import React from "react";
import "./Programmer.css";

const Programmer = (props) => {
  const { name, img, category, company, salary, yearly_bonus } =
    props.programmer;

  return (
    <div className="card">
      <img
        className="card-img-top"
        src={img}
        alt="CardImg"
        style={{ height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{category}</p>
        <b>{name}</b>
        <h4>{salary}</h4>
        <p>{company}</p>
        <p>{yearly_bonus}</p>
        <button
          onClick={() => props.handdleSalaryInfo(props.programmer)}
          className="btn btn-primary"
        >
          programmer info
        </button>
      </div>
    </div>
  );
};

export default Programmer;
