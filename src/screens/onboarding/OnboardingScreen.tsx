import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ROUTES } from '../../navigation/routes';
import { ONBOARDING_DATA } from '../../constants/OnboardingData';
import { colors } from '../../theme';
import { AppHeader } from '../../components/AppHeader';
import { OnboardingScreenCard } from './components/OnboardingScreenCard';
import { OnboardingScreenBottomBar } from './components/OnboardingScreenBottomBar';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

const { width } = Dimensions.get('window');

export const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    if (index !== currentIndex && index >= 0 && index < ONBOARDING_DATA.length) {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const handleSkipOrComplete = () => {
    navigation.replace(ROUTES.LOGIN);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      {/* Header with Skip button */}
      <AppHeader
        title="DeliveryWala Bhaya"
        subtitle="Your Express Food Partner"
        theme="white"
        rightActionText={currentIndex < ONBOARDING_DATA.length - 1 ? 'Skip' : undefined}
        onRightActionPress={handleSkipOrComplete}
      />

      {/* Background Accent */}
      <View style={styles.backgroundAccent} />

      {/* Horizontal Carousel */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_DATA}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <OnboardingScreenCard item={item} />}
        bounces={false}
      />

      {/* Bottom Controls */}
      <OnboardingScreenBottomBar
        total={ONBOARDING_DATA.length}
        currentIndex={currentIndex}
        onNext={handleNext}
        onGetStarted={handleSkipOrComplete}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
    position: 'relative',
  },
  backgroundAccent: {
    position: 'absolute',
    top: 56,
    left: 0,
    right: 0,
    height: 240,
    backgroundColor: '#FFF2F3',
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    zIndex: -1,
  },
});

