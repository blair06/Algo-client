import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const user = {
  all: ["user"] as const,
  lists: () => [...user.all, "list"] as const,
  list: (filters: string) => [...user.lists(), { filters }] as const,
  details: () => [...user.all, "detail"] as const,
  detail: (id: number) => [...user.details(), id] as const,
};
export const useUserQuery = () => {
  // const fetcher = async () =>
  //   await axios
  //     .get<Me>(process.env.REACT_APP_API_URL + "/Me")
  //     .then(({ data }) => data);
  // return useQuery(me.all, () => fetcher(), {
  //   onError: () => console.log("meQuery"),
  //   retry: false,
  //   suspense: true,
  //   refetchOnWindowFocus: false,
  // });
};
