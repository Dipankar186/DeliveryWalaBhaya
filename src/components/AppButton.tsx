import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { colors, borderRadius, spacing, shadows } from '../theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  variant = 'primary',
  size = 'lg',
  loading = false,
  leftIcon,
  rightIcon,
  containerStyle,
  textStyle,
  disabled,
  style,
  ...rest
}) => {
  const getContainerStyle = (): ViewStyle[] => {
    const list: ViewStyle[] = [styles.base];

    if (size === 'sm') list.push(styles.sizeSm);
    else if (size === 'md') list.push(styles.sizeMd);
    else list.push(styles.sizeLg);

    switch (variant) {
      case 'primary':
        list.push(styles.primary);
        break;
      case 'secondary':
        list.push(styles.secondary);
        break;
      case 'white':
        list.push(styles.white);
        break;
      case 'outline':
        list.push(styles.outline);
        break;
      case 'ghost':
        list.push(styles.ghost);
        break;
    }

    if (disabled || loading) {
      list.push(styles.disabled);
    }

    if (containerStyle) {
      list.push(containerStyle);
    }

    return list;
  };

  const getTextStyle = (): TextStyle[] => {
    const list: TextStyle[] = [styles.baseText];

    if (size === 'sm') list.push(styles.textSm);
    else if (size === 'md') list.push(styles.textMd);
    else list.push(styles.textLg);

    switch (variant) {
      case 'primary':
        list.push(styles.textPrimary);
        break;
      case 'secondary':
        list.push(styles.textSecondary);
        break;
      case 'white':
        list.push(styles.textWhiteButton);
        break;
      case 'outline':
        list.push(styles.textOutline);
        break;
      case 'ghost':
        list.push(styles.textGhost);
        break;
    }

    if (textStyle) {
      list.push(textStyle);
    }

    return list;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      style={[getContainerStyle(), style]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? colors.white : colors.primary}
        />
      ) : (
        <View style={styles.contentRow}>
          {leftIcon ? <View style={styles.leftIconContainer}>{leftIcon}</View> : null}
          <Text style={getTextStyle()}>{title}</Text>
          {rightIcon ? <View style={styles.rightIconContainer}>{rightIcon}</View> : null}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIconContainer: {
    marginRight: spacing.sm,
  },
  rightIconContainer: {
    marginLeft: spacing.sm,
  },
  sizeSm: {
    paddingVertical: spacing.xs + 2,
    paddingHorizontal: spacing.md,
  },
  sizeMd: {
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
  },
  sizeLg: {
    paddingVertical: 14,
    paddingHorizontal: spacing.xxl,
  },
  primary: {
    backgroundColor: colors.primary,
    ...shadows.primary,
  },
  secondary: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  white: {
    backgroundColor: colors.white,
    ...shadows.md,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.55,
    shadowOpacity: 0,
    elevation: 0,
  },
  baseText: {
    fontWeight: '700',
    textAlign: 'center',
  },
  textSm: {
    fontSize: 13,
  },
  textMd: {
    fontSize: 15,
  },
  textLg: {
    fontSize: 16,
  },
  textPrimary: {
    color: colors.white,
  },
  textSecondary: {
    color: colors.primary,
  },
  textWhiteButton: {
    color: colors.primary,
  },
  textOutline: {
    color: colors.primary,
  },
  textGhost: {
    color: colors.primary,
  },
});

