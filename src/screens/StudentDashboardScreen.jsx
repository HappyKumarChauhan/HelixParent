import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StudentDashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
        <Icon name="menu" size={28} color="#fff" /></TouchableOpacity>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Icon name="account-circle" size={28} color="#FFD700" />
      </View>

      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="history" size={30} color="#000" />
          <Text>Old Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="check-circle" size={30} color="#000" />
          <Text>Active Tests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="download" size={30} color="#000" />
          <Text>Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gridItem}>
          <Icon name="person" size={30} color="#000" />
          <Text>Update Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
        <View>
          <Text style={styles.profileName}>Adaa Deswal</Text>
          <Text style={styles.profileSubText}>Verify Email And Mobile No.</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details</Text>
        <View style={styles.detailItem}>
          <Text>Full Name:</Text>
          <Text>Adaa Deswal</Text>
        </View>
        <View style={styles.detailItem}>
          <Text>Father Name:</Text>
          <Text>Adaa Deswal</Text>
        </View>
        <View style={styles.detailItem}>
          <Text>Student ID:</Text>
          <Text>29843</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      backgroundColor: 'rgba(59, 59, 147, 1)',
    },
    headerText: {
      color: '#FFD700',
      fontSize: 18,
    },
    gridContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      marginVertical: 20,
    },
    gridItem: {
      alignItems: 'center',
      backgroundColor: '#FFD700',
      padding: 20,
      borderRadius: 10,
      width: '40%',
      margin: 5,
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
      marginHorizontal: 10,
      borderRadius: 10,
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    profileName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    profileSubText: {
      fontSize: 12,
      color: 'gray',
    },
    detailsContainer: {
      backgroundColor: '#fff',
      margin: 10,
      padding: 15,
      borderRadius: 10,
    },
    detailsTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10,
    },
    detailItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
  });

export default StudentDashboardScreen;
