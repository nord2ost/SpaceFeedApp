import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import {CachedImage} from "react-native-img-cache";
import styles from './Styles/PhotoPostStyle'
import {StatsFooter} from './StatsFooter'


export class PhotoPost extends Component {
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
    //for stats footer
    let likesCount = item.likesCount ? item.likesCount : 0
    let commentsCount = item.commentsCount ? item.commentsCount : 0
    //no date field in JSON but still let's take care of it
    let date = item.date ? item.date : new Date()
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
          <Text style = {styles.title}> {userName} </Text>
        </View>
        <View style = {styles.body}>
          <CachedImage style = {styles.photo} resizeMode='contain' source = {{uri:photo}} defaultSource = {require('../Images/flash.png')} />
        </View>
        <View style = {styles.footer}>
          <StatsFooter likesCount = {likesCount} commentsCount = {commentsCount} date = {date}/>
        </View>
      </View>
    )
  }
}
