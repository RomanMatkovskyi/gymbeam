export const selectController = (currentFilter, filterName, filterValue) => {
  const params = new URLSearchParams(currentFilter);
  const paramsObject = {};
  for (const [key, value] of params.entries()) {
    if (paramsObject[key]) {
      paramsObject[key].push(value);
    } else {
      paramsObject[key] = [value];
    }
  }

  console.log("Data", paramsObject);
  if (Object.keys(paramsObject).length === 0) {
    return false;
  }

  let isValueIncluded = false;
  for (const key in paramsObject) {
    if (key === filterName && paramsObject[key].includes(filterValue)) {
      isValueIncluded = true;
      return isValueIncluded;
    } else {
      return isValueIncluded;
    }
  }
};
