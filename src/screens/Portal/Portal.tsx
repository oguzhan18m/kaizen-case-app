import { SafeScreen } from "@/components/template";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Portal = () => {
	return (
		<SafeScreen>
			<View style={styles.root}>
				<Text style={styles.text}>Portal Page</Text>
			</View>
		</SafeScreen>
	);
};

export default Portal;

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
