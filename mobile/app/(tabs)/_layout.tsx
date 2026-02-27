import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import the icon library

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2563eb',
      tabBarInactiveTintColor: 'gray',
    }}>
      <Tabs.Screen 
        name='home' 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name='profile' 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
}