import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import React from "react";

const FilterButton = () => {
  return (
    <View style={styles.filterButtonContainer}>
      <TouchableOpacity>
        <Ionicons name="filter" size={20} color="#707070" />
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filterButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
});
