import ChowLogo from "@/components/ChowLogo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Pressable, useColorScheme } from "react-native";

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return (
		<View style={styles.container}>
			<ChowLogo />

			<View style={[styles.walletCard, { backgroundColor: theme.primary }]}>
				<Text style={styles.walletLabel}>Total Balance</Text>
				<Text style={styles.walletBalance}>$ 165,400.00</Text>

				<View style={styles.row}>
					<Pressable style={styles.addFundsButton}>
						<Text style={[styles.addFundsText, { color: theme.primary }]}>Add Funds</Text>
					</Pressable>

					<Pressable style={styles.iconButton}>
						<Ionicons name="chevron-forward-outline" size={24} color={theme.primary} />
					</Pressable>
				</View>
			</View>

			<Text style={styles.vendorLabel}>Choose Vendor</Text>
			<View style={{ backgroundColor: theme.primary, height: 2, width: 50 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 50,
		paddingHorizontal: 10,
		backgroundColor: "white",
		flex: 1,
	},
	walletCard: {
		padding: 20,
		borderRadius: 20,
	},
	walletLabel: {
		color: "white",
		fontWeight: "semibold",
		marginBottom: 10,
	},
	walletBalance: {
		color: "white",
		fontSize: 44,
		fontWeight: "bold",
		marginBottom: 30,
	},

	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	addFundsButton: {
		paddingHorizontal: 29,
		paddingVertical: 8,
		backgroundColor: "white",
		borderRadius: 100,
	},
	addFundsText: {
		fontSize: 16,
	},
	iconButton: {
		backgroundColor: "white",
		padding: 8,
		borderRadius: 100,
	},
	vendorLabel: {
		fontSize: 18,
		fontWeight: "semibold",
		marginTop: 50,
		marginBottom: 10,
	},
});
