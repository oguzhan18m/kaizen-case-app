import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import {
	IPromotion,
	useGetPromotions,
} from "@/services/queries/promotions/useGetPromotions";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { decodeEntity } from "html-entities";
import { useTheme } from "@/theme";
import CardImage from "@/components/card-image/CardImage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

interface Props {
	navigation: any;
}

const Promotions: React.FC<Props> = ({ navigation }) => {
	const { colors } = useTheme();
	const carouselRef = React.useRef(null);
	const [activeSlide, setActiveSlide] = React.useState<number>(0);

	console.log({ height });

	const { data: promotions } = useGetPromotions();

	const _renderItem = ({ item }: { item: IPromotion }) => {
		const title = decodeEntity(item?.Title?.replace(/<[^>]*>?/gm, ""));
		return (
			<TouchableOpacity
				activeOpacity={1}
				onPress={() => handleNavigateToPromotionDetail(item?.Id, item?.SeoName)}
				style={styles.cardsContainer}>
				<View
					style={{
						...styles.backCard,
						backgroundColor: item?.PromotionCardColor,
					}}
				/>
				<View key={item?.Id} style={styles.promotion}>
					<CardImage
						imageUrl={item?.ImageUrl}
						brandIconUrl={item?.BrandIconUrl}
						height={height / 3}
					/>
					<Text style={styles.title}>{title}</Text>
					<Text style={{ ...styles.daha, color: item?.PromotionCardColor }}>
						Daha Daha
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	const handleNavigateToPromotionDetail = (
		promotionId: number,
		seoName: string
	) => {
		navigation.navigate(`campaign`, {
			promotionId,
			seoName,
		});
	};

	return (
		<View style={styles.root}>
			<Carousel
				ref={carouselRef}
				data={promotions ?? []}
				renderItem={_renderItem}
				pagingEnabled
				sliderWidth={width}
				itemWidth={width / 1}
				style={styles.carousel}
				activeAnimationType="decay"
				onSnapToItem={(index) => setActiveSlide(index)}
			/>
			<Pagination
				dotsLength={promotions?.length ?? 0}
				activeDotIndex={activeSlide}
				containerStyle={{
					maxWidth: width / 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					alignSelf: "center",
				}}
				dotStyle={{
					width: 20,
					height: 10,
					borderRadius: 5,
					marginHorizontal: 0,
					backgroundColor: colors.red500,
				}}
				inactiveDotStyle={{
					width: 10,
					height: 10,
					borderRadius: 200,
					backgroundColor: "#D8D8D8",
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		</View>
	);
};

export default Promotions;

const styles = StyleSheet.create({
	root: {
		width: width,
		flex: 1,
		marginTop: 28,
	},
	carousel: {
		paddingVertical: 16,
	},
	cardsContainer: {
		position: "relative",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	promotion: {
		width: width / 1.2,
		padding: 4,
		paddingBottom: 20,
		borderWidth: 1.5,
		borderColor: "#ECEEEF",
		borderRadius: 20,
		position: "relative",
		backgroundColor: "white",
	},
	title: {
		color: "#1D1E1C",
		textAlign: "center",
		fontFamily: "Helvetica",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: -0.215,
		marginTop: 16,
	},
	daha: {
		textAlign: "center",
		fontFamily: "Helvetica",
		fontSize: 14,
		fontWeight: "700",
		marginTop: 10,
	},
	backCard: {
		width: width / 1.2,
		height: 55,
		position: "absolute",
		borderRadius: 20,
		left: 35,
		bottom: -13,
		zIndex: -2,
		transform: [{ rotate: "3.5deg" }],
		transformOrigin: { x: 0, y: 100 },
	},
});
