import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="(tabs)" 
        options={{
          headerTitle: "Sticker Smash",
          headerLeft: () => <></>
        }}/>
      <Tabs.Screen
         name="+not-found"
         options={{}} />
    </Tabs>
  );
}
