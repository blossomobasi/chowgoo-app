import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import Button from "@/components/Button";
import { Link } from "expo-router";

const WelcomeScreen = () => {
	return (
		<ImageBackground source={require("../assets/images/chow-auth-image.jpg")} style={{ flex: 1 }}>
			<View style={[styles.container, { padding: 20, gap: 20 }]}>
				<Button title="Login" link="(auth)/login" />
				<Button title="Register" type="secondary" link="(auth)/register" />
			</View>

			<Link href="/(tabs)" style={styles.link}>
				Continue as a guest
			</Link>
		</ImageBackground>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "flex-end",
	},
	link: {
		color: "white",
		fontSize: 16,
		fontWeight: "semibold",
		textAlign: "center",
		marginVertical: 20,
		textDecorationLine: "underline",
	},
});
