import { StyleSheet, useColorScheme, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import Text from "@/components/ui/Text";

interface ButtonProps {
	title: string;
	type?: "primary" | "secondary";
	link?: string;
	customStyles?: object;
	onPress?: () => void;
}

const Button = ({ title, type = "primary", link, customStyles, onPress }: ButtonProps) => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	if (link) {
		return (
			<Link
				href={link as any}
				style={[styles.button, { backgroundColor: type === "primary" ? theme.primary : "white" }, customStyles]}
			>
				<Text style={[styles.text, type === "secondary" && { color: theme.primary }]}>{title}</Text>
			</Link>
		);
	}

	return (
		<Pressable
			style={[styles.button, { backgroundColor: type === "primary" ? theme.primary : "white" }, customStyles]}
			onPress={onPress}
		>
			<Text style={[styles.text, type === "secondary" && { color: theme.primary }]}>{title}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		width: "100%",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	text: {
		color: "white",
		fontWeight: "500",
		fontSize: 16,
		textAlign: "center",
	},
});
