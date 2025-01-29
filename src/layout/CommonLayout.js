import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Color, FontSize} from '../constants/style';
import {wp} from '../utils/utils';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../components/Header';

const CommonLayout = ({
  children,
  heading,
  disablScrollView,
  search,
  setSearchQuery,
}) => {
  useLayoutEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
    StatusBar.setHidden(false);
    StatusBar.setBarStyle('light-content');
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Header
        heading={heading}
        search={search}
        setSearchQuery={setSearchQuery}
      />
      {disablScrollView ? (
        children
      ) : (
        <KeyboardAwareScrollView
          extraHeight={10}
          enableOnAndroid
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.mainContent}>
          {children}
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default CommonLayout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },
  mainContent: {padding: wp(5)},
});
