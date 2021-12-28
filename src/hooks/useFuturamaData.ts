import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { FUTURAMA_INFO_API_ENDPOINT } from "../constants";

export const useFuturamaData = (path: string) => {
  return useSWR(`${FUTURAMA_INFO_API_ENDPOINT}${path}`, fetcher);
};
