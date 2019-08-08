import { AppRegistry } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { HomeScreen, DetailsScreen } from './screens'

const navigator = createStackNavigator(
{
    Home: HomeScreen,
    Details: DetailsScreen,
},
{
    initialRouteName: 'Home',
})

const AppContainer = createAppContainer(navigator)

AppRegistry.registerComponent('iFM', () => AppContainer)
