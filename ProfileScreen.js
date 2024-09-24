import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
    const navigation = useNavigation();
    const profileImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0X0W5XS7KgZSrtlJJqjjQXZase7RDOfdQw&s'; // Replace with the actual URL
    const familyImages = [
      { name: 'Chloe K.', imageUrl: "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg" },
      { name: 'Colter E.', imageUrl: "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg" },
      { name: 'Waylen A.', imageUrl: "https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg" },
    ];
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity  onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity>
            <MaterialIcons name="settings" size={24} color="white" />
          </TouchableOpacity>
    </View>
    <View style={styles.profileSection}>
          <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
          <Text style={styles.profileName}>Mr. Williamson</Text>
          <Text style={styles.premiumText}>Premium Member</Text>
        </View>
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <MaterialIcons name="height" size={24} color="#4f8ef7" />
            <Text style={styles.infoText}>Height</Text>
            <Text style={styles.infoValue}>5.8 in</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="fitness-center" size={24} color="#4f8ef7" />
            <Text style={styles.infoText}>Weight</Text>
            <Text style={styles.infoValue}>5.8 in</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="cake" size={24} color="#4f8ef7" />
            <Text style={styles.infoText}>Age</Text>
            <Text style={styles.infoValue}>25</Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons name="opacity" size={24} color="#4f8ef7" />
            <Text style={styles.infoText}>Blood</Text>
            <Text style={styles.infoValue}>B+</Text>
          </View>
        </View>
      <View style={styles.belowContent}>
        <Text style={styles.aboutMeTitle}>About Me</Text>
        <Text style={styles.aboutMeText}>
          Eion Morgan is a dedicated pediatrician with over 15 years of experience...
        </Text>
  
        <Text style={styles.familyTitle}>Family Member</Text>
        <View style={styles.familySection}>
          {familyImages.map((familyMember, index) => (
            <View key={index} style={styles.familyMember}>
              <Image source={{ uri: familyMember.imageUrl }} style={styles.familyImage} />
              <Text style={styles.familyName}>{familyMember.name}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.addNew}>
            <MaterialIcons name="add-circle" size={48} color="#4f8ef7" />
            <Text style={styles.familyName}>Add New</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  export default ProfileScreen;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#4f8ef7',
      height:225,
      width:'100%',
      padding:15,
      paddingBottom:95,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileSection: {
      alignItems: 'center',
      position:"absolute",
      paddingTop:160,
      marginLeft:110
    },
    profileImage: {
      width: 115,
      height: 115,
      borderRadius: 65,
    },
    editIconContainer: {
      position: 'absolute',
      right: 120,
      bottom: 20,
      backgroundColor: '#4f8ef7',
      padding: 5,
      borderRadius: 10,
    },
    profileName: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    premiumText: {
      fontSize: 16,
      color: '#f4b400',
    },
    infoSection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 10,
      paddingTop:100
    },
    infoItem: {
      alignItems: 'center',
    },
    infoText: {
      fontSize: 16,
    },
    infoValue: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    aboutMeTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    aboutMeText: {
      fontSize: 16,
      lineHeight: 24,
    },
    familyTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    familySection: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    familyMember: {
      alignItems: 'center',
    },
    familyImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    familyName: {
      fontSize: 14,
      marginTop: 5,
    },
    addNew: {
      alignItems: 'center',
    },
    belowContent:{
        padding:25,
        marginBottom:170
    }
  });
    