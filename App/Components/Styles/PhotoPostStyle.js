import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
     borderWidth:1
  },
  
  header:{flex:.1},

  title: {
  	flex:.1,
  	textAlign: 'center',
  	fontSize: 16,
  	fontWeight: 'bold',
  	marginVertical:4
  },
  body:{
	flex: .8
  },

  photo:{
  	flex:1,
  	aspectRatio: 1, 
  	width: Metrics.screenWidth

  },
  footer:{
  	flex:.1,
  	paddingVertical: 15
  }
})
