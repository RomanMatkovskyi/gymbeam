import { nanoid } from "nanoid";
import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SelectEl = ({ dataOpt }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const checkBoxArray = dataOpt.options.slice(0, 5);
  const selectBoxArray = dataOpt.options.slice(5, dataOpt.options.length);
  const [filterValue, setFilterValue] = useState([]);

  useEffect(() => {}, [filterValue]);

  const handleCheckbox = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      setFilterValue([...filterValue, value]);
      searchParams.append(dataOpt.code, value);
      setSearchParams(searchParams);
    } else {
      setFilterValue(filterValue.filter((item) => item !== value));
      searchParams.delete(dataOpt.code, value);
      setSearchParams(searchParams);
    }
  };
  return (
    <>
      {checkBoxArray.map((el) => {
        return (
          <Fragment key={nanoid()}>
            <input
              type="checkbox"
              id={el.name}
              name={el.name}
              value={el.value}
              checked={filterValue.includes(el.value)}
              onChange={handleCheckbox}
            />
            <label htmlFor={el.name}>{`${el.name}(${el.count})`}</label>
          </Fragment>
        );
      })}

      {selectBoxArray.length !== 0 && (
        <select key={dataOpt.name} name={dataOpt.name}>
          <>
            <option value="">More</option>
            {selectBoxArray.options !== 0 &&
              selectBoxArray.map((opt, index) => {
                return (
                  <option key={opt.value} value={opt.value}>
                    {`${opt.name}(${opt.count})`}
                  </option>
                );
              })}
          </>
        </select>
      )}
    </>
  );
};

export default SelectEl;
