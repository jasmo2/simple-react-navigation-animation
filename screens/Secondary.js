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
export const SecondaryScreen = props => {
  return (
    <SafeAreaView style={[container, { backgroundColor: '#ecf0f1' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text style={paragraph}>Dark Screen</Text>
      <Button
        title="Back"
        onPress={() => _handleNavigation(props, 'Screen1')}
      />
    </SafeAreaView>
  );
};
