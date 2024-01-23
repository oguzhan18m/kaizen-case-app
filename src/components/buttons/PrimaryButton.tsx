import React from "react";
import { useTheme } from "@/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
	fullWidth?: boolean;
	text: string;
	size: "sm" | "md" | "lg";
	onPress?: () => void;
}

const PrimaryButton: React.FC<Props> = ({ fullWidth, text, onPress, size }) => {
	const { colors, fonts } = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={onPress}
			style={{
				...styles.btn,
				backgroundColor: colors.red500,
				width: fullWidth ? "100%" : "auto",
				paddingVertical: size === "lg" ? 20 : size === "md" ? 10 : 5,
				paddingHorizontal: 10,
			}}>
			<Text
				style={[
					fonts.bold,
					{ color: "white", fontFamily: "Helvetica", fontSize: 12 },
				]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	btn: {
		borderRadius: 200,
		justifyContent: "center",
		alignItems: "center",
	},
});
