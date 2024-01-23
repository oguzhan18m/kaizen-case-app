import { SafeScreen } from "@/components/template";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Wallet = () => {
	return (
		<SafeScreen>
			<View style={styles.root}>
				<Text style={styles.text}>Wallet Page</Text>
			</View>
		</SafeScreen>
	);
};

export default Wallet;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
});
