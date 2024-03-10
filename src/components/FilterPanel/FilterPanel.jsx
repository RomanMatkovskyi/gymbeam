import { Fragment, useState } from "react";
import SelectEl from "./SelectEl/SelectEl";
import { nanoid } from "nanoid";
import { useSearchParams } from "react-router-dom";

import {
  FilterBtn,
  SingleInputsContainer,
  FilterName,
} from "./FilterPanel.styled";
import SingleFilter from "./SingleFilter/SingleFilter";

const FilterPanel = ({ data }) => {
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
