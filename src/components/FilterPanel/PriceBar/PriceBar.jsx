import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSlider from "react-slider";

const PriceBar = ({ data }) => {
  const [price, setPrice] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  // searchParams.set(data.code, value);
  // setSearchParams(searchParams);

  useEffect(() => {
    if (price[0] === undefined && price[1] === undefined) {
      return;
    }

    const priceString = `${price[0]}-${price[1]}`;
    searchParams.set(data.code, priceString);
    setSearchParams(searchParams);
  }, [price]);

  return (
    <>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[data.min, data.max]}
        min={data.min}
        max={data.max}
        onAfterChange={(range, index) => {
          setPrice(range);
        }}
      />
    </>
  );
};

export default PriceBar;
