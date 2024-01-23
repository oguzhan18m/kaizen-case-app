import { useTheme } from "@/theme";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Brand } from "../molecules";
import { PrimaryButton } from "../buttons";
import { SafeScreen } from "../template";

interface Props {}

const AppHeader: React.FC<Props> = ({}) => {
	const { fonts } = useTheme();
	return (
		<SafeScreen>
			<View style={styles.root}>
				<Brand width={81} height={40} mode="contain" />
				<View style={styles.rightContainer}>
					<PrimaryButton size="md" text="Giriş Yap" onPress={() => {}} />

					<TouchableOpacity style={styles.userBtn}>
						<Image
							style={{ width: 16, height: 16 }}
							source={require("../../theme/assets/images/profile.png")}
							resizeMode="contain"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeScreen>
	);
};

export default AppHeader;

const styles = StyleSheet.create({
	root: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: "white",
		height: 60,
	},
	rightContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	userBtn: {
		width: 40,
		height: 40,
		borderRadius: 200,
		backgroundColor: "#1D1E1C",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
	},
});
