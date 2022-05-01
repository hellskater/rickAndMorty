// Query to fetch the origin and last known location data of a character

import { useQuery } from "react-query";
import axios from "axios";

// Default Config

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

// To fetch last known location

const getLastLocationDetails = async (url) => {
  const res = await axios.get(url, axiosConfig);

  return res.data;
};

export const useLastLocationDetails = (url) => {
  return useQuery(["lastLocation", url], () => getLastLocationDetails(url), {
    keepPreviousData: true,
  });
};

// To fetch origin location

const getOriginLocationDetails = async (url) => {
  const res = await axios.get(url, axiosConfig);

  return res.data;
};

export const useOriginLocationDetails = (url) => {
  return useQuery(
    ["originLocation", url],
    () => getOriginLocationDetails(url),
    {
      keepPreviousData: true,
    }
  );
};
