import { View, StyleSheet, TextInput, useColorScheme } from "react-native";
import Text from "@/components/ui/Text";
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

			<Text variant="bold" style={[styles.text, { color: theme.primary }]}>
				Hello! Register to get started
			</Text>

			<View>
				<TextInput placeholder="Username" style={styles.input} />
				<TextInput placeholder="Email" style={styles.input} />
				<TextInput placeholder="Password" style={styles.input} />
				<TextInput placeholder="Confirm Password" style={styles.input} />
			</View>

			<Button title="Register" onPress={() => console.log("pressed😎")} customStyles={{ marginTop: 30 }} />

			<Text style={styles.registerText}>
				Already have an account?{" "}
				<Link href="/(auth)/login" style={{ color: theme.primary, fontFamily: "Urbanist_600SemiBold" }}>
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
		fontSize: 15,
	},
	registerText: {
		textAlign: "center",
		marginTop: 30,
		fontSize: 16,
	},
});
