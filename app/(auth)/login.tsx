import { View, StyleSheet, TextInput, useColorScheme } from "react-native";
import Text from "@/components/ui/Text";
import React from "react";
import BackButton from "@/components/BackButton";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Button from "@/components/Button";

const LoginScreen = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];
	return (
		<View style={styles.container}>
			<BackButton />

			<Text variant="bold" style={[styles.text, { color: theme.primary }]}>
				Welcome back! Glad to see you, Again!
			</Text>

			<View>
				<TextInput placeholder="Enter your email" style={styles.input} />
				<TextInput placeholder="Enter your password" style={styles.input} />
			</View>

			<Link href="/(auth)/forgot-password" style={styles.link}>
				Forgot Password?
			</Link>

			<Button title="Login" onPress={() => alert("Logged In")} />

			<Text style={styles.registerText}>
				Don't have an account?{" "}
				<Link href="/(auth)/register" style={{ color: theme.primary, fontFamily: "Urbanist_600SemiBold" }}>
					Register Now
				</Link>
			</Text>
		</View>
	);
};

export default LoginScreen;

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
		fontFamily: "Urbanist_400Regular",
	},
	link: {
		textAlign: "right",
		marginTop: 15,
		marginBottom: 30,
		fontSize: 15,
		fontFamily: "Urbanist_400Regular",
	},
	registerText: {
		textAlign: "center",
		marginTop: 30,
		fontSize: 16,
	},
});
