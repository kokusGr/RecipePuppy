import React from 'react'
import renderer from 'react-test-renderer'

import Placeholder from './Placeholder'

it('matches snapshot', () => {
    const tree = renderer.create(<Placeholder query="test" />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders message with query', () => {
    const tree = renderer.create(<Placeholder query="test" />)
    expect(tree.root.findByProps({ testID: 'query' }).props.children).toEqual('test')
})
