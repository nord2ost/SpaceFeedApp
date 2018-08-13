import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
   'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup',
    'Module RNFetchBlob requires main queue setup',
    'Module RNDeviceInfo requires main queue setup',
]);

AppRegistry.registerComponent('SpaceFeedApp', () => App)
