import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import StudentDashboardScreen from '../screens/StudentDashboardScreen';
import FeeDetailsScreen from '../screens/FeeDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Drawer = createDrawerNavigator();

const UploadScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Upload Verification</Text>
  </View>
);
const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Profile Screen</Text>
  </View>
);


const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: '80%',
        },
      }}
    >
      <Drawer.Screen name="Home" component={StudentDashboardScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Upload" component={UploadScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Fees" component={FeeDetailsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
const styles=StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
})