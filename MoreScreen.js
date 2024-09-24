import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const menuItems = [
    { id: '1', title: 'General Settings', icon: 'settings' },
    { id: '2', title: 'Payments History', icon: 'payment' },
    { id: '3', title: 'Frequently Asked Question', icon: 'help-outline' },
    { id: '4', title: 'Favourite Doctors', icon: 'favorite-border' },
    { id: '5', title: 'Test Reports', icon: 'assignment' },
    { id: '6', title: 'Terms & Conditions', icon: 'description' },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.menuItemContainer}>
      <MaterialIcons name={item.icon} size={24} color="#4f8ef7" />
      <Text style={styles.menuItemText}>{item.title}</Text>
    </View>
  );
  const MoreScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0X0W5XS7KgZSrtlJJqjjQXZase7RDOfdQw&s' }}
            style={styles.profileImage}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.nameText}>More</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity>
              <MaterialIcons name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationIcon}>
              <MaterialIcons name="notifications-none" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={menuItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  };
  
  export default MoreScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop:25
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#f9f9f9',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    headerTextContainer: {
      flex: 1,
      marginLeft: 10,
    },
    welcomeText: {
      fontSize: 14,
      color: '#777',
    },
    nameText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    headerIcons: {
      flexDirection: 'row',
    },
    notificationIcon: {
      marginLeft: 15,
    },
    listContainer: {
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    menuItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#f9f9f9',
      borderRadius: 10,
      marginBottom: 25,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    menuItemText: {
      marginLeft: 15,
      fontSize: 16,
      color: '#333',
    },
  });
  
      