import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    id: "1",
    name: "Neurology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJEz5J3UQDDPJJr7_o8q7g_nBH_Tl8nyf2Q&s",
  },
  {
    id: "2",
    name: "Cardiology",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/553/256/non_2x/heartbeat-cardiology-medical-and-health-care-line-style-icon-free-vector.jpg",
  },
  {
    id: "3",
    name: "Orthopedics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qB5MU4l6tGh1762ipuHJc-TUsuaHawOHkw&s",
  },
  {
    id: "4",
    name: "Pathology",
    image:
      "https://media.istockphoto.com/id/1161093132/vector/pathologist-biochemist.jpg?s=612x612&w=0&k=20&c=sDXb1H1QfzOO3q2_p-sPq5fph9wiRjaso4glHwqtTXM=",
  },
  {
    id: "5",
    name: "Neurology",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJEz5J3UQDDPJJr7_o8q7g_nBH_Tl8nyf2Q&s",
  },
  {
    id: "6",
    name: "Cardiology",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/553/256/non_2x/heartbeat-cardiology-medical-and-health-care-line-style-icon-free-vector.jpg",
  },
  {
    id: "7",
    name: "Orthopedics",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qB5MU4l6tGh1762ipuHJc-TUsuaHawOHkw&s",
  },
  {
    id: "8",
    name: "Pathology",
    image:
      "https://media.istockphoto.com/id/1161093132/vector/pathologist-biochemist.jpg?s=612x612&w=0&k=20&c=sDXb1H1QfzOO3q2_p-sPq5fph9wiRjaso4glHwqtTXM=",
  },
];

const AppointmentApp = () => {
  const navigation = useNavigation();
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity  onPress={() => navigation.navigate('ProfileScreen')}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0X0W5XS7KgZSrtlJJqjjQXZase7RDOfdQw&s",
          }}
          style={styles.profileImage}
        />
         </TouchableOpacity>
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

      <View style={styles.banner}>
        <ImageBackground
          source={{
            uri: "https://www.shutterstock.com/image-photo/middle-aged-male-doctor-grey-600nw-2118807320.jpg",
          }}
          style={styles.backgroundImage}
        >
          <View style={styles.TextBCK}>
            <Text style={styles.bannerText}>Looking for</Text>
            <Text style={styles.bannerText}>desired doctor?</Text>
            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchButtonText}>Search for</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      {/* Find Your Doctor */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Find your doctor</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categories}
      />

      {/* Popular Doctors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Doctors</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.doctorCard}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1311511363/photo/headshot-portrait-of-smiling-male-doctor-with-tablet.jpg?s=612x612&w=0&k=20&c=w5TecWtlA_ZHRpfGh20II-nq5AvnhpFu6BfOfMHuLMA=",
          }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Chloe Kelly</Text>
          <Text style={styles.doctorSpecialty}>M.Ch (Neuro)</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ 4.5</Text>
            <Text style={styles.reviews}>(2530)</Text>
          </View>
        </View>
        <View style={styles.feesContainer}>
          <Text style={styles.fees}>Fees $50.99</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.doctorCard}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/id/1330046035/photo/headshot-portrait-of-smiling-female-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=fsNQPbmFIxoKA-PXl3G745zj7Cvr_cFIGsYknSbz_Tg=",
          }}
          style={styles.doctorImage}
        />
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>Lauren Hemp</Text>
          <Text style={styles.doctorSpecialty}>Spinal Surgery</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ 4.5</Text>
            <Text style={styles.reviews}>(2530)</Text>
          </View>
        </View>
        <View style={styles.feesContainer}>
          <Text style={styles.fees}>Fees $50.99</Text>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 25,
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
  banner: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden", // Ensures the border radius is applied to the background image
    height: 200, // Set a specific height
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  bannerText: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  searchButton: {
    width: 95,
    height: 40,
    backgroundColor: "#00aaff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  searchButtonText: {
    color: "#fff",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 15,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  seeAll: {
    color: "#00aaff",
    fontSize: 14,
  },
  categories: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15, // Space between items
  },
  categoryIcon: {
    width: 70,
    height: 70,
    borderRadius: 40,
    alignContent: "center",
  },
  categoryText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
  },
  doctorCard: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  doctorInfo: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: "#ffaa00",
  },
  reviews: {
    marginLeft: 5,
    fontSize: 14,
    color: "#666",
  },
  feesContainer: {
    alignItems: "flex-end",
  },
  fees: {
    fontSize: 14,
    color: "#00aaff",
  },
  bookButton: {
    backgroundColor: "#00aaff",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 5,
  },
  bookButtonText: {
    color: "#fff",
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navIconCenter: {
    width: 50,
    height: 50,
  },
  TextBCK: {
    paddingRight: 200,
    paddingTop: 10,
  },
});

export default AppointmentApp;
