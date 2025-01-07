import { Image, StyleSheet } from "react-native";
import React from "react";
import { Link, LinkProps } from "expo-router";

interface Props {
	href?: LinkProps["href"];
}

const ChowLogo = ({ href = "/(tabs)" }: Props) => {
	return (
		<Link href={href}>
			<Image source={require("../assets/images/chow-logo.jpeg")} style={styles.logo} />
		</Link>
	);
};

export default ChowLogo;

const styles = StyleSheet.create({
	logo: {
		width: 150,
		height: 150,
		objectFit: "contain",
	},
});
