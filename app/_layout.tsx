import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
export { useColorScheme } from "react-native";
import { Text, View } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  //   const colorScheme = useColorScheme();
  //   const [loaded] = useFonts({
  //     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  //   });

  //   useEffect(() => {
  //     if (loaded) {
  //       SplashScreen.hideAsync();
  //     }
  //   }, [loaded]);

  //   if (!loaded) {
  //     return null;
  //   }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: true }} />
      </Stack>
    </ThemeProvider>
  );
}
