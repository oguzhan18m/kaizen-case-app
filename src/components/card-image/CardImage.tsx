import { DiscoverStackParamList } from "@/types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
	Image,
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

interface Props {
	imageUrl: string;
	brandIconUrl: string;
	height: number;
	backIcon?: boolean;
	daysLeft?: string;
	navigation?: StackNavigationProp<
		DiscoverStackParamList,
		keyof DiscoverStackParamList,
		undefined
	>;
}

const CardImage: React.FC<Props> = ({
	imageUrl,
	brandIconUrl,
	height,
	backIcon,
	navigation,
	daysLeft,
}) => {
	return (
		<ImageBackground
			source={{ uri: imageUrl }}
			imageStyle={{
				borderRadius: backIcon ? 0 : 20,
				borderBottomLeftRadius: 120,
			}}
			style={{ ...styles.imgBackground, height }}>
			{backIcon && (
				<TouchableOpacity
					onPress={() => navigation?.goBack()}
					style={styles.backIconContainer}>
					<Image
						style={styles.backIcon}
						source={require("@/theme/assets/images/back_icon.png")}
					/>
				</TouchableOpacity>
			)}
			<View style={styles.brandIconCover}>
				<Image
					style={styles.brandIcon}
					source={{ uri: brandIconUrl }}
					resizeMode="contain"
				/>
			</View>
			{daysLeft && (
				<View style={styles.daysLeft}>
					<Text style={styles.daysLeftText}>{daysLeft}</Text>
				</View>
			)}
		</ImageBackground>
	);
};

export default CardImage;

const styles = StyleSheet.create({
	imgBackground: {
		width: "100%",
		position: "relative",
	},
	brandIconCover: {
		padding: 2,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "white",
		position: "absolute",
		left: 10,
		bottom: 10,
		borderRadius: 200,
	},
	brandIcon: {
		width: 55,
		height: 55,
		resizeMode: "contain",
		borderRadius: 8,
	},
	backIconContainer: {
		width: 40,
		height: 40,
		position: "absolute",
		left: 15,
		top: 55,
	},
	backIcon: {
		width: "100%",
		height: "100%",
		resizeMode: "contain",
	},
	daysLeft: {
		position: "absolute",
		right: 15,
		bottom: 15,
		backgroundColor: "black",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 20,
	},
	daysLeftText: {
		color: "#FFF",
		textAlign: "center",
		fontFamily: "Helvetica",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "400",
		letterSpacing: -0.5,
	},
});
