import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { QueryKeys } from "@/services/query-keys";
import { number } from "zod";

interface ITag {
	IconUrl: string;
	Id: number;
	Name: string;
	Rank: number;
}

const keys = {
	all: [QueryKeys.GET_TAGS],
	byParams: () => [...keys.all],
};

export const useGetTags = (): UseQueryResult<ITag[] | undefined, Error> => {
	return useQuery({
		queryKey: keys.byParams(),
		queryFn: async () => {
			const { data } = await axiosInstance.get(`/tags/list`);

			return data;
		},
		retry: 1,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
	});
};
