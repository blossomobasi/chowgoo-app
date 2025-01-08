import ChowLogo from "@/components/ChowLogo";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View, Pressable, useColorScheme } from "react-native";
import Text from "@/components/ui/Text";
import { currencyFormatter } from "@/utils";

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];
	const WALLET_BALANCE = 165400;

	return (
		<View style={styles.container}>
			<ChowLogo />

			<View style={[styles.walletCard, { backgroundColor: theme.primary }]}>
				<Text variant="medium" style={styles.walletLabel}>
					Total Balance
				</Text>
				<Text variant="semiBold" style={styles.walletBalance}>
					{currencyFormatter(WALLET_BALANCE)}
				</Text>

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
		fontFamily: "Urbanist_500Medium",
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
