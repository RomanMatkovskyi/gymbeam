import axios from "axios";

axios.defaults.baseURL =
  "https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416";

export const fetchFilterProducts = async (categoryName, filterId) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const resp = await axios.get(`&${categoryName}[]=${filterId}`, config);
    return resp.data;
  } catch (error) {
    console.log("Error while fetching data", error);
  }
};
