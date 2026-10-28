import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { colors, borderRadius, shadows } from '../../../theme';

interface OnboardingScreenGraphicProps {
  type: 'explore' | 'speed' | 'tracking' | 'payment';
}

const { width } = Dimensions.get('window');
const CARD_SIZE = width * 0.78;

export const OnboardingScreenGraphic: React.FC<OnboardingScreenGraphicProps> = ({
  type,
}) => {
  switch (type) {
    case 'explore':
      return (
        <View style={styles.cardContainer}>
          <View style={[styles.mainHeroCircle, { backgroundColor: '#FFF0F1' }]}>
            <View style={styles.clocheIconCircle}>
              <Text style={styles.heroEmoji}>🍲</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopLeft]}>
              <Text style={styles.floatingEmoji}>🍕</Text>
              <Text style={styles.floatingText}>Hot Cheesy Pizza</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopRight]}>
              <Text style={styles.floatingEmoji}>🍗</Text>
              <Text style={styles.floatingText}>Hyderabadi Dum</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeBottomCenter]}>
              <Text style={styles.floatingEmoji}>⭐</Text>
              <Text style={styles.floatingText}>4.9 • 5000+ Restaurants</Text>
            </View>
          </View>
        </View>
      );

    case 'speed':
      return (
        <View style={styles.cardContainer}>
          <View style={[styles.mainHeroCircle, { backgroundColor: '#FFF2E5' }]}>
            <View style={[styles.clocheIconCircle, { backgroundColor: colors.primary }]}>
              <Text style={styles.heroEmoji}>🛵</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopLeft]}>
              <Text style={styles.floatingEmoji}>⚡</Text>
              <Text style={styles.floatingText}>20-30 Mins Express</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopRight]}>
              <Text style={styles.floatingEmoji}>♨️</Text>
              <Text style={styles.floatingText}>Insulated Hot Box</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeBottomCenter]}>
              <Text style={styles.floatingEmoji}>👨‍🍳</Text>
              <Text style={styles.floatingText}>DeliveryWala Bhaiya On Way</Text>
            </View>
          </View>
        </View>
      );

    case 'tracking':
      return (
        <View style={styles.cardContainer}>
          <View style={[styles.mainHeroCircle, { backgroundColor: '#EDF5FF' }]}>
            <View style={[styles.clocheIconCircle, { backgroundColor: '#1E88E5' }]}>
              <Text style={styles.heroEmoji}>📍</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopLeft]}>
              <Text style={styles.floatingEmoji}>🟢</Text>
              <Text style={styles.floatingText}>Kitchen Prepared</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopRight]}>
              <Text style={styles.floatingEmoji}>🏍️</Text>
              <Text style={styles.floatingText}>Live GPS Radar</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeBottomCenter]}>
              <Text style={styles.floatingEmoji}>⏱️</Text>
              <Text style={styles.floatingText}>Arriving in 6 mins</Text>
            </View>
          </View>
        </View>
      );

    case 'payment':
      return (
        <View style={styles.cardContainer}>
          <View style={[styles.mainHeroCircle, { backgroundColor: '#E8F8F0' }]}>
            <View style={[styles.clocheIconCircle, { backgroundColor: colors.success }]}>
              <Text style={styles.heroEmoji}>💳</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopLeft]}>
              <Text style={styles.floatingEmoji}>🏷️</Text>
              <Text style={styles.floatingText}>FLAT 50% OFF</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeTopRight]}>
              <Text style={styles.floatingEmoji}>⚡</Text>
              <Text style={styles.floatingText}>UPI & COD Available</Text>
            </View>

            <View style={[styles.floatingBadge, styles.badgeBottomCenter]}>
              <Text style={styles.floatingEmoji}>🔒</Text>
              <Text style={styles.floatingText}>100% Secure Checkout</Text>
            </View>
          </View>
        </View>
      );

    default:
      return null;
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeroCircle: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: CARD_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 8,
    borderColor: 'rgba(255, 255, 255, 0.9)',
    ...shadows.lg,
  },
  clocheIconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.primary,
  },
  heroEmoji: {
    fontSize: 48,
  },
  floatingBadge: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: borderRadius.full,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    ...shadows.md,
  },
  floatingEmoji: {
    fontSize: 14,
    marginRight: 6,
  },
  floatingText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  badgeTopLeft: {
    top: 18,
    left: -12,
  },
  badgeTopRight: {
    top: 24,
    right: -10,
  },
  badgeBottomCenter: {
    bottom: 12,
    alignSelf: 'center',
  },
});

