import { useEffect, useState } from "react";
import "./App.css";
import { fetchAllProducts } from "./api/fetchProducts";
import { useLocation } from "react-router-dom";

import { MainContainer } from "./App.styled";

import SportsNutritionList from "./components/SportsNutritionList/SportsNutritionList";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import SectionDescription from "./components/SectionDescription/SectionDescription";
import { filterQueryCreator } from "./helpers/filterQueryCreator";
import { fetchFilterProducts } from "./api/fetchFilterProducts";

export const App = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const filterLink = useLocation();
  let search = filterQueryCreator(filterLink.search);

  useEffect(() => {
    fetchFilterProducts(search).then((resp) => {
      if (resp) {
        setCategoryData(resp.data.items);
        setFilterData(resp.data.filters);
      }
    });
  }, [search]);

  useEffect(() => {
    if (search === "") {
      fetchAllProducts()
        .then((data) => {
          if (data) {
            setCategoryData(data.items);
            setFilterData(data.filters);
          }
        })
        .catch((err) => console.log("Something went wrong", err));
    } else {
      return;
    }
  }, []);
  return (
    <MainContainer>
      <SectionDescription />
      <FilterPanel data={filterData} />
      <SportsNutritionList data={categoryData} />
    </MainContainer>
  );
};

export default App;
