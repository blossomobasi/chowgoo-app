import { StyleSheet, Pressable, useColorScheme } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

const BackButton = () => {
	const router = useRouter();
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return (
		<Pressable onPress={() => router.back()} style={styles.container}>
			<Ionicons name="chevron-back-outline" size={24} color={theme.primary} />
		</Pressable>
	);
};

export default BackButton;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderColor: "#e3e8f0",
		borderRadius: 10,
		padding: 10,
		width: 50,
	},
});
