import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  const menuItems = [
    { name: 'Student Dashboard', icon: 'dashboard', screen: 'Home' },
    { name: 'Message', icon: 'message', screen: 'Messages' },
    { name: 'Upload Verification', icon: 'verified', screen: 'Upload' },
    { name: 'Update Profile', icon: 'account-circle', screen: 'Profile' },
    { name: 'Fee Details', icon: 'payment', screen: 'Fees' },
    { name: 'Active Tests', icon: 'assignment', screen: 'ActiveTests' },
    { name: 'Old Tests', icon: 'history', screen: 'OldTests' },
    { name: 'Test Analysis Report', icon: 'bar-chart', screen: 'TestReport' },
    { name: 'Downloads', icon: 'download', screen: 'Downloads' },
    { name: 'Live Class Calendar', icon: 'event', screen: 'Calendar' },
    { name: 'Lectures', icon: 'video-library', screen: 'Lectures' },
    { name: 'View Website', icon: 'visibility', screen: 'Website' },
  ];

  return (
    <View style={styles.drawerContainer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.instituteName}>M.L. Syal's</Text>
        <Text style={styles.instituteTitle}>HELIX INSTITUTE</Text>
        <Text style={styles.instituteTagline}>Institute for Medical Entrance Exams</Text>
      </View>
      <DrawerContentScrollView {...props} >
        {menuItems.map((item) => (
          <Pressable
            key={item.screen}
            style={({ pressed }) => [
              styles.menuItem,
              pressed && { backgroundColor: '#ffffff20' },
            ]}
            onPress={() => props.navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={24} color="#fff" />
            <Text style={styles.menuText}>{item.name}</Text>
          </Pressable>
        ))}
      </DrawerContentScrollView>
      <Pressable style={styles.logoutButton}>
        <Icon name="logout" size={24} color="#fff" />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerContent

const styles = StyleSheet.create({
    drawerContainer: {
      flex: 1,
      backgroundColor: 'rgba(59, 59, 147, 1)',
    },
    drawerHeader: {
      padding: 30,
      borderBottomWidth: 1,
      borderBottomColor: '#ffffff40',
    },
    instituteName: {
      color: 'rgba(236, 47, 52, 1)',
      fontSize: 16,
      fontWeight: 'bold',
    },
    instituteTitle: {
      color: 'rgba(255, 214, 1, 1)',
      fontSize: 20,
      fontWeight: 'bold',
    },
    instituteTagline: {
      color: 'rgba(236, 47, 52, 1)',
      fontWeight:'bold',
      fontSize: 12,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal:20,
    },
    menuText: {
      fontSize: 15,
      fontWeight:500,
      marginLeft: 20,
      color: 'rgba(245, 245, 250, 1)',
    },
    logoutButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderTopWidth: 1,
      borderTopColor: '#ffffff40',
    },
    logoutText: {
      fontSize: 16,
      marginLeft: 20,
      color: '#fff',
    },
  });