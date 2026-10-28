import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, borderRadius, spacing } from '../../../theme';

export const LoginScreenHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.curvedBg} />

      <View style={styles.brandRow}>
        <View style={styles.logoWrapper}>
          <Image
            source={require('../../../assets/images/app_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.brandTitleContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.appName}>DeliveryWala</Text>
            <View style={styles.bhayaBadge}>
              <Text style={styles.bhayaText}>BHAYA</Text>
            </View>
          </View>
          <Text style={styles.appTagline}>Hot & Fresh in 30 Mins ⚡</Text>
        </View>
      </View>

      <View style={styles.headlineWrapper}>
        <Text style={styles.headline}>Experience Food Freedom</Text>
        <Text style={styles.subheadline}>
          Enter your phone number to get OTP and enjoy daily deals up to 50% off!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.xl,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    position: 'relative',
    overflow: 'hidden',
  },
  curvedBg: {
    position: 'absolute',
    top: -50,
    right: -50,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  logoWrapper: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: colors.white,
    padding: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 13,
  },
  brandTitleContainer: {
    marginLeft: spacing.md,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    fontSize: 22,
    fontWeight: '900',
    color: colors.white,
    letterSpacing: -0.3,
  },
  bhayaBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: borderRadius.xs,
    marginLeft: 6,
  },
  bhayaText: {
    fontSize: 11,
    fontWeight: '900',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  appTagline: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFE2E5',
    marginTop: 2,
  },
  headlineWrapper: {
    marginTop: spacing.sm,
  },
  headline: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.white,
    lineHeight: 30,
    letterSpacing: -0.4,
  },
  subheadline: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    marginTop: 6,
    lineHeight: 18,
  },
});

