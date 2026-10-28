import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { colors, borderRadius, spacing } from '../theme';

interface AppTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  containerStyle?: ViewStyle;
  onClear?: () => void;
  showClearButton?: boolean;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  label,
  error,
  leftComponent,
  rightComponent,
  containerStyle,
  value,
  onClear,
  showClearButton,
  onFocus,
  onBlur,
  style,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          !!error && styles.inputError,
        ]}
      >
        {leftComponent ? (
          <View style={styles.leftComponentContainer}>{leftComponent}</View>
        ) : null}

        <TextInput
          placeholderTextColor={colors.textMuted}
          style={[styles.input, style]}
          value={value}
          onFocus={e => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />

        {showClearButton && value && value.length > 0 ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onClear}
            style={styles.clearButton}
          >
            <Text style={styles.clearText}>✕</Text>
          </TouchableOpacity>
        ) : null}

        {rightComponent ? (
          <View style={styles.rightComponentContainer}>{rightComponent}</View>
        ) : null}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: spacing.md,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    height: 52,
  },
  inputFocused: {
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  inputError: {
    borderColor: colors.error,
  },
  leftComponentContainer: {
    marginRight: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightComponentContainer: {
    marginLeft: spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  clearText: {
    fontSize: 11,
    color: colors.textSecondary,
    fontWeight: '700',
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});

