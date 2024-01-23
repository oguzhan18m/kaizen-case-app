import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { QueryKeys } from "@/services/query-keys";

export interface IPromotion {
	BrandIconColor: string;
	BrandIconUrl: string;
	BrandPromotionCardParticipationText: string;
	CardType: string;
	ExternalUrl: string;
	Id: number;
	ImageUrl: string;
	IsLuckyDay: boolean;
	ListButtonText: string;
	ListButtonTextBackGroudColor: string;
	LuckyDayBackgroundColor: string | null;
	LuckyDayText: string;
	LuckyDayTextColor: string | null;
	PromotionCardColor: string;
	RemainingText: string;
	ScenarioType: string;
	SeoName: string;
	Title: string;
	Unavailable: boolean;
	Unvisible: boolean;
}

const keys = {
	all: [QueryKeys.GET_PROMOTIONS],
	byParams: () => [...keys.all],
};

export const useGetPromotions = (): UseQueryResult<
	IPromotion[] | undefined,
	Error
> => {
	return useQuery({
		queryKey: keys.byParams(),
		queryFn: async () => {
			const { data } = await axiosInstance.get(`/promotions/list?Channel=PWA`);

			return data;
		},
		retry: 1,
		refetchOnWindowFocus: false,
		refetchOnReconnect: true,
	});
};
