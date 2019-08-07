import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Start</Text>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({})

export default App
