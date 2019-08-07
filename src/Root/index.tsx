import React, { Fragment, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  NativeSyntheticEvent,
  StatusBar,
  FlatList,
} from 'react-native'

const API_URL = 'https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/'

interface Recipe {
  title: string,
  ingredients: string,
  thumbnail: string,
  href: string,
}

const keyExtractor = (item: Recipe) => item.href

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

const fakeData = [{title: "Magic  Prime Rib Recipe", href: "http://www.recipezaar.com/Magic-Prime-Rib-Recipe-126865", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/350074.jpg"},
{title: "Wild Ginger's Seven Flavor Beef", href: "http://www.recipezaar.com/Wild-Gingers-Seven-Flavor-Beef-236899", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/349520.jpg"},
{title: "Shepherds Pie Vintage Recipe Clipping Recipe", href: "http://www.grouprecipes.com/44811/shepherds-pie-vintage-recipe-clipping.html", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/251328.jpg"},
{title: "Gracie Allens Classic Recipe For Roast Beef Recipe", href: "http://www.grouprecipes.com/44954/gracie-allens-classic-recipe-for-roast-beef.html", ingredients: "beef, beef", thumbnail: "http://img.recipepuppy.com/257630.jpg"},
{title: "Shortcut BBQ Brisket", href: "http://www.chow.com/recipes/10630", ingredients: "beef, beef", thumbnail: "http://img.recipepuppy.com/502065.jpg"},
{title: "Thai-Style Melon & Beef Salad", href: "http://www.eatingwell.com/recipes/thai_melon_beef_salad.html", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/691764.jpg"},
{title: "Moroccan Vegetable Soup (Chorba)", href: "http://www.eatingwell.com/recipes/moroccan_vegetable_soup.html", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/696530.jpg"},
{title: "↵Beef Jerky Recipe↵↵", href: "http://cookeatshare.com/recipes/beef-jerky-25384", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/708722.jpg"},
{title: "Grilled Flank Steak With Pebre", href: "http://www.recipezaar.com/grilled-flank-steak-with-pebre-378533", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/716734.jpg"},
{title: "↵Dried Beef Cheese Ball Recipe↵↵", href: "http://cookeatshare.com/recipes/dried-beef-cheese-ball-28184", ingredients: "beef", thumbnail: "http://img.recipepuppy.com/774441.jpg"}]

const App = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const onSubmit = ({ nativeEvent: { text } }: OnSubmitEvent) => {
    // fetchRecipes(text, 1).then(result => {
    //   setRecipes(result)
    // })
    setRecipes(fakeData)
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
          <FlatList
            data={recipes}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <View style={{ height: 64, width: 64, backgroundColor: 'red' }} />
                <Text numberOfLines={3} style={styles.listItemTitle}>{item.title}</Text>
              </View>
            )}
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
    paddingHorizontal: 4,
    paddingTop: 20,
  },
  search: {
    fontSize: 16,
    borderWidth: 1,
    height: 40,
    paddingHorizontal: 16,
  },
  listItem: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingRight: 16,
  },
  listItemTitle: {
    flex: 1,
    fontSize: 14,
    paddingLeft: 8,
  },
})

export default App
