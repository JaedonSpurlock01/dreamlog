import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ScreenHeader from "../../components/screen-header";

const Settings = () => {
  return (
    <SafeAreaView>
      <ScreenHeader title="Settings" />
    </SafeAreaView>
  );
};

export default Settings;
