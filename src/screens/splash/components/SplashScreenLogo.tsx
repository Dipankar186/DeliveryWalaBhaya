import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';
import { colors, borderRadius, spacing } from '../../../theme';

export const SplashScreenLogo: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const textTranslateY = useRef(new Animated.Value(20)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(textTranslateY, {
        toValue: 0,
        friction: 6,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.04,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, [scaleAnim, opacityAnim, textTranslateY, pulseAnim]);

  return (
    <View style={styles.container}>
      {/* Decorative Aura Rings */}
      <View style={styles.outerRing}>
        <View style={styles.middleRing}>
          <Animated.View
            style={[
              styles.logoWrapper,
              {
                opacity: opacityAnim,
                transform: [
                  { scale: Animated.multiply(scaleAnim, pulseAnim) },
                ],
              },
            ]}
          >
            <Image
              source={require('../../../assets/images/app_logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </View>

      {/* Brand Title & Tagline */}
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: opacityAnim,
            transform: [{ translateY: textTranslateY }],
          },
        ]}
      >
        <View style={styles.titleRow}>
          <Text style={styles.titleWhite}>DeliveryWala</Text>
          <View style={styles.bhayaBadge}>
            <Text style={styles.bhayaText}>BHAYA</Text>
          </View>
        </View>

        <Text style={styles.tagline}>Bhookh Lagi? Bhaiya Hai Na! 🚀</Text>
        <Text style={styles.subTagline}>Fastest Food Delivery • 100% Fresh & Hot</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerRing: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleRing: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    width: 140,
    height: 140,
    borderRadius: 36,
    backgroundColor: colors.white,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 12,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWhite: {
    fontSize: 32,
    fontWeight: '900',
    color: colors.white,
    letterSpacing: -0.5,
  },
  bhayaBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: borderRadius.sm,
    marginLeft: 8,
  },
  bhayaText: {
    fontSize: 14,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFE2E5',
    marginTop: spacing.sm,
    letterSpacing: 0.2,
  },
  subTagline: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
  },
});

