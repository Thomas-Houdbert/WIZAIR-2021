import React from 'react'
import {Text,View,Image,StyleSheet} from 'react-native'
import moment from 'moment'

class Test extends React.Component {


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
            <Image
            source={url}
            style={styles.image_pollution}
            />
        )
    }

    render(){
        console.log(this.props)
        const {activité} = this.props
        return(
            <View style={styles.main_container}>
                <View style={styles.left_container}>
                    <Text>{activité.id}</Text>
                    <Text style={styles.date}>{moment(new Date(activité.date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.distance}>{activité.distance}</Text>
                    <Text style={styles.speed}>{activité.average_speed}</Text>
                </View>
                <View style={styles.right_container}>
                    {this._displayPollution(activité.average_pollution)}
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    main_container:{
        flexDirection:'row',
        flex:1
    },
    left_container:{
        flex:1
    },
    right_container:{
        flex:1
    }
})

export default Test