/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';

import {ThemeProvider} from '@rneui/themed';
import RETheme from './src/theme';
import StackNavigator from './src/navigations';

function App() {
  return (
    <>
      <ThemeProvider theme={RETheme}>
        <StackNavigator />
      </ThemeProvider>
    </>
  );
}

export default App;
