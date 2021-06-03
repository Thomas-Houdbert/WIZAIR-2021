import React from 'react'
import {View,StyleSheet,TextInput,Text,Image, ImageBackground,Button,ScrollView, TouchableOpacity,Alert} from 'react-native'
import moment from 'moment'
import {connect} from 'react-redux'

class ActivityDetail extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const activité =navigation.state.params.activité
        const {params} = navigation.state
        return {
            headerRight: () => <TouchableOpacity
            style={styles.share_touchable_headerrightbutton}>
            <Image
              style={styles.share_image}
              source={require('../Images/ic_share.ios.png')} />
          </TouchableOpacity>,
            title:moment(new Date(activité.date)).format('DD/MM/YYYY')
            
        }
      }
    
      _displayPollution(pollutionLevel){
        var url = require('../Images/Pollution/rouge.png')
        if(pollutionLevel<2.5){
            url=require('../Images/Pollution/vert.png')

        }
        else if(pollutionLevel<5){
            url=require('../Images/Pollution/jaune.png')
        }
        else if(pollutionLevel<7.5){
            url=require('../Images/Pollution/orange.png')
        }
        return(
            <ImageBackground
            source={url}
            style={styles.image_pollution}
            >
                <Text style={styles.pollution}>{pollutionLevel}</Text>
            </ImageBackground>
        )
    }

    _alerteDelete() {
      Alert.alert(
        "Voulez vous vraiment supprimer ?",
        "",
        [
          {
            text: "Non",
            style: "cancel"
          },
          { text: "Oui", onPress: () => this._delete() }
        ]
      )


    
    }
    _delete() {
      const activité =this.props.navigation.state.params.activité
      const action = {type:'DELETE_ACTIVITY', value:activité}
      this.props.dispatch(action)
      this.props.navigation.navigate('Acceuil')
    }
    
    render() {
        const activité =this.props.navigation.state.params.activité
        return(
            <ScrollView style={styles.main_container}>
              <View style={styles.header}>
                <Text style={styles.text}>{activité.distance} km</Text>
                <Text style={styles.text}>{activité.duration} min</Text>
                <Text style={styles.text}>{activité.average_speed} km/h</Text>
              </View>
              <View style={styles.header}>
                <Text style={styles.text}>min:{activité.min_pollution}</Text>
                {this._displayPollution(activité.average_pollution)}
                <Text style={styles.text}>max:{activité.max_pollution}</Text>

              </View>
              <View style={styles.map}>

              </View>
              <View style={styles.desc}>
                <Text style={styles.text}>{activité.desc}</Text>
              </View>
              <Button
              title={"supprimer"}
              onPress={()=>this._alerteDelete()}
              />
              
              
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    main_container:{
      backgroundColor:'#fdfdfe'
      

    },
    header:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:20,
      marginLeft:10,
      marginRight:10,
      alignItems:'center',
      borderRadius:10,
      backgroundColor:'#87CD94'
    },
    text:{
      fontSize:25,
      textAlign:'justify',
      color:'#FFFFFF'
      

    },
    pollution:{
      color:'#FFFFFF',
      fontWeight:'bold',
      fontSize:20
    },
    image_pollution:{
      width:120,
      height:110,
      justifyContent:'center',
      alignItems:'center'
    },
    map:{
      marginTop:20,
      marginLeft:10,
      marginRight:10,
      borderRadius:10,
      height:400,
      backgroundColor:'#87CD94'

    },
    desc:{
      marginTop:20,
      marginLeft:10,
      marginRight:10,
      borderRadius:10,
      padding:10,
      backgroundColor:'#87CD94'
    },
    share_touchable_floatingactionbutton: {
      position: 'absolute',
      width: 60,
      height: 60,
      right: 30,
      bottom: 30,
      borderRadius: 30,
      backgroundColor: '#e91e63',
      justifyContent: 'center',
      alignItems: 'center'
    },
    share_image: {
      width: 30,
      height: 30
    },
})


const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(ActivityDetail)