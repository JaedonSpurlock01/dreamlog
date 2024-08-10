import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import React from "react";

const Welcome = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* BUTTON ACTIONS */}
          <View style={{ marginHorizontal: 30 }}>
            <Pressable
              style={{
                width: "100%",
                backgroundColor: "#AAAAAA",
                padding: 20,
                borderRadius: 10,
              }}
              onPress={() => router.push("/my-dreams")}
            >
              <Text>Enter</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
