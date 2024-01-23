import React from "react";
import { useGetTags } from "@/services/queries/tags/useGetTags";
import {
	StyleSheet,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { useTheme } from "@/theme";

const Tags = () => {
	const { colors } = useTheme();
	const [selectedTag, setSelectedTag] = React.useState<number | undefined>();

	const { data: tagsData } = useGetTags();

	return (
		<FlatList
			style={styles.root}
			horizontal
			showsHorizontalScrollIndicator={false}
			data={tagsData}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => setSelectedTag(item?.Id)}
					style={{
						...styles.tag,
						borderColor: selectedTag === item?.Id ? colors.red500 : "#ECEEEF",
					}}>
					<Image style={styles.icon} source={{ uri: item?.IconUrl }} />
					<Text>{item?.Name}</Text>
				</TouchableOpacity>
			)}
		/>
	);
};

export default Tags;

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: "100%",
		// paddingVertical: 16,
	},
	tag: {
		height: "100%",
		paddingHorizontal: 8,
		paddingVertical: 4,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 8,
		borderWidth: 1.5,
		marginLeft: 8,
	},
	icon: {
		width: 24,
		height: 24,
		resizeMode: "contain",
		borderRadius: 8,
		marginRight: 4,
	},
});
