import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ROUTES } from '../../navigation/routes';
import { colors } from '../../theme';
import { SplashScreenLogo } from './components/SplashScreenLogo';
import { SplashScreenFooter } from './components/SplashScreenFooter';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

const { width } = Dimensions.get('window');

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(ROUTES.ONBOARDING);
    }, 2600);

    return () => clearTimeout(timer);
  }, [navigation]);

  const handlePressToContinue = () => {
    navigation.replace(ROUTES.ONBOARDING);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePressToContinue}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      {/* Decorative Aura Shapes */}
      <View style={styles.topCurvedBackdrop} />
      <View style={styles.bottomAccentCircle} />

      <View style={styles.content}>
        <SplashScreenLogo />
      </View>

      <SplashScreenFooter />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'space-between',
    position: 'relative',
    overflow: 'hidden',
  },
  topCurvedBackdrop: {
    position: 'absolute',
    top: -width * 0.4,
    left: -width * 0.2,
    width: width * 1.4,
    height: width * 1.4,
    borderRadius: (width * 1.4) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  bottomAccentCircle: {
    position: 'absolute',
    bottom: -80,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

