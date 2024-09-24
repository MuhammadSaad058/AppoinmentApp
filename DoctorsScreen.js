import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useAuth } from "./AuthContext";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

// Sample doctor data
const doctors = [
  {
    id: "1",
    name: "Dr. Aaliya Y.",
    specialty: "MDS, FDS",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://media.istockphoto.com/id/1330046035/photo/headshot-portrait-of-smiling-female-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=fsNQPbmFIxoKA-PXl3G745zj7Cvr_cFIGsYknSbz_Tg=",
  },
  {
    id: "2",
    name: "Dr. Amira",
    specialty: "BDS, Dentistry",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  {
    id: "3",
    name: "Dr. Amira",
    specialty: "BDS, Dentistry",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  {
    id: "4",
    name: "Dr. Amira",
    specialty: "BDS, Dentistry",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  {
    id: "5",
    name: "Dr. Amira",
    specialty: "BDS, Dentistry",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  {
    id: "6",
    name: "Dr. Amira",
    specialty: "BDS, Dentistry",
    rating: 4.5,
    fee: "$50.99",
    imageUrl:
      "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg",
  },
  // Add more doctors as needed
];

const DoctorsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("neurolist");
  const { selectedDoctor, setSelectedDoctor } = useAuth();
  const navigation = useNavigation();

  // Handles tab selection
  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  // Handles doctor item selection
  const handleImagePress = (item) => {
    setSelectedDoctor(item);
    navigation.navigate("DoctorProfileScreen");
  };

  // Renders each doctor item in the list
  const renderDoctorItem = ({ item }) => (
    <View style={styles.doctorContainer}>
        <TouchableOpacity    onPress={() => handleImagePress(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.doctorImage} />
      </TouchableOpacity>
      <View style={styles.doctorInfo}>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>{item.rating} (2530)</Text>
        </View>
      </View>
      <View>
        <Text style={styles.doctorFee}>{`Fees ${item.fee}`}</Text>
        <TouchableOpacity
          style={styles.bookNowButton}
       
        >
          <Text style={styles.bookNowText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0X0W5XS7KgZSrtlJJqjjQXZase7RDOfdQw&s",
          }}
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Welcome Back</Text>
          <Text style={styles.userName}>Mr. Williamson</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Icon name="search" size={24} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="notifications"
              size={24}
              color="#333"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "neurolist" && styles.selectedTab,
          ]}
          onPress={() => handleTabPress("neurolist")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "neurolist" && styles.selectedTabText,
            ]}
          >
            Neurolist
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "neuromedicine" && styles.selectedTab,
          ]}
          onPress={() => handleTabPress("neuromedicine")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "neuromedicine" && styles.selectedTabText,
            ]}
          >
            Neuromedicine
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "medicine" && styles.selectedTab]}
          onPress={() => handleTabPress("medicine")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "medicine" && styles.selectedTabText,
            ]}
          >
            Medicine
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={renderDoctorItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  doctorContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    color: "#666666",
  },
  doctorFee: {
    marginBottom: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  bookNowButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  bookNowText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 16,
    justifyContent: "space-around",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  selectedTab: {
    backgroundColor: "#4CAF50",
  },
  tabText: {
    fontSize: 16,
    color: "#333",
  },
  selectedTabText: {
    color: "#FFF",
  },
});

export default DoctorsScreen;
