import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  likes:{
  	flex:1,
   justifyContent: 'flex-start',

  },
  comments:{
  	flex:1,
   justifyContent: 'center',
   alignItems: 'center'
  },
  date:{
  	flex:1,
   justifyContent: 'flex-end',
   alignItems: 'flex-end'
  }
})
