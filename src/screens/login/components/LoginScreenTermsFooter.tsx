import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing } from '../../../theme';

interface LoginScreenTermsFooterProps {
  onGuestPress: () => void;
  onTermsPress: () => void;
  onPrivacyPress: () => void;
}

export const LoginScreenTermsFooter: React.FC<LoginScreenTermsFooterProps> = ({
  onGuestPress,
  onTermsPress,
  onPrivacyPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onGuestPress}
        style={styles.guestButton}
      >
        <Text style={styles.guestButtonText}>Continue as Guest →</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By continuing, you agree to our{' '}
        <Text onPress={onTermsPress} style={styles.linkText}>
          Terms of Service
        </Text>
        {' '}and{' '}
        <Text onPress={onPrivacyPress} style={styles.linkText}>
          Privacy Policy
        </Text>
        .
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  guestButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  guestButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },
  termsText: {
    fontSize: 11,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 16,
  },
  linkText: {
    color: colors.textPrimary,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

