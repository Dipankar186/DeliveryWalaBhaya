import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../../theme';
import { AppButton } from '../../../components/AppButton';
import { OnboardingScreenDots } from './OnboardingScreenDots';

interface OnboardingScreenBottomBarProps {
  total: number;
  currentIndex: number;
  onNext: () => void;
  onGetStarted: () => void;
}

export const OnboardingScreenBottomBar: React.FC<OnboardingScreenBottomBarProps> = ({
  total,
  currentIndex,
  onNext,
  onGetStarted,
}) => {
  const isLast = currentIndex === total - 1;

  return (
    <View style={styles.container}>
      <OnboardingScreenDots total={total} activeIndex={currentIndex} />

      <View style={styles.buttonWrapper}>
        {isLast ? (
          <AppButton
            title="Get Started • Order Food 🚀"
            variant="primary"
            size="lg"
            onPress={onGetStarted}
            containerStyle={styles.fullWidthButton}
          />
        ) : (
          <AppButton
            title="Next →"
            variant="primary"
            size="md"
            onPress={onNext}
            containerStyle={styles.nextButton}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingTop: spacing.sm,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    gap: spacing.lg,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  fullWidthButton: {
    width: '100%',
  },
  nextButton: {
    minWidth: 150,
  },
});

