import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Book, CircleUser, Heart, House } from "@tamagui/lucide-icons";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Card } from "tamagui";

// Custom plus button component
function PlusButton() {
  const router = useRouter();

  return (
    <Card
      bg="$purple9"
      position="absolute"
      top={-20}
      borderColor="$purple9"
      borderRadius="$10"
      width={60}
      height={60}
      alignSelf="center"
    >
      <Pressable
        onPress={() => router.push("/new-entry")}
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          styles.plusButtonInner,
        ]}
      >
        <IconSymbol size={24} name="plus" color="white" />
      </Pressable>
    </Card>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "#e1e1e1",
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House size={28} />,
        }}
      />

      <Tabs.Screen
        name="entries"
        options={{
          title: "Entries",
          tabBarIcon: ({ color }) => <Book size={28} />,
        }}
      />

      {/* Center Plus Button */}
      <Tabs.Screen
        name="journal"
        options={{
          title: "",
          tabBarIcon: () => <PlusButton />,
          tabBarButton: () => <PlusButton />,
        }}
      />

      <Tabs.Screen
        name="ai-chat"
        options={{
          title: "AI Chat",
          tabBarIcon: ({ color }) => <Heart size={28} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <CircleUser size={28} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  plusButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
