import { PrimaryButton } from "@/components/buttons";
import CardImage from "@/components/card-image/CardImage";
import { useGetPromotionById } from "@/services/queries/promotions/useGetPromotionById";
import type { ApplicationScreenProps } from "@/types/navigation";
import { decodeEntity } from "html-entities";
import moment from "moment";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const height = Dimensions.get("window").height;

function Campaign({ route, navigation }: ApplicationScreenProps) {
	const params = route.params;

	const { data: promotionData } = useGetPromotionById(
		params?.promotionId as number
	);

	const endDate = moment(promotionData?.EndDate);
	const now = moment();

	return (
		<View style={styles.root}>
			<CardImage
				backIcon
				navigation={navigation}
				imageUrl={promotionData?.ImageUrl}
				brandIconUrl={promotionData?.BrandIconUrl}
				height={height / 2}
				daysLeft={`Son ${endDate.diff(now, "days")} gün`}
			/>
			<ScrollView style={styles.body}>
				<Text style={styles.title}>
					{decodeEntity(promotionData?.Title?.replace(/<[^>]*>?/gm, ""))}
				</Text>

				<Text style={styles.description}>
					{decodeEntity(promotionData?.Description?.replace(/<[^>]*>?/gm, ""))}
				</Text>
			</ScrollView>
			<View style={styles.footer}>
				<PrimaryButton
					size="lg"
					fullWidth
					text="Hemen katıl"
					onPress={() => {}}
				/>
			</View>
		</View>
	);
}

export default Campaign;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		position: "relative",
	},
	body: {
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
	title: {
		color: "#1D1E1C",
		fontFamily: "Helvetica",
		fontSize: 26,
		fontWeight: "700",
		lineHHeight: "normal",
		letterSpacing: -0.2,
		textAlign: "left",
	},
	description: {
		color: "#1D1E1C",
		fontFamily: "Helvetica",
		fontSize: 14,
		fontWeight: "400",
		lineHHeight: "normal",
		lineHeight: 22,
		marginTop: 15,
	},
	footer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		paddingHorizontal: 15,
		paddingBottom: 20,
	},
});
