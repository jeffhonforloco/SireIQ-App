import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Brain, LayoutDashboard, BrainCircuit, Lightbulb, UserCircle } from 'lucide-react-native';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { StrategyScreen } from './screens/StrategyScreen';
import { TrainingScreen } from './screens/TrainingScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { AuthProvider } from '../contexts/AuthContext';
import { ROUTES } from '../utils/constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1C1C1C',
          borderTopColor: '#333',
        },
        tabBarActiveTintColor: '#06B6D4',
        tabBarInactiveTintColor: '#6B7280',
      }}
    >
      <Tab.Screen
        name={ROUTES.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => <LayoutDashboard size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.STRATEGY}
        component={StrategyScreen}
        options={{
          tabBarIcon: ({ color }) => <BrainCircuit size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.TRAINING}
        component={TrainingScreen}
        options={{
          tabBarIcon: ({ color }) => <Lightbulb size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <UserCircle size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}