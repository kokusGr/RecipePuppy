import { AppRegistry } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import { HomeScreen, DetailsScreen } from './screens'
import variables from './variables'

const navigator = createStackNavigator(
{
    Home: HomeScreen,
    Details: DetailsScreen,
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        title: 'RecipesPuppy',
        headerStyle: {
            backgroundColor: variables.primaryColor,
        },
        headerTintColor: '#FFF',
    },
})

const AppContainer = createAppContainer(navigator)

AppRegistry.registerComponent('iFM', () => AppContainer)
