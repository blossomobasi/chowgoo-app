import { View, Text, StyleSheet, TextInput, useColorScheme } from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Button from "@/components/Button";

const RegisterScreen = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];
	return (
		<View style={styles.container}>
			<BackButton />

			<Text style={[styles.text, { color: theme.primary }]}>Hello! Register to get started</Text>

			<View>
				<TextInput placeholder="Username" style={styles.input} />
				<TextInput placeholder="Email" style={styles.input} />
				<TextInput placeholder="Password" style={styles.input} />
				<TextInput placeholder="ConfirmPassword" style={styles.input} />
			</View>

			<Button title="Register" onPress={() => console.log("pressed😎")} customStyles={{ marginTop: 30 }} />

			<Text style={styles.registerText}>
				Already have an account?{" "}
				<Link href="/(auth)/login" style={{ color: theme.primary, fontWeight: "bold" }}>
					Login Now
				</Link>
			</Text>
		</View>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 32,
		fontWeight: "600",
		marginVertical: 20,
	},
	input: {
		borderWidth: 1,
		borderColor: "#d8dce5",
		borderRadius: 5,
		padding: 20,
		marginTop: 10,
		backgroundColor: "#E8ECF4",
	},
	link: {
		textAlign: "right",
		marginTop: 15,
		marginBottom: 30,
		fontWeight: "semibold",
	},
	registerText: {
		textAlign: "center",
		marginTop: 30,
		fontWeight: "semibold",
		fontSize: 16,
	},
});
