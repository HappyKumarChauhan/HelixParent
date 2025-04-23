import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StudentDashboardScreen from '../screens/StudentDashboardScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ActiveTestsScreen from '../screens/ActiveTestsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';


const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (
      <Tab.Navigator
        
      screenOptions={{
        headerShown: false,
        // Tab Bar Style
        tabBarStyle: { backgroundColor: '#fff', height:'7%', borderTopLeftRadius:20, borderTopRightRadius:20,borderTopWidth:2, borderTopColor:'#3B3B93', },
    
        // Active Tab Customization
        tabBarActiveTintColor: '#3B3B93', 
    
        // Inactive Tab Customization
        tabBarInactiveTintColor: 'gray',
    
        // Label Style
        tabBarShowLabel:false,
      
        tabBarItemStyle: { paddingVertical:5 },
      }}
    >
        <Tab.Screen
      name="Home"
      // component={Dashboard}
      component={StudentDashboardScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="message" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ActiveTests"
      component={ActiveTestsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="notifications" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={UpdateProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="person-outline" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
export default BottomTabs;
