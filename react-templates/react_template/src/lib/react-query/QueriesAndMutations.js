import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery
} from "@tanstack/react-query";
import QUERY_KEYS from "./queryKeys";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: user => createUserAccount(user)
  });
};

export const useGetAllUser = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_ALL_POST],
    queryFn: getAllUser
  });
};
