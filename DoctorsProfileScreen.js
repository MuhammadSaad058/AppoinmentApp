import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useAuth } from "./AuthContext";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const DoctorProfileScreen = () => {
    const { selectedDoctor, setSelectedDoctor } = useAuth();
    const navigation = useNavigation();

    if (!selectedDoctor) {
        return (
            <View style={styles.container}>
                <Text>No doctor selected</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
           
            <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()} >
            <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.doctorInfoContainer}>
                <Image 
                    source={{ uri: selectedDoctor.imageUrl }} 
                    style={styles.doctorImage} 
                />
                <View style={styles.doctorTextContainer}>
                    <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
                    <Text style={styles.doctorSpecialty}>{selectedDoctor.specialty}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.rating}>⭐ 4.5</Text>
                        <Text style={styles.reviews}>(2530)</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        <Text style={styles.tag}>Neurologist</Text>
                        <Text style={styles.tag}>Neuromedicine</Text>
                        <Text style={styles.tag}>Medicine</Text>
                    </View>
                </View>
            </View>
      <View style={styles.biographyContainer}>
        <Text style={styles.biographyTitle}>Doctor Biography</Text>
        <Text style={styles.biographyText}>
          Eion Morgan is a dedicated pediatrician with over 15 years of experience in caring for children's health. She is passionate about ensuring the well-being of your little ones and believes in a holistic approach.
        </Text>
      </View>

      {/* Schedules */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Schedules</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Oct 2023 ⌄</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {['15', '16', '17', '18', '19', '20'].map((date) => (
            <TouchableOpacity key={date} style={styles.dateBox}>
              <Text style={styles.dateText}>{date}</Text>
              <Text style={styles.dayText}>Mon</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Choose Times */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Choose Times</Text>
      </View>

      <View style={styles.timeOfDayContainer}>
        <TouchableOpacity style={styles.timeOfDayButton}>
          <Text style={styles.timeOfDayText}>Morning</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.timeOfDayButton, styles.selectedTimeOfDay]}>
          <Text style={[styles.timeOfDayText, styles.selectedTimeOfDayText]}>Afternoon</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timeOfDayButton}>
          <Text style={styles.timeOfDayText}>Evening</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.timeSlotsContainer}>
        {['09-10 AM', '10-11 AM', '11-12 AM', '12-01 PM'].map((timeSlot) => (
          <TouchableOpacity key={timeSlot} style={styles.timeSlot}>
            <Text style={styles.timeSlotText}>{timeSlot}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Book Appointment Button */}
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Appointment ($50.99)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    paddingTop: 40,
    paddingLeft:15
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  doctorInfoContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  doctorSpecialty: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 16,
    color: '#ffaa00',
  },
  reviews: {
    marginLeft: 5,
    fontSize: 16,
    color: '#666',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#e0f7fa',
    color: '#00796b',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 8,
    fontSize: 14,
  },
  biographyContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  biographyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  biographyText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAll: {
    color: '#00aaff',
    fontSize: 14,
  },
  scheduleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  dateBox: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#00796b',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
  },
  timeOfDayContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  timeOfDayButton: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  timeOfDayText: {
    fontSize: 16,
    color: '#00796b',
  },
  selectedTimeOfDay: {
    backgroundColor: '#00aaff',
  },
  selectedTimeOfDayText: {
    color: '#fff',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  timeSlot: {
    backgroundColor: '#e0f7fa',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  timeSlotText: {
    fontSize: 16,
    color: '#00796b',
  },
  bookButton: {
    backgroundColor: '#00796b',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default DoctorProfileScreen;
