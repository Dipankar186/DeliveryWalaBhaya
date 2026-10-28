import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, borderRadius, spacing } from '../../../theme';
import { AppDivider } from '../../../components/AppDivider';

interface LoginScreenSocialButtonsProps {
  onGooglePress: () => void;
  onEmailPress: () => void;
}

export const LoginScreenSocialButtons: React.FC<LoginScreenSocialButtonsProps> = ({
  onGooglePress,
  onEmailPress,
}) => {
  return (
    <View style={styles.container}>
      <AppDivider text="or continue with" />

      <View style={styles.buttonsRow}>
        {/* Google Card */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.socialCard}
          onPress={onGooglePress}
        >
          <View style={styles.iconCircle}>
            <Text style={styles.googleG}>G</Text>
          </View>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>

        {/* Email Card */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.socialCard}
          onPress={onEmailPress}
        >
          <View style={[styles.iconCircle, { backgroundColor: '#F0F0F0' }]}>
            <Text style={styles.mailIcon}>✉️</Text>
          </View>
          <Text style={styles.socialText}>Email ID</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: spacing.sm,
  },
  buttonsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  socialCard: {
    flex: 1,
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#FFE8E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  googleG: {
    fontSize: 16,
    fontWeight: '900',
    color: colors.primary,
  },
  mailIcon: {
    fontSize: 14,
  },
  socialText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});

