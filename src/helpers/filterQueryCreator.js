export const filterQueryCreator = (filterQuery) => {
  const params = new URLSearchParams(filterQuery);

  const paramsObject = {};
  for (const [key, value] of params.entries()) {
    if (paramsObject[key]) {
      paramsObject[key].push(value);
    } else {
      paramsObject[key] = [value];
    }
  }

  let newQueryString = "";
  for (const key in paramsObject) {
    if (Array.isArray(paramsObject[key])) {
      newQueryString += paramsObject[key]
        .map((val) => `${key}[]=${val}`)
        .join("&");
    } else {
      newQueryString += `${key}=${paramsObject[key]}`;
    }
    newQueryString += "&";
  }

  newQueryString = newQueryString.slice(0, -1);
  return newQueryString;
};
