import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Component/Home';
import Cart from './Component/Cart';
import Search from './Component/Search';
import Profile from './Component/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'red' },
          tabBarActiveTintColor: 'brown', 
          tabBarInactiveTintColor: 'white',
        }}>
        <Tab.Screen name="   " component={Home} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
          <FontAwesome name="home" size={25} color={color} />
          ),
        }} />
        <Tab.Screen name="    " component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }} />
        <Tab.Screen name=" " component={Cart} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cart-plus" size={25} color={color} />
          ),
        }} />
        <Tab.Screen name="  " component={Profile} options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }} />

      </Tab.Navigator>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
