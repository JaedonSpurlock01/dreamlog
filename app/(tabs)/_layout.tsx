import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../constants/theme";

import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabIconText = ({ name, focused }: { name: string; focused: boolean }) => {
  return <Text>{name}</Text>;
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.Lucid,
          tabBarStyle: {
            borderTopWidth: 1,
            borderTopColor: "#aaaaaa",
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="my-dreams"
          options={{
            title: "My Dreams",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {focused ? (
                  <MaterialCommunityIcons
                    name="notebook-edit"
                    size={24}
                    color={color}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="notebook-edit-outline"
                    size={24}
                    color={color}
                  />
                )}
                <TabIconText name="Dreams" focused={focused} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {focused ? (
                  <Ionicons name="stats-chart" size={24} color={color} />
                ) : (
                  <Ionicons
                    name="stats-chart-outline"
                    size={24}
                    color={color}
                  />
                )}
                <TabIconText name="Statistics" focused={focused} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                {focused ? (
                  <Ionicons name="settings-sharp" size={24} color={color} />
                ) : (
                  <Ionicons name="settings-outline" size={24} color={color} />
                )}
                <TabIconText name="Settings" focused={focused} />
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
