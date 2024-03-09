import { useState } from "react";
import SelectEl from "./SelectEl/SelectEl";
import { nanoid } from "nanoid";

const FilterPanel = ({ data }) => {
  const [filterOut, setFilterOut] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setFilterOut(!filterOut);
        }}
      >
        {!filterOut ? "Show filter" : "Hide filter"}
      </button>
      {data &&
        filterOut &&
        data.map((sel) => {
          if (sel.code === "default_category") {
            return;
          }
          return (
            sel.options &&
            sel.options.length !== 1 && (
              <div key={nanoid()}>
                <h2>{sel.name}</h2>
                <SelectEl dataOpt={sel} />
              </div>
            )
          );
        })}
    </>
  );
};

export default FilterPanel;
