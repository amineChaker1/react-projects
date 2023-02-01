import React, { useState } from "react";
import classe from "./home.module.css";
import CarCard from "../components/CarCard/CarCard";
import CarForm from "../components/CarForm/CarForm";
import Filter from "../components/Filter/Filter";
import cars from "../assets/cars";

const Home = () => {
  const [carsList, setCarsList] = useState(cars);
  const AddCar = (e) => {
    e.preventDefault();
    const myNewCar = {
      name: e.target.name.value,
      url: e.target.url.value,
      category: e.target.category.value,
      description: e.target.description.value,
    };
    setCarsList([...carsList, myNewCar]);
  };
  const FilterCars = (e) => {
    {
      const type = e.target.selectedOptions[0].value;
      console.log(type);
      if (type == "All") {
        setCarsList(cars);
      } else {
        const newCars = carsList.filter((e) => e.category == type);
        setCarsList(newCars);
      }
    }
  };
  return (
    <div>
      <CarForm AddCar={AddCar} />
      <Filter FilterCars={FilterCars} />

      <CarCard carsList={carsList} />
    </div>
  );
};

export default Home;
