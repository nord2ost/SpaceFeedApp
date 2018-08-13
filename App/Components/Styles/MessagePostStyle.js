import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
     borderWidth:1
  },
  body: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer:{
  	flex:.4,
  	
  	padding:10,
   alignItems: 'center',
justifyContent: 'center'},

  
  imageContainer:{
  	flex:1,
  	alignItems:'center',
  	justifyContent:'center'
  },
 userPic:{
  	
  	
  	width:100,
  	height:100,
  	borderRadius: 50,
  	

  },
  mainContainer:{
  	flex:.8,
 
},
   titleContainer:{
   	flex:.1,
   	flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
   },
  title: {
  	flex:1,
  	textAlign: 'left',
  	fontSize: 16,
  	fontWeight: 'bold',
  	marginVertical:4
  },
  message: {
  	textAlign: 'left'
  }, 


 
  footer:{
  	flex:.1,
  	paddingVertical: 15
  }
})
