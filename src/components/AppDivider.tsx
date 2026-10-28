import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing } from '../theme';

interface AppDividerProps {
  text?: string;
  style?: ViewStyle;
}

export const AppDivider: React.FC<AppDividerProps> = ({ text, style }) => {
  if (!text) {
    return <View style={[styles.simpleLine, style]} />;
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.lg,
    width: '100%',
  },
  simpleLine: {
    height: 1,
    backgroundColor: colors.border,
    width: '100%',
    marginVertical: spacing.md,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border,
  },
  text: {
    paddingHorizontal: spacing.md,
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});

