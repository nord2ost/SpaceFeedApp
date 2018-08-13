import { StackNavigator} from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'


import styles from './Styles/NavigationStyles'


// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
 
}, {
  // Default config for all screens
 
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitle: "News Feed",
   
     headerTitleStyle: styles.headerTitle,
  }
})

export default PrimaryNav
