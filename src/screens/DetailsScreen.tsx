import React from 'react'
import { View, Text, Image, StyleSheet, Button, Alert, Linking } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface Props extends NavigationScreenProps {}

const DetailsScreen = ({ navigation }: Props) => {
  const recipe = navigation.getParam('item')

  const openRecipeUrl = () => {
    Linking.openURL(recipe.href).catch(() => {
      Alert.alert('Sorry, there was a problem opening recipe :(')
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: recipe.thumbnail }} style={styles.image} />
      </View>
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.ingredients}>{recipe.ingredients}</Text>
      <Button title="Find out more" onPress={openRecipeUrl} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  ingredients: {
    fontSize: 14,
    color: 'gray',
  }
})

export default DetailsScreen
