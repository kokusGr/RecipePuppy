import React, { Fragment } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.search}
            onSubmitEditing={() => {
              Alert.alert('On submit editing')
            }}
            placeholder="onion, carrot"
            placeholderTextColor="gray"
            selectionColor="green"
            returnKeyType="search"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            autoFocus={true}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 20,
  },
  search: {
    fontSize: 16,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
  },
})

export default App
