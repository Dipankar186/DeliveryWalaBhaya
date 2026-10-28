import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, borderRadius, spacing } from '../theme';

interface AppBadgeProps {
  label: string;
  variant?: 'primary' | 'white' | 'lightRed' | 'success';
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const AppBadge: React.FC<AppBadgeProps> = ({
  label,
  variant = 'lightRed',
  style,
  textStyle,
  icon,
}) => {
  const getBadgeStyle = (): ViewStyle[] => {
    const list: ViewStyle[] = [styles.container];

    switch (variant) {
      case 'primary':
        list.push(styles.variantPrimary);
        break;
      case 'white':
        list.push(styles.variantWhite);
        break;
      case 'lightRed':
        list.push(styles.variantLightRed);
        break;
      case 'success':
        list.push(styles.variantSuccess);
        break;
    }

    if (style) list.push(style);
    return list;
  };

  const getBadgeTextStyle = (): TextStyle[] => {
    const list: TextStyle[] = [styles.text];

    switch (variant) {
      case 'primary':
        list.push(styles.textPrimary);
        break;
      case 'white':
        list.push(styles.textWhite);
        break;
      case 'lightRed':
        list.push(styles.textLightRed);
        break;
      case 'success':
        list.push(styles.textSuccess);
        break;
    }

    if (textStyle) list.push(textStyle);
    return list;
  };

  return (
    <View style={getBadgeStyle()}>
      {icon ? <View style={styles.icon}>{icon}</View> : null}
      <Text style={getBadgeTextStyle()}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: spacing.xs + 1,
    paddingHorizontal: spacing.md,
    borderRadius: borderRadius.full,
  },
  icon: {
    marginRight: 6,
  },
  variantPrimary: {
    backgroundColor: colors.primary,
  },
  variantWhite: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  variantLightRed: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.borderPrimary,
  },
  variantSuccess: {
    backgroundColor: colors.successLight,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  textPrimary: {
    color: colors.white,
  },
  textWhite: {
    color: colors.primary,
  },
  textLightRed: {
    color: colors.primary,
  },
  textSuccess: {
    color: colors.success,
  },
});

