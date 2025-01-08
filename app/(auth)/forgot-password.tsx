import { View, StyleSheet, TextInput, useColorScheme } from "react-native";
import Text from "@/components/ui/Text";
import BackButton from "@/components/BackButton";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Button from "@/components/Button";

const ForgotPasswordScreen = () => {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return (
		<View style={styles.container}>
			<BackButton />

			<Text variant="bold" style={[styles.text, { color: theme.primary }]}>
				Forgot Password?
			</Text>

			<Text style={styles.forgotPasswordText}>
				Don't worry! It occurs. Please enter the email address linked with your account.
			</Text>

			<View>
				<TextInput placeholder="Enter your email" style={styles.input} />
			</View>

			<Button title="Send Code" onPress={() => console.log("pressed😎")} customStyles={{ marginTop: 30 }} />

			<Text style={styles.rememberPassword}>
				Remember Password?{" "}
				<Link href="/(auth)/login" style={{ color: theme.primary, fontFamily: "Urbanist_600SemiBold" }}>
					Login
				</Link>
			</Text>
		</View>
	);
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 32,
		fontWeight: "600",
		marginTop: 20,
		marginBottom: 10,
	},
	forgotPasswordText: {
		fontSize: 16,
		color: "#8391A1",
		marginBottom: 30,
	},
	input: {
		borderWidth: 1,
		borderColor: "#d8dce5",
		borderRadius: 5,
		padding: 20,
		marginTop: 10,
		fontSize: 15,
		backgroundColor: "#E8ECF4",
	},
	rememberPassword: {
		textAlign: "center",
		marginTop: 30,
		fontSize: 16,
	},
});
