import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import {
	Urbanist_300Light,
	Urbanist_400Regular,
	Urbanist_500Medium,
	Urbanist_600SemiBold,
	Urbanist_700Bold,
	Urbanist_800ExtraBold,
} from "@expo-google-fonts/urbanist";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	// const [loaded] = useFonts({
	// 	SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	if (loaded) {
	// 		SplashScreen.hideAsync();
	// 	}
	// }, [loaded]);

	// if (!loaded) {
	// 	return null;
	// }
	const [loaded] = useFonts({
		Urbanist_300Light,
		Urbanist_400Regular,
		Urbanist_500Medium,
		Urbanist_600SemiBold,
		Urbanist_700Bold,
		Urbanist_800ExtraBold,
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="(auth)/login" />
				<Stack.Screen name="(auth)/register" />
				<Stack.Screen name="(auth)/forgot-password" />
				<Stack.Screen name="+not-found" />
			</Stack>

			<StatusBar style="auto" />
		</ThemeProvider>
	);
}
