import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/screen-header";

const Statistics = () => {
  return (
    <View>
      <SafeAreaView>
        <ScreenHeader title="Statistics" />
      </SafeAreaView>
    </View>
  );
};

export default Statistics;
