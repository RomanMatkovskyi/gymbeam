import axios from "axios";
import Notiflix from "notiflix";

export const fetchAllProducts = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const resp = await axios.get(
      "https://gymbeam.sk/rest/V1/gb/catalog/products?category_ids[]=2416",
      config
    );
    return resp.data;
  } catch (error) {
    Notiflix.Notify.failure(
      "To run this web site please disable your cross-origion restrictions"
    );
  }
};
