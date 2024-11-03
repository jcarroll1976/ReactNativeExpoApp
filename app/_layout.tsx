import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { GestureHandlerRootView, RotationGestureHandler } from "react-native-gesture-handler";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen 
          name="(tabs)" 
          options={{
            headerTitle: "Sticker Smash",
            headerShown: false
          }}/>
        
        <Stack.Screen
          name="+not-found"
        />
      </Stack>
    </>
  );
}
