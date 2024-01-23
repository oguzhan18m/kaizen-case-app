import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { QueryKeys } from "@/services/query-keys";

const keys = {
	all: [QueryKeys.GET_PROMOTION_BY_ID],
	byParams: (id: number) => [...keys.all, id],
};

export const useGetPromotionById = (
	id: number
): UseQueryResult<any | undefined, Error> => {
	return useQuery({
		queryKey: keys.byParams(id),
		queryFn: async () => {
			const { data } = await axiosInstance.get(`/promotions?Id=${id}`);

			return data;
		},
		retry: 1,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
	});
};
