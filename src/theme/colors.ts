/**
 * Application Color Palette
 * DeliveryWala Bhaya - Zomato-inspired Red & White Theme
 * 70% Red & 30% White balanced design tokens
 */

export const colors = {
  // Brand Reds (70% dominance in accents, headers, hero components & splash)
  primary: '#E23744',
  primaryDark: '#B81D29',
  primaryLight: '#FFF0F1',
  primaryMuted: '#FFCDD2',
  primarySoft: '#FFECEF',
  primaryHover: '#D32431',

  // Brand Whites & Backgrounds (30% balance for readability & clean breathing space)
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceVariant: '#FFF8F8',
  background: '#FFFFFF',
  cardBackground: '#FFFFFF',

  // Neutrals & Text
  textPrimary: '#1E1E24',
  textSecondary: '#686B78',
  textMuted: '#9E9E9E',
  textLight: '#BDBDBD',
  textWhite: '#FFFFFF',

  // Borders & Dividers
  border: '#EEEEEE',
  borderLight: '#F3F4F6',
  borderPrimary: '#FFD4D7',

  // Accents & Status
  success: '#10B981',
  successLight: '#E8F5E9',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  error: '#EF4444',
  rating: '#0F8A65',
  gold: '#FBBF24',

  // Shadows & Overlays
  overlay: 'rgba(0, 0, 0, 0.45)',
  overlayRed: 'rgba(226, 55, 68, 0.12)',
  shadow: '#000000',
};

export type ColorsType = typeof colors;

