import React, { Fragment, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
} from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

import RecipesList from '../components/RecipesList'
import Placeholder from '../components/Placeholder'

import { fetchRecipes } from '../api'
import variables from '../variables'
import { Recipe } from '../types'

interface Props extends NavigationScreenProps { }

const byTitle = (recipe1: Recipe, recipe2: Recipe) => recipe1.title.localeCompare(recipe2.title)

const HomeScreen = ({ navigation }: Props) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [lastPage, setLastPage] = useState(1)
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const onSubmit = async () => {
    const result = await fetchRecipes(query, 1)
    if (result.length !== 0) {
      setRecipes(result.sort(byTitle))
      setLastPage(1)
    } else {
      setError('EMPTY')
    }
  }

  const loadMoreRecipes = async () => {
    const result = await fetchRecipes(query, lastPage + 1)
    setRecipes(savedRecipes => [...savedRecipes, ...result.sort(byTitle)])
    setLastPage(page => page + 1)
  }

  const onChangeText = (text: string) => {
    if (error === 'EMPTY') {
      setError('')
    }
    setQuery(text)
  }

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            onSubmitEditing={onSubmit}
            placeholder="onions, carrots"
            placeholderTextColor="gray"
            selectionColor={variables.primaryColor}
            returnKeyType="search"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            autoFocus={true}
            value={query}
            onChangeText={onChangeText}
          />
        </View>
        {error === 'EMPTY' ? (
          <Placeholder query={query} />
        ) : (
          <RecipesList recipes={recipes} navigation={navigation} onEndReached={loadMoreRecipes} />
        )}
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
  },
  search: {
    fontSize: 16,
    borderWidth: StyleSheet.hairlineWidth,
    height: 40,
    paddingHorizontal: 16,
  },
})

export default HomeScreen
