import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const notifications = [
  {
    id: "1",
    title: "Appointment Update",
    icon: "event-note",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "2",
    title: "Credit Card Connected",
    icon: "credit-card",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "3",
    title: "New Services Available",
    icon: "new-releases",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "4",
    title: "Rescheduled",
    icon: "event-repeat",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "5",
    title: "Appointment Update",
    icon: "event-note",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "6",
    title: "New Service Available",
    icon: "new-releases",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
  {
    id: "7",
    title: "Appointment Success",
    icon: "check-circle",
    description:
      "Eion Morgan is a dedicated pediatrician with over 15 years...",
    time: "Just Now",
  },
];
const renderItem = ({ item }) => (
  <View style={styles.notificationContainer}>
    <MaterialIcons name={item.icon} size={24} color="#4f8ef7" />
    <View style={styles.notificationTextContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
    </View>
    <Text style={styles.notificationTime}>{item.time}</Text>
  </View>
);
const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default NotificationsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    justifyContent:"center"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",

  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  notificationTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationDescription: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: "#bbb",
  },
});
