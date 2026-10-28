import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, ROUTES } from './routes';
import { SplashScreen } from '../screens/splash/SplashScreen';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { LoginScreen } from '../screens/login/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.SPLASH}
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name={ROUTES.SPLASH} component={SplashScreen} />
        <Stack.Screen
          name={ROUTES.ONBOARDING}
          component={OnboardingScreen}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={LoginScreen}
          options={{ animation: 'slide_from_bottom' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
