import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'; // Using your custom header
import HeaderSecondary from '../components/HeadeSecondary';

const StudentDashboardScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Custom Header */}
      <HeaderSecondary />

      {/* Overlapping Section */}
      <View style={styles.overlappingSection}>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="history" size={30} color="blue" />
            <Text style={styles.gridText}>Old Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="check-circle" size={30} color="blue" />
            <Text style={styles.gridText}>Active Tests</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="download" size={30} color="blue" />
            <Text style={styles.gridText}>Downloads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <Icon name="person" size={30} color="blue" />
            <Text style={styles.gridText}>Update Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Adjust spacing after overlapping section */}
        <View style={{ height: 100 }} />

        {/* Verify Email & Mobile Section */}
        <TouchableOpacity style={styles.verifyContainer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} style={styles.avatar} />
          <View style={styles.verifyTextContainer}>
            <Text style={styles.profileName}>Adaa Deswal</Text>
            <Text style={styles.profileSubText}>Verify Email And Mobile No.</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={30} color="#FFD601" />
        </TouchableOpacity>

        {/* Details Section */}
        <View style={styles.detailsContainer}>
          <TouchableOpacity style={styles.detailsHeader}>
            <Text style={styles.detailsTitle}>Details</Text>
            <Icon name="keyboard-arrow-down" size={24} color="#000" />
          </TouchableOpacity>
          <View style={styles.detailItem}>
            <Text style={styles.LabelText}>Full Name:</Text>
            <Text>Adaa Deswal</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.LabelText}>Father Name:</Text>
            <Text>Adaa Deswal</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.LabelText}>Student ID:</Text>
            <Text>29843</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.LabelText}>Batch Name:</Text>
            <Text>HMC-6(20)-24</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.LabelText}>Courier Adderess:</Text>
            <Text>Adaa Deswal</Text>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  overlappingSection: {
    position: 'absolute',
    top: 150, // Adjust based on header height
    left: 20,
    right: 20,
    zIndex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderRadius: 15,
    elevation: 5,
  },
  gridItem: {
    alignItems: 'center',
    backgroundColor: '#FFF8DC',
    paddingVertical: 40,
    borderRadius: 10,
    width: '45%',
    marginVertical: 5,
    borderBottomColor:'#FFD601',
    borderBottomWidth:3,
  },
  gridText: {
    marginTop: 5,
    fontWeight: 'bold',
    color:'blue'
  },
  verifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    paddingVertical: 25,
    paddingHorizontal:15,
    marginTop: 200,
    borderBottomColor:'#FFD601',
    borderBottomWidth:3,
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
    paddingVertical:30
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal:10,
    borderBottomWidth: 1,
    borderBottomColor:'#FFD601',
    opacity:0.7
  },
  LabelText:{
    fontWeight:'bold'
  }
});

export default StudentDashboardScreen;
