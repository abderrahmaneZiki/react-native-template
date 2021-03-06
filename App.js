/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar, View} from 'react-native';
import Route from '@navigations/route';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" hidden />
      <Route />
    </>
  );
}
