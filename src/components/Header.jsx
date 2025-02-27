import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Row: Menu and Profile Icons */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} 
          style={styles.profileIcon} 
        />
      </View>

      {/* Title Positioned at the Bottom Center */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3B3B93',
    paddingVertical: 20,
    paddingBottom: 20, 
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'relative',
    // justifyContent: 'flex-start'
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom:90
  },
  titleContainer: {
    position: 'absolute',
    bottom: 45, 
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  }
});

export default Header;
