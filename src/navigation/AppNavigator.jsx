import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from '../components/CustomDrawerContent';
import StudentDashboardScreen from '../screens/StudentDashboardScreen';
import FeeDetailsScreen from '../screens/FeeDetailsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import DownloadsScreen from '../screens/DownloadsScreen';
import TestAnalysisScreen from '../screens/TestAnalysisScreen';
import UploadVerificationScreen from '../screens/UploadVerificationScreen';
import VerificationTwoScreen from '../screens/VerificationTwoScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import OldTestsScreen from '../screens/OldTestsScreen';
import ActiveTestsScreen from '../screens/ActiveTestsScreen';
import BottomTabs from './BottomTabs';

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
      <Drawer.Screen name="Home" component={BottomTabs} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Upload" component={UploadVerificationScreen} />
      <Drawer.Screen name="Profile" component={UpdateProfileScreen} />
      <Drawer.Screen name="Fees" component={FeeDetailsScreen} />
      <Drawer.Screen name="Downloads" component={DownloadsScreen} />
      <Drawer.Screen name="TestReport" component={TestAnalysisScreen} />
      <Drawer.Screen name="VerificationTwo" component={VerificationTwoScreen} />
      <Drawer.Screen name="OldTests" component={OldTestsScreen} />
      <Drawer.Screen name="ActiveTests" component={ActiveTestsScreen} />





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