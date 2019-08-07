import React, { Fragment, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  StatusBar,
} from 'react-native'

const API_URL = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/'

interface Recipe {
  title: string,
  ingredients: string,
  thumbnail: string,
  href: string,
}

const fetchRecipes = async (ingredients: string, page: number): Promise<Recipe[]> => {
  const url = `${API_URL}?i=${ingredients}&p=${page}`
  // TODO: Error handling
  const data = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Origin: 'localhost',
    },
  })
  const json = await data.json()
  return json.results
}

type OnSubmitEvent = NativeSyntheticEvent<TextInputSubmitEditingEventData>

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const onSubmit = ({ nativeEvent: { text } }: OnSubmitEvent) => {
    fetchRecipes(text, 1).then(result => {
      setRecipes(result)
    })
  }

  console.log('Rerender', recipes)

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TextInput
            style={styles.search}
            onSubmitEditing={onSubmit}
            placeholder="onions, carrots"
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
