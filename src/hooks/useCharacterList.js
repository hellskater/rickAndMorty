// Query to fetch the list of all characters as per the parameter and page number

import { useQuery } from "react-query";
import axios from "axios";

// Default Config

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getCharacterList = async (url) => {
  const res = await axios.get(url, axiosConfig);

  return res.data;
};

export const useGetCharacterList = (url) => {
  return useQuery(["characters", url], () => getCharacterList(url), {
    keepPreviousData: true,
  });
};
