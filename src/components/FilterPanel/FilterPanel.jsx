import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";

import SelectEl from "./SelectEl/SelectEl";
import SingleFilter from "./SingleFilter/SingleFilter";
import {
  FilterBtn,
  SingleInputsContainer,
  FilterName,
} from "./FilterPanel.styled";
import PriceBar from "./PriceBar/PriceBar";

const FilterPanel = ({ data }) => {
  const priceData = data.find((obj) => obj["code"] === "price");
  const [filterOut, setFilterOut] = useState(false);
  let [_, setSearchParams] = useSearchParams();

  return (
    <>
      <FilterBtn
        type="button"
        onClick={() => {
          setFilterOut(!filterOut);
        }}
      >
        {!filterOut ? "Zobraziť filtre" : "Skryt filtre"}
      </FilterBtn>

      {filterOut && (
        <FilterBtn
          type="button"
          onClick={() => {
            const newSearchParams = new URLSearchParams();
            setSearchParams(newSearchParams);
          }}
        >
          Vymaž filtre
        </FilterBtn>
      )}

      {data &&
        filterOut &&
        data.map((sel) => {
          if (sel.code === "default_category") {
            return;
          } else {
            return (
              sel.options &&
              sel.options.length !== 1 && (
                <SingleInputsContainer key={nanoid()}>
                  <FilterName>{sel.name}</FilterName>
                  <SelectEl dataOpt={sel} />
                </SingleInputsContainer>
              )
            );
          }
        })}

      {priceData && filterOut && (
        <SingleInputsContainer>
          <FilterName>Cena</FilterName>
          <PriceBar data={priceData} />
        </SingleInputsContainer>
      )}

      <SingleInputsContainer>
        {data &&
          filterOut &&
          data.map((inp) => {
            return (
              inp.options &&
              inp.options.length === 1 && (
                <Fragment key={nanoid()}>
                  <SingleFilter data={inp} />
                </Fragment>
              )
            );
          })}
      </SingleInputsContainer>
    </>
  );
};

export default FilterPanel;
