import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  query: string
}

const Placeholder = ({ query }: Props) => {

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>We couldn't find any recipes matching these ingredients: </Text>
      <Text style={styles.query}>{query}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  heading: {
    fontSize: 22,
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  query: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 16,
  },
})

export default Placeholder
