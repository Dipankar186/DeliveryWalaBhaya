import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StatusBar,
} from 'react-native';
import { colors, spacing } from '../theme';

interface AppHeaderProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightActionText?: string;
  onRightActionPress?: () => void;
  theme?: 'red' | 'white';
  containerStyle?: ViewStyle;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  showBack = false,
  onBackPress,
  rightActionText,
  onRightActionPress,
  theme = 'white',
  containerStyle,
}) => {
  const isRed = theme === 'red';

  return (
    <View
      style={[
        styles.container,
        isRed ? styles.containerRed : styles.containerWhite,
        containerStyle,
      ]}
    >
      <StatusBar barStyle={isRed ? 'light-content' : 'dark-content'} />
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onBackPress}
            style={[
              styles.iconButton,
              isRed ? styles.iconButtonRed : styles.iconButtonWhite,
            ]}
          >
            <Text style={[styles.backArrow, { color: isRed ? colors.white : colors.textPrimary }]}>
              ←
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.centerContainer}>
        {title ? (
          <Text
            numberOfLines={1}
            style={[
              styles.title,
              { color: isRed ? colors.white : colors.textPrimary },
            ]}
          >
            {title}
          </Text>
        ) : null}
        {subtitle ? (
          <Text
            numberOfLines={1}
            style={[
              styles.subtitle,
              { color: isRed ? colors.primaryLight : colors.textSecondary },
            ]}
          >
            {subtitle}
          </Text>
        ) : null}
      </View>

      <View style={styles.rightContainer}>
        {rightActionText ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onRightActionPress}
            style={[
              styles.rightButton,
              isRed ? styles.rightButtonRed : styles.rightButtonWhite,
            ]}
          >
            <Text
              style={[
                styles.rightButtonText,
                { color: isRed ? colors.white : colors.primary },
              ]}
            >
              {rightActionText}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
  },
  containerWhite: {
    backgroundColor: colors.white,
  },
  containerRed: {
    backgroundColor: colors.primary,
  },
  leftContainer: {
    width: 60,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    width: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 12,
    marginTop: 2,
  },
  iconButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonWhite: {
    backgroundColor: colors.offWhite,
  },
  iconButtonRed: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  backArrow: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  rightButton: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  rightButtonWhite: {
    backgroundColor: colors.primaryLight,
  },
  rightButtonRed: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  rightButtonText: {
    fontSize: 13,
    fontWeight: '700',
  },
});

