import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  const { data, error, isLoading } = useQuery<FetchResponse<T>, Error>({
    queryKey: [endpoint, requestConfig?.params],
    queryFn: () =>
      apiClient
        .get<FetchResponse<T>>(endpoint, requestConfig)
        .then((res) => res.data),
  });

  return { data: data?.results ?? [], error: error?.message ?? "", isLoading };
};

export default useData;
