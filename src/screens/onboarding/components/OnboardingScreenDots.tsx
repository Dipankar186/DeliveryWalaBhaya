import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, borderRadius } from '../../../theme';

interface OnboardingScreenDotsProps {
  total: number;
  activeIndex: number;
}

export const OnboardingScreenDots: React.FC<OnboardingScreenDotsProps> = ({
  total,
  activeIndex,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <View
            key={index}
            style={[
              styles.dot,
              isActive ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  dot: {
    height: 8,
    borderRadius: borderRadius.full,
  },
  activeDot: {
    width: 28,
    backgroundColor: colors.primary,
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#FFCDD2',
  },
});

