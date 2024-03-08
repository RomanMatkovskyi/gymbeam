import { useEffect, useState } from "react";
import "./App.css";
import { fetchAllProducts } from "./api/fetchProducts";
import {
  MainContainer,
  MainTitle,
  SectionDescr,
  SpanColor,
} from "./App.styled";
import SportsNutritionList from "./api/components/SportsNutritionList/SportsNutritionList";
export const App = () => {
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetchAllProducts()
      .then((data) => {
        setCategoryData(data.items);
        setFilterData(data.filters);
      })
      .catch((err) => console.log("Something went wrong", err));
  }, []);
  console.log("categoryData", categoryData);
  console.log("filterData", filterData);
  return (
    <MainContainer>
      <MainTitle>Sports Nutrition</MainTitle>
      <SectionDescr>
        <strong>Sports Nutrition</strong> is a category of products that covers
        dozens of different types of dietary supplements for athletes. These
        include proteins, amino acids, weight gainers and carbohydrates, fat
        burners, joint supplements, pre-workout and testosterone support
        supplements, vitamins <strong>and</strong> minerals.
      </SectionDescr>
      <p>
        The category is intended{" "}
        <strong>for strength athletes, runners, cyclists</strong> and all the
        fans of a healthy lifestyle. And we are not talking about just the
        physical sports, because gamers and e-sport fans will also come to
        appreciate such supplements. Nutrition in sports or e-sports is one of
        the main pillars, thanks to which you can achieve your goals much more
        easily.{" "}
      </p>
      <SportsNutritionList data={categoryData} />
    </MainContainer>
  );
};

export default App;
