import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/MessagePostStyle'
import {CachedImage} from "react-native-img-cache";
import {StatsFooter} from './StatsFooter'
import * as TimeHelper from '../Services/TimeHelper';
export class MessagePost extends Component {
  // // Prop type warnings
  static propTypes = {
  //   someProperty: PropTypes.object,
   item: PropTypes.object.isRequired,
   }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let item = this.props.item
      let userName = item.userName
      let photo = item.imageURL
      let message = item.message
    //for stats footer
    let likesCount = item.likesCount ? item.likesCount : 0
    let commentsCount = item.commentsCount ? item.commentsCount : 0
    //no date field in JSON but still let's take care of it
    let date = item.date ? item.date : new Date()
    let dateString = TimeHelper.manageTime(date)
    return (
      <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
           <CachedImage style = {styles.userPic} resizeMode = 'cover' source = {{uri:photo}} defaultSource = {require('../Images/user.png')} />
          </View>
        </View>
        <View style = {styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style = {styles.title}> {userName} </Text>
                <Text >{dateString}</Text>
            </View>
            <Text style={styles.message}>{message}</Text>
          
        </View>
      </View>
      <View style = {styles.footer}>
          <StatsFooter likesCount = {likesCount} commentsCount = {commentsCount} />
        </View>
        
      </View>
    )
  }
}