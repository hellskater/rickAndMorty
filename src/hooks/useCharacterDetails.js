// Query to fetch the profile details of a single character as per the user id

import { useQuery } from "react-query";
import axios from "axios";

// Default Config

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getCharacterDetails = async (url) => {
  const res = await axios.get(url, axiosConfig);

  return res.data;
};

export const useGetCharacterDetails = (url) => {
  return useQuery(["character", url], () => getCharacterDetails(url), {
    keepPreviousData: true,
  });
};
