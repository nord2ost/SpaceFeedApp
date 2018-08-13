import React from 'react'
import { View, Text, FlatList, SegmentedControlIOS } from 'react-native'
import { connect } from 'react-redux'


import {MessagePost} from '../Components/MessagePost.js'
import {PhotoPost} from '../Components/PhotoPost.js'

import HomeActions from '../Redux/HomeRedux'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/HomeScreenStyle'

class HomeScreen extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/

  constructor(props){
  super(props),
  this.state = {
    
  }
  }

  componentDidMount(){
    this.props.feedRequest()
  }
  

   

  renderRow ({item}) {

    let type = item.type
      if (type == 'messagePost') {
       
        return (
          <View style={styles.row}>
              <MessagePost item = {item} />
          </View>
          )
      }else if (type == 'photoPost') {
          return (
            <View style={styles.row}>
              <PhotoPost item = {item} />
          </View>
            )
  }
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Header - </Text>

  // Render a footer?
  renderFooter = () =>
    <Text style={[styles.label, styles.sectionHeader]}> - Footer - </Text>

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () =>
    <Text style={styles.label}> - ~~~~~ - </Text>

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index.toString();

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}
  
  //filter data for segment view
    segmentFilter = (segmentId, feedData) => {
      if (segmentId == 1){
      return feedData.filter( (obj) => (obj.type == "photoPost") )
    }else if(segmentId ==2){
      return feedData.filter( (obj) => (obj.type == "messagePost") )
    }else{
      return feedData
    }
    }



  render () {

    let segmentId =this.props.segment
    let feedData = this.props.feedData ? this.props.feedData : []
    let filteredData = this.segmentFilter(segmentId, feedData)
    return (
      <View style={styles.container}>
      
        
        <SegmentedControlIOS
          values={['All', 'Photos', 'Messages']}
          selectedIndex={segmentId}
          onChange={(event) => {

            this.props.feedChange(event.nativeEvent.selectedSegmentIndex);
          }}/>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={filteredData}// ? this.props.feedData.items: [] }
          renderItem={this.renderRow}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}/>
          
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
    feedData: state.home.feedData,
    fetching: state.home.fetching,
    segment: state.home.segment
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    feedRequest: (data) =>dispatch(HomeActions.feedRequest(data)),
    feedChange: (data) =>dispatch(HomeActions.feedChange(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
