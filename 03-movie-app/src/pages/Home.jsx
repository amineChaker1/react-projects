import React from "react";
import "./home.module.css";
import classe from "./home.module.css";
import MovieCard from "../components/MovieCard";
import MovieFilter from "../components/MovieFilter";
import MovieForm from "../components/MovieForm";
const Home = () => {
  return (
    <div className={classe.father}>
      <MovieForm />
      <MovieFilter />
      <MovieCard />
    </div>
  );
};

export default Home;
