import React from "react";
import { useTheme } from "@/theme";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
	fullWidth?: boolean;
	text: string;
	size: "sm" | "md" | "lg";
	onPress?: () => void;
}

const SecondaryButton: React.FC<Props> = ({
	fullWidth,
	text,
	size,
	onPress,
}) => {
	const { fonts } = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={onPress}
			style={{
				...styles.btn,
				width: fullWidth ? "100%" : "auto",
				paddingVertical: size === "sm" ? 10 : size === "md" ? 15 : 20,
				paddingHorizontal: size === "sm" ? 20 : 25,
			}}>
			<Text style={[fonts.bold, fonts.size_16, { color: "black" }]}>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default SecondaryButton;

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "white",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
