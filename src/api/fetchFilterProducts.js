import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = "";

export const fetchFilterProducts = async (searchQuery) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const resp = await axios.get(
      `https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416&${searchQuery}`,
      config
    );
    const data = await resp;
    return data;
  } catch (error) {
    Notiflix.Notify.failure(
      "To run this web site please disable your cross-origion restrictions"
    );
  }
};
