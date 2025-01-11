import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "@/components/ui/Text";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
				tabBarStyle: styles.tabBar,
				tabBarItemStyle: styles.tabBarItem,
				tabBarActiveBackgroundColor: "white",
				tabBarBackground: () => <View style={[styles.background, { backgroundColor: theme.primary }]} />,
				tabBarLabel: () => null,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ focused }) => (
						<View style={[styles.tabItemContainer, focused && { backgroundColor: "white" }]}>
							<IconSymbol size={28} name="house.fill" color={focused ? theme.primary : "white"} />
							{focused && (
								<Text variant="semiBold" style={{ color: theme.primary }}>
									Home
								</Text>
							)}
						</View>
					),
				}}
			/>

			<Tabs.Screen
				name="search"
				options={{
					title: "Search",
					tabBarIcon: ({ focused }) => (
						<View style={[styles.tabItemContainer, focused && { backgroundColor: "white" }]}>
							<IconSymbol size={28} name="magnifyingglass.circle.fill" color={focused ? theme.primary : "white"} />
							{focused && (
								<Text variant="semiBold" style={{ color: theme.primary }}>
									Search
								</Text>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="percent"
				options={{
					title: "Percent",
					tabBarIcon: ({ focused }) => (
						<View style={[styles.tabItemContainer, focused && { backgroundColor: "white" }]}>
							<IconSymbol size={28} name="percent.ar" color={focused ? theme.primary : "white"} />
							{focused && (
								<Text variant="semiBold" style={{ color: theme.primary }}>
									Percent
								</Text>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="cart"
				options={{
					title: "Cart",
					tabBarIcon: ({ focused }) => (
						<View style={[styles.tabItemContainer, focused && { backgroundColor: "white" }]}>
							<IconSymbol size={28} name="cart.fill" color={focused ? theme.primary : "white"} />
							{focused && (
								<Text variant="semiBold" style={{ color: theme.primary }}>
									Cart
								</Text>
							)}
						</View>
					),
				}}
			/>
			<Tabs.Screen
				name="user-settings"
				options={{
					title: "User-settings",
					tabBarIcon: ({ focused }) => (
						<View style={[styles.tabItemContainer, focused && { backgroundColor: "white" }]}>
							<IconSymbol size={28} name="person.2.circle.fill" color={focused ? theme.primary : "white"} />
							{focused && (
								<Text variant="semiBold" style={{ color: theme.primary }}>
									Account
								</Text>
							)}
						</View>
					),
				}}
			/>
		</Tabs>
	);
}

const styles = StyleSheet.create({
	tabBar: {
		position: "absolute",
		bottom: 5,
		marginHorizontal: 10,
		elevation: 0,
		height: 60,
		backgroundColor: "transparent",
	},
	background: {
		position: "absolute",
		height: "100%",
		width: "100%",
		borderRadius: 30,
	},
	tabBarItem: {
		borderRadius: 30,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	tabItemContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
		overflow: "hidden",
		width: 100,
		height: 40,
	},
});
