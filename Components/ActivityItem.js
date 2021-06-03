import React from 'react'
import {Text,View,Image,StyleSheet,Dimensions, ImageBackground,TouchableOpacity} from 'react-native'
import moment from 'moment'

class ActivityItem extends React.Component {


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

    render() {
        const {activité,displayActivityDetail}=this.props
        return(
            <TouchableOpacity style={styles.main_container} onPress={()=>displayActivityDetail(activité)}>
                <View style={styles.left_container}>
                    <Text style={styles.date}>{moment(new Date(activité.date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.distance}>{activité.distance} km</Text>
                    <Text style={styles.speed}>{activité.average_speed} km/h</Text>
                </View>
                <View style={styles.right_container}>
                    <Text style={styles.indic}>{'>'}</Text>
                    {this._displayPollution(activité.average_pollution)}

                </View>

            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        width:Dimensions.get('window').width-20,
        backgroundColor:'#87CD94',
        borderRadius:20
    },
    left_container:{
        marginLeft:20
        

    },
    right_container:{
        marginRight:20,

    },
    image_pollution:{
        width:100,
        height:90,
        justifyContent:'center',
        alignItems:'center'
    },
    date:{
        color:'#FFFFFF',
        fontSize:25,
        fontWeight:'bold',
        paddingTop:5,
        

    },
    speed:{
        fontSize:20

    },
    distance:{
        fontSize:20,


    },
    pollution:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:20
    },
    indic:{
        position:'absolute',
        top:5,
        right:0
    }

})

export default ActivityItem