import type { StackScreenProps } from "@react-navigation/stack";

export type DiscoverStackParamList = {
	discover: undefined;
	campaign: { promotionId: number; seoName: string };
};

export type ApplicationScreenProps = StackScreenProps<DiscoverStackParamList>;
