import React from "react";
import classe from "./CarCard.module.css";

const CarCard = ({ carsList }) => {
  return (
    <>
      <div className={classe.CarCard}>
        {carsList.map((car) => (
          <div className={classe.container}>
            <p> {car.name} </p>
            <img src={car.url} style={{ width: "80%" }} alt="" />
            <p>Type : {car.category} </p>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCard;
