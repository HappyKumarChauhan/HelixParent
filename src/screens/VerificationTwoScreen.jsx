import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const VerificationTwoScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                  <Icon name="menu" size={28} color="white" />
                </TouchableOpacity>
        {/* <Icon name="menu" size={30} color="#fff" style={styles.menuIcon} /> */}
        <Text style={styles.headerTitle}>Welcome Back</Text>
        <Text style={styles.userName}>ADAA DESWAL!!</Text>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} style={styles.avatar} />
      </View>

      {/* Form Section */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Your Detail Information</Text>

        <Text style={styles.label}>First Name:</Text>
        <TextInput style={styles.input} placeholder="First Name" value="ADAA DESWAL" />

        <Text style={styles.label}>Last Name:</Text>
        <TextInput style={styles.input} placeholder="Last Name" />

        <Text style={styles.label}>Email Address:</Text>
        <Text style={styles.errorText}>(Enter your correct email address)</Text>
        <TextInput style={styles.input} placeholder="Email" value="ADAADESWAL@GMAIL.COM" />

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyText}>Verify your Email Address with OTP</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Mobile Number:</Text>
        <Text style={styles.errorText}>(Enter your correct mobile number)</Text>
        <TextInput style={styles.input} placeholder="Mobile Number" value="7696474742" keyboardType="numeric" />

        <TouchableOpacity style={styles.verifyButton}>
          <Text style={styles.verifyText}>Verify your Mobile Number with OTP</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor:'#3B3B93',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  menuIcon: {
    position: 'absolute',
    left: 15,
    top: 20,
  },
  headerTitle: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:70
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatar: {
    position: 'absolute',
    right: 15,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
  },
  verifyButton: {
    backgroundColor: '#FFD601',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  verifyText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default VerificationTwoScreen;
