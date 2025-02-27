import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'; // Using your custom header

const StudentDashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <Header title="Welcome Back" />

      {/* Overlapping Section */}
      <View style={styles.overlappingSection}>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="history" size={30} color="#000" />
            <Text style={styles.gridText}>Old Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="check-circle" size={30} color="#000" />
            <Text style={styles.gridText}>Active Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="download" size={30} color="#000" />
            <Text style={styles.gridText}>Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="person" size={30} color="#000" />
            <Text style={styles.gridText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Verify Email & Mobile Section */}
      <TouchableOpacity style={styles.verifyContainer}>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
        <View style={styles.verifyTextContainer}>
          <Text style={styles.profileName}>Adaa Deswal</Text>
          <Text style={styles.profileSubText}>Verify Email And Mobile No.</Text>
        </View>
        <Icon name="keyboard-arrow-right" size={24} color="#000" />
      </TouchableOpacity>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <TouchableOpacity style={styles.detailsHeader}>
          <Text style={styles.detailsTitle}>Details</Text>
          <Icon name="keyboard-arrow-down" size={24} color="#000" />
        </TouchableOpacity>
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
    backgroundColor: '#F8F8F8',
  },
  overlappingSection: {
    position: 'absolute',
    top: 120, // Adjust according to header height
    left: 20,
    right: 20,
    zIndex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 5,
  },
  gridItem: {
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    marginVertical: 5,
    
  },
  gridText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  verifyContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: 220,
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  verifyTextContainer: {
    flex: 1,
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
    margin: 20,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default StudentDashboardScreen;
