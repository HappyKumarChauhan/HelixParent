import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderSecondary = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Row: Menu and Profile Icons */}
      <View style={styles.header}>
                     <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
                         <Icon name="menu" size={30} color="white" />
                     </TouchableOpacity>
                     <Text style={styles.headerTitle}>Welcome Back</Text>
                     <Text style={styles.userName}>ADAA DESWAL!!</Text>
                     <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }} style={styles.avatar} />
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
  header: {
    backgroundColor: '#3B3B93',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
},
menuIcon: {
    position: 'absolute',
    left: 15,
    top: 1,
},
headerTitle: {
    color: '#FFC107',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 50,
},
userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:50,
},
avatar: {
    position: 'absolute',
    right: 15,
    top: 1,
    width: 35,
    height: 35,
    borderRadius: 20,
},
});

export default HeaderSecondary;
