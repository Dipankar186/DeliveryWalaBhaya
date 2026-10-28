import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, spacing } from '../../../theme';

export const SplashScreenFooter: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color={colors.white} style={styles.loader} />
      <Text style={styles.countryNote}>Crafted with ❤️ for Food Lovers</Text>
      <Text style={styles.version}>v1.0.0 • 100% Contactless Delivery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: spacing.xxl,
  },
  loader: {
    marginBottom: spacing.md,
  },
  countryNote: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
    letterSpacing: 0.3,
  },
  version: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 4,
  },
});

