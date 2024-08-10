import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { JournalEntry } from "../../types/journal-entry";
import { convertToReadableDate } from "../../lib/utils";
import { Divider } from "@rneui/themed";

import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import ScreenHeader from "../../components/screen-header";
import SearchInput from "../../components/inputs/search-input";
import FilterButton from "../../components/inputs/filter-button";
import { COLORS } from "../../constants/theme";

const MyDreams = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlashList
        data={journals}
        renderItem={({ item }) => <JournalEntryRow data={item} />}
        estimatedItemSize={journals.length || 0}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 15, marginBottom: 10, gap: 10 }}>
            <ScreenHeader title="My Dreams" />
            <View style={{ flexDirection: "row", gap: 4 }}>
              <SearchInput
                placeholderText="Search for journals and tags"
                placeholderTextColor="#606060"
              />
              <FilterButton />
            </View>
          </View>
        }
        ListEmptyComponent={
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "dotted",
                borderWidth: 1,
                padding: 30,
                marginTop: 20,
                width: 300,
                borderRadius: 20,
                gap: 6,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Just had a dream?
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>
                Write your first one!
              </Text>
              <MaterialCommunityIcons
                name="file-edit-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default MyDreams;

const JournalEntryRow = ({ data }: { data: JournalEntry }) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.dateDurationContainer}>
        {/* DREAM DATE */}
        <View style={styles.dateContainer}>
          <FontAwesome name="caret-right" size={16} color="black" />
          <Text style={styles.dateText}>
            {convertToReadableDate(
              data.createdAt.getDate(),
              data.createdAt.getDay(),
              data.createdAt.getFullYear()
            )}
          </Text>
        </View>

        {/* DREAM DURATION */}
        <View style={styles.durationContainer}>
          <MaterialIcons name="access-time" size={14} color="black" />
          <Text style={styles.durationText}>{data.duration}</Text>
        </View>
      </View>

      {/* JOURNAL CONTENT */}
      <View style={styles.journalContentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>

        {/* JOURNAL BODY TEXT */}
        <Text style={styles.bodyText}>{data.body}</Text>

        <Divider />

        <View style={styles.tagsContainer}>
          {/* TAGS */}
          <View style={styles.tagListContainer}>
            {data.tags?.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          {/* TYPE OF DREAM */}
          <View
            style={[
              styles.typeContainer,
              { backgroundColor: COLORS[data.type] },
            ]}
          >
            <Text style={styles.typeText}>{data.type}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const journals: JournalEntry[] = [
  {
    id: "1",
    userId: "user_01",
    title: "A Sunny Day",
    body: "The morning sun cast a golden hue over the sleepy town, gently waking its inhabitants. Birds chirped in the trees, their melodies blending with the rustle of leaves in the cool breeze. As the day began, the streets slowly filled with the sounds of life, from the distant hum of cars to the chatter of neighbors. The town, once quiet, now buzzed with the energy of a new day.",
    duration: "Medium",
    tags: ["sunny", "outdoors"],
    type: "Nightmare",
    mood: "Happy",
    createdAt: new Date("2024-08-01T10:00:00Z"),
    updatedAt: new Date("2024-08-01T10:00:00Z"),
  },
  {
    id: "2",
    userId: "user_02",
    title: "Work Stress",
    body: "Technology has revolutionized the way we live, offering conveniences that were once unimaginable. With a simple click, we can connect with people across the globe, access vast amounts of information, and perform tasks with unprecedented speed. However, this digital age also brings challenges, such as the erosion of privacy and the pressure to be constantly connected. Balancing these benefits with mindful usage is key to navigating our modern world.",
    duration: "Short",
    tags: ["work", "stress"],
    type: "Normal",
    mood: "Anxious",
    createdAt: new Date("2024-08-02T15:30:00Z"),
    updatedAt: new Date("2024-08-02T15:30:00Z"),
  },
  {
    id: "3",
    userId: "user_03",
    title: "Lucid Dream",
    body: "I had a vivid dream where I was flying. I could control my actions and it felt surreal.",
    duration: "Long",
    tags: ["dream", "flying"],
    type: "Lucid",
    mood: "Calm",
    createdAt: new Date("2024-08-03T06:45:00Z"),
    updatedAt: new Date("2024-08-03T06:45:00Z"),
  },
  {
    id: "4",
    userId: "user_01",
    title: "Recurring Nightmare",
    body: "I had the same nightmare again, where I was being chased by something unknown.",
    duration: "Short",
    tags: ["nightmare", "chase"],
    type: "Recurring",
    mood: "Anxious",
    createdAt: new Date("2024-08-04T02:15:00Z"),
    updatedAt: new Date("2024-08-04T02:15:00Z"),
  },
  {
    id: "5",
    userId: "user_04",
    title: "Lazy Afternoon",
    body: "In the heart of the forest, a hidden path wound its way through towering trees and dense undergrowth. The air was thick with the scent of pine and earth, and the only sound was the soft crunch of leaves underfoot. As one ventured deeper, the light grew dimmer, filtered through a canopy of intertwined branches. The forest, though peaceful, held an air of mystery, inviting the curious to explore further.",
    duration: "Medium",
    tags: ["relaxation", "afternoon"],
    type: "Normal",
    mood: "Calm",
    createdAt: new Date("2024-08-05T13:00:00Z"),
    updatedAt: new Date("2024-08-05T13:00:00Z"),
  },
  {
    id: "6",
    userId: "user_05",
    title: "Strange Lucid Dream",
    body: "I had a lucid dream where everything was upside down. I felt a bit disoriented.",
    duration: "Long",
    tags: ["dream", "lucid", "strange"],
    type: "Lucid",
    mood: "Confused",
    createdAt: new Date("2024-08-06T07:00:00Z"),
    updatedAt: new Date("2024-08-06T07:00:00Z"),
  },
  {
    id: "7",
    userId: "user_03",
    title: "Daydreaming",
    body: "I caught myself daydreaming about traveling to new places. It felt nice to escape reality for a bit.",
    duration: "Short",
    tags: ["daydream", "travel"],
    type: "Daydream",
    mood: "Neutral",
    createdAt: new Date("2024-08-07T11:30:00Z"),
    updatedAt: new Date("2024-08-07T11:30:00Z"),
  },
  {
    id: "8",
    userId: "user_02",
    title: "Familiar Recurring Dream",
    body: "I had a recurring dream where I was back in school. It’s strange how vivid it felt.",
    duration: "Medium",
    tags: ["recurring", "school"],
    type: "Recurring",
    mood: "Neutral",
    createdAt: new Date("2024-08-08T05:30:00Z"),
    updatedAt: new Date("2024-08-08T05:30:00Z"),
  },
  {
    id: "9",
    userId: "user_04",
    title: "Frustrating Morning",
    body: "My morning started off badly. Everything seemed to go wrong, and I felt really angry.",
    duration: "Short",
    tags: ["morning", "frustration"],
    type: "Normal",
    mood: "Angry",
    createdAt: new Date("2024-08-08T09:00:00Z"),
    updatedAt: new Date("2024-08-08T09:00:00Z"),
  },
  {
    id: "10",
    userId: "user_05",
    title: "Reflective Evening",
    body: "I spent the evening reflecting on my day. It was a mix of emotions, but I felt more at peace by the end.",
    duration: "Medium",
    tags: ["reflection", "evening"],
    type: "Normal",
    mood: "Calm",
    createdAt: new Date("2024-08-08T20:00:00Z"),
    updatedAt: new Date("2024-08-08T20:00:00Z"),
  },
];

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  flashList: {
    alignSelf: "stretch",
  },
  contentContainer: {
    paddingVertical: 40,
  },
  headerContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
    gap: 10,
  },
  searchContainer: {
    flexDirection: "row",
    gap: 4,
  },
  rowContainer: {
    alignSelf: "stretch",
    marginHorizontal: 15,
    marginVertical: 8,
    gap: 4,
  },
  dateDurationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  dateText: {
    fontSize: 14,
    fontWeight: "600",
  },
  durationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  durationText: {
    fontSize: 14,
    fontWeight: "600",
  },
  journalContentContainer: {
    alignSelf: "stretch",
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
    padding: 10,
    gap: 10,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "600",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
  },
  tagsContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  tagListContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    gap: 2,
    flexWrap: "wrap",
    flex: 1,
  },
  tag: {
    backgroundColor: "#D2D2D2",
    paddingVertical: 4,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  tagText: {
    fontWeight: "500",
  },
  typeContainer: {
    paddingVertical: 4,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  typeText: {
    fontWeight: "500",
    color: "#fff",
  },
});
