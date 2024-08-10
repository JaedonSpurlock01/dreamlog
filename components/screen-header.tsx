import { Avatar } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

const ScreenHeader = ({ title }: { title: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>{title}</Text>
      <Avatar
        rounded
        source={{ uri: "https://thispersondoesnotexist.com/" }}
        size={"medium"}
      />
    </View>
  );
};

export default ScreenHeader;
