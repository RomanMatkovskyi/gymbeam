import { nanoid } from "nanoid";
import { Fragment } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ChekboxController } from "../../../helpers/checkboxController";
import { selectController } from "../../../helpers/selectController";

const SelectEl = ({ dataOpt }) => {
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();
  const checkBoxArray = dataOpt.options.slice(0, 5);
  const selectBoxArray = dataOpt.options.slice(5, dataOpt.options.length);

  const handleCheckbox = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      searchParams.append(dataOpt.code, value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(dataOpt.code, value);
      setSearchParams(searchParams);
    }
  };

  const handleSelect = (e) => {
    const value = e.target.value;

    const isSelected = selectController(location.search, dataOpt.code, value);
    if (isSelected === false) {
      searchParams.append(dataOpt.code, value);
      setSearchParams(searchParams);
    } else {
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
              checked={ChekboxController(dataOpt.code, el.value)}
              onChange={handleCheckbox}
            />
            <label htmlFor={el.name}>{`${el.name}(${el.count})`}</label>
          </Fragment>
        );
      })}

      {selectBoxArray.length !== 0 && (
        <select key={dataOpt.name} name={dataOpt.name} onChange={handleSelect}>
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
