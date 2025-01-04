import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.text}>Some text</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		paddingTop: 50,
		paddingHorizontal: 20,
	},
	text: {
		fontSize: 18,
		fontWeight: 600,
	},
});
