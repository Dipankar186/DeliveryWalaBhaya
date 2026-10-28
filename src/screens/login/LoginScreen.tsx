import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { colors, spacing } from '../../theme';
import { LoginScreenHeader } from './components/LoginScreenHeader';
import { LoginScreenPhoneInput } from './components/LoginScreenPhoneInput';
import { LoginScreenSocialButtons } from './components/LoginScreenSocialButtons';
import { LoginScreenTermsFooter } from './components/LoginScreenTermsFooter';

export const LoginScreen: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleSendOtp = (phone: string) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'OTP Sent Successfully! 🚀',
        `A 6-digit verification code has been sent to +91 ${phone}.\n\nWelcome to DeliveryWala Bhaya!`,
        [{ text: 'Great, Enter OTP' }]
      );
    }, 900);
  };

  const handleGoogleLogin = () => {
    Alert.alert('Google Sign-In', 'Connecting to Google Authentication...');
  };

  const handleEmailLogin = () => {
    Alert.alert('Email Login', 'Redirecting to Email / Password authentication...');
  };

  const handleGuestMode = () => {
    Alert.alert(
      'Welcome Guest! 🍕',
      'You are now browsing local restaurants as a Guest. Sign in anytime at checkout to earn rewards!'
    );
  };

  const handleTerms = () => {
    Alert.alert('Terms of Service', 'DeliveryWala Bhaya Terms & Service agreement.');
  };

  const handlePrivacy = () => {
    Alert.alert('Privacy Policy', 'DeliveryWala Bhaya Privacy & Data Security policy.');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar barStyle="light-content" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* 70% Red Dominance Header Banner */}
        <LoginScreenHeader />

        {/* 30% White Body Area */}
        <View style={styles.body}>
          <LoginScreenPhoneInput
            onSendOtp={handleSendOtp}
            isLoading={loading}
          />

          <LoginScreenSocialButtons
            onGooglePress={handleGoogleLogin}
            onEmailPress={handleEmailLogin}
          />

          <LoginScreenTermsFooter
            onGuestPress={handleGuestMode}
            onTermsPress={handleTerms}
            onPrivacyPress={handlePrivacy}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
  },
});

