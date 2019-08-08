import React from 'react'
import { TouchableOpacity, FlatList, View, Image, Text, StyleSheet } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import { Recipe } from '../types'

interface Props {
  navigation: NavigationScreenProp<{}>
  recipes: Recipe[]
  onEndReached(): void
}

// NOTE: Some recipes are returned multiple times and no piece of data is unique.
// List items don't change positions so index is good enough in this scenario.
const keyExtractor = (_item: Recipe, index: number) => `${index}`

const RecipesList = ({ recipes, onEndReached, navigation }: Props) => {

  return (
    <FlatList
      data={recipes}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      contentContainerStyle={styles.flatListContent}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', { item })
          }}
        >
          <View style={styles.listItem}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ height: 56, width: 56, backgroundColor: 'gray' }}
            />
            <View style={styles.textContainer}>
              <Text numberOfLines={3} style={styles.listItemTitle}>{item.title.trim()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

const styles = StyleSheet.create({

  flatListContent: {
    paddingHorizontal: 4,
  },
  listItem: {
    height: 88,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    paddingRight: 16,
  },
  listItemTitle: {
    flex: 1,
    fontSize: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 88,
    marginLeft: 24,
  },
})

export default RecipesList
