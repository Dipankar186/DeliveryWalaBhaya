import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { OnboardingSlideItem } from '../../../constants/OnboardingData';
import { colors, borderRadius, spacing } from '../../../theme';
import { AppBadge } from '../../../components/AppBadge';
import { OnboardingScreenGraphic } from './OnboardingScreenGraphic';

const { width } = Dimensions.get('window');

interface OnboardingScreenCardProps {
  item: OnboardingSlideItem;
}

export const OnboardingScreenCard: React.FC<OnboardingScreenCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* Top Visual Graphic */}
      <View style={styles.graphicContainer}>
        <OnboardingScreenGraphic type={item.illustrationType} />
      </View>

      {/* Slide Details Card */}
      <View style={styles.contentContainer}>
        <View style={styles.badgeRow}>
          <AppBadge label={item.badge} variant="lightRed" />
          <Text style={styles.stepText}>{item.stepNumber}</Text>
        </View>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Feature Highlights */}
        <View style={styles.pillsContainer}>
          {item.featureHighlights.map((feat, index) => (
            <View key={index} style={styles.pillItem}>
              <Text style={styles.pillDot}>•</Text>
              <Text style={styles.pillText}>{feat}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
  },
  graphicContainer: {
    height: 310,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.borderLight,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
    marginBottom: spacing.lg,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  stepText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textPrimary,
    lineHeight: 28,
    marginBottom: spacing.sm,
    letterSpacing: -0.3,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 21,
    fontWeight: '400',
    marginBottom: spacing.md,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
    paddingTop: spacing.md,
  },
  pillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: borderRadius.full,
  },
  pillDot: {
    color: colors.primary,
    fontWeight: '900',
    marginRight: 4,
    fontSize: 14,
  },
  pillText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primaryDark,
  },
});

