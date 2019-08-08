// @ts-nocheck
import React from 'react'
import renderer from 'react-test-renderer'
import { TouchableOpacity } from 'react-native';
import RecipesList from './RecipesList'

const recipes = [{
    title: 'Some title',
    href: 'https://someurl.com',
    ingredients: 'onions, carrot',
    thumbnail: 'https://someimage.com',
}]

it('matches snapshot', () => {
    const tree = renderer.create(<RecipesList recipes={recipes}/>).toJSON()
    expect(tree).toMatchSnapshot()
})

it('navigates to Details with recipe', () => {
    const navigation = {
        navigate: jest.fn(),
    }

    const tree = renderer.create(<RecipesList recipes={recipes} navigation={navigation} />)
    tree.root.findByType(TouchableOpacity).props.onPress()
    expect(navigation.navigate).toHaveBeenCalledTimes(1)
    expect(navigation.navigate).toBeCalledWith('Details', { item: recipes[0] })
})
