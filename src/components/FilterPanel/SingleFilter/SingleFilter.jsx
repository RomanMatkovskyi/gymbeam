import { nanoid } from "nanoid";
import { Fragment } from "react";
import { ChekboxController } from "../../../helpers/checkboxController";
import { useSearchParams } from "react-router-dom";

const SingleFilter = ({ data }) => {
  const inputData = data.options[0];
  let [searchParams, setSearchParams] = useSearchParams();

  const handleCheckbox = (e) => {
    const value = e.target.value;

    if (e.target.checked) {
      searchParams.append(data.code, value);
      setSearchParams(searchParams);
    } else {
      searchParams.delete(data.code, value);
      setSearchParams(searchParams);
    }
  };

  return (
    <Fragment key={nanoid()}>
      <input
        type="checkbox"
        id={inputData.slug}
        name={inputData.slug}
        value={inputData.value}
        checked={ChekboxController(data.code, inputData.value)}
        onChange={handleCheckbox}
      />
      <label
        htmlFor={inputData.slug}
      >{`${inputData.slug}(${inputData.count})`}</label>
    </Fragment>
  );
};

export default SingleFilter;
