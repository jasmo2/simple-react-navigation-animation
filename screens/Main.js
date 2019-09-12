import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Button,
  Platform,
} from 'react-native';
import { _handleNavigation } from '../utils/utils';
import styles from '../styles/common';
const { container, paragraph } = styles;

const isAndroid = Platform.OS === 'android';
export const MainScreen = props => {
  return (
    <SafeAreaView style={[container, { backgroundColor: '#6a51ae' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={[paragraph, { color: '#fff' }]}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => _handleNavigation(props, 'Screen2')}
        color={isAndroid ? 'blue' : '#fff'}
      />
    </SafeAreaView>
  );
};
