import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { colors, spacing } from '../../../theme';
import { AppButton } from '../../../components/AppButton';
import { AppTextInput } from '../../../components/AppTextInput';

interface LoginScreenPhoneInputProps {
  onSendOtp: (phoneNumber: string) => void;
  isLoading?: boolean;
}

export const LoginScreenPhoneInput: React.FC<LoginScreenPhoneInputProps> = ({
  onSendOtp,
  isLoading = false,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, '').slice(0, 10);
    setPhoneNumber(cleaned);
    if (errorMessage) setErrorMessage('');
  };

  const handleContinue = () => {
    Keyboard.dismiss();
    if (phoneNumber.length !== 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    onSendOtp(phoneNumber);
  };

  const isComplete = phoneNumber.length === 10;

  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter Mobile Number</Text>

      <AppTextInput
        placeholder="98765 43210"
        value={phoneNumber}
        onChangeText={handlePhoneChange}
        keyboardType="phone-pad"
        maxLength={10}
        error={errorMessage}
        showClearButton
        onClear={() => setPhoneNumber('')}
        leftComponent={
          <View style={styles.countryCodeBadge}>
            <Text style={styles.flagEmoji}>🇮🇳</Text>
            <Text style={styles.countryCodeText}>+91</Text>
            <Text style={styles.dropdownChevron}>▾</Text>
          </View>
        }
      />

      <AppButton
        title={isComplete ? 'Continue & Send OTP →' : 'Continue with Phone'}
        variant="primary"
        size="lg"
        loading={isLoading}
        disabled={!isComplete}
        onPress={handleContinue}
        containerStyle={styles.continueButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: spacing.lg,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  countryCodeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spacing.sm,
    borderRightWidth: 1.5,
    borderRightColor: colors.border,
    marginRight: 4,
  },
  flagEmoji: {
    fontSize: 18,
    marginRight: 4,
  },
  countryCodeText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  dropdownChevron: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 3,
  },
  continueButton: {
    marginTop: spacing.xs,
    width: '100%',
  },
});

