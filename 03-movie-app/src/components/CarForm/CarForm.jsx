import React from "react";
import classe from "./CarFrom.module.css";

const CarForm = ({ AddCar }) => {
  return (
    <>
      <div className={classe.CarForm}>
        <div className={classe.container}>
          <p>Car Form</p>
          <p>Please Enter Your Car</p>
          <form onSubmit={(e) => AddCar(e)} className={classe.form}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="url">Car Image Url</label>
            <input type="url" name="url" />
            <label htmlFor="category">Type</label>
            <input type="text" name="category" />
            <label htmlFor="description">Describe Your Car</label>
            <textarea name="description" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CarForm;
