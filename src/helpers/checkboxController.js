import { useLocation } from "react-router-dom";

export const ChekboxController = (filterName, filterValue) => {
  const currentFilters = useLocation();
  const params = new URLSearchParams(currentFilters.search);
  const paramsObject = {};
  for (const [key, value] of params.entries()) {
    if (paramsObject[key]) {
      paramsObject[key].push(value);
    } else {
      paramsObject[key] = [value];
    }
  }

  let isValueIncluded = false;
  for (const key in paramsObject) {
    if (key === filterName && paramsObject[key].includes(filterValue)) {
      isValueIncluded = true;
      return isValueIncluded;
    }
  }
};
