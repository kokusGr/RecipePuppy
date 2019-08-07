import { AppRegistry } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { HomeScreen } from './screens'

const navigator = createStackNavigator({
    Home: HomeScreen,
})

const AppContainer = createAppContainer(navigator)


AppRegistry.registerComponent('iFM', () => AppContainer)
