import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/StatsFooterStyle'
import * as TimeHelper from '../Services/TimeHelper';

export  class StatsFooter extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  

  render () {
    let likesCount = this.props.likesCount > 0 ? '❤️ '+this.props.likesCount : ''
    let commentsCount = this.props.commentsCount > 0 ? '💬 '+ this.props.commentsCount : ''
    let date = this.props.date 
    let dateString = date ? TimeHelper.manageTime(date) : ''
    return (
      <View style={styles.container}>
        <View style = {styles.likes}><Text>{likesCount}</Text></View>
        <View style = {styles.comments}><Text>{commentsCount}</Text></View>
        <View style = {styles.date}><Text>{dateString}</Text></View>
      </View>
    )
  }
}
