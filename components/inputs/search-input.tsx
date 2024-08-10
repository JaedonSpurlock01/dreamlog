import { Ionicons } from "@expo/vector-icons";
import { Dispatch, SetStateAction } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";

import React from "react";

const SearchInput = ({
  query,
  setQuery,
  placeholderText,
  placeholderTextColor,
}: {
  query?: string;
  setQuery?: Dispatch<SetStateAction<string>>;
  placeholderTextColor: string;
  placeholderText: string;
}) => {
  return (
    <View style={styles.searchInputContainer}>
      <TouchableOpacity
        onPress={() => {
          if (query === "") return Alert.alert("Missing Query");
        }}
      >
        <Ionicons name="search" size={20} color="#707070" />
      </TouchableOpacity>

      <TextInput
        style={styles.searchInputText}
        value={query}
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        onChangeText={setQuery ? (e) => setQuery(e) : undefined}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    gap: 10,
    flex: 1,
  },
  searchInputText: {
    flex: 1,
    color: "#000000",
    fontWeight: "600",
    fontSize: 16,
  },
});
