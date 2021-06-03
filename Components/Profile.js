import React from 'react'
import {View,StyleSheet,TextInput,Text,Image, ImageBackground,Button, SafeAreaView,ScrollView,TouchableOpacity} from 'react-native'
import {AnimatedCircularProgress} from 'react-native-circular-progress'
import {connect} from 'react-redux'
import moment from 'moment'

class Profile extends React.Component {

    constructor(props) {
        super(props)

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

    

    render() {
        objectifs=this.props.objectifs
        objectifsSemaine=this.props.objectifsSemaine

        return(
            <SafeAreaView style={styles.main}>
                <View style={styles.main_header}>
                    <Text style={styles.titre}>Profil</Text>
                    <TouchableOpacity
                    onPress={()=>console.log(moment(new Date("2021-05-25")).isoWeek())}
                    style={styles.réglage}>
                        <Image
                            style={styles.réglage_image}
                            source={require('../Images/menus/reglage.png')} />
                    </TouchableOpacity>

                </View>
                <ScrollView style={styles.main_container}>
                    <View style={styles.block}>
                        <Text style={styles.titre_block}>Aujourd'hui</Text>
                        <Text style={{textAlign:'center',fontSize:20,color:'#FFFFFF'}}>{objectifs.nombreTrajets}{'\n trajets'}</Text>
                        <AnimatedCircularProgress
                            size={120}
                            style={styles.graph}
                            width={15}
                            fill={100*objectifs.distanceJour/20}
                            rotation={0}
                            lineCap={'round'}
                            arcSweepAngle={360}
                            duration={1000}
                            tintColor="#00B0F0"
                            backgroundColor="#FFFFFF" >
                            {(fill)=>(<Text>{objectifs.distanceJour}/20 km</Text>)}
                        </AnimatedCircularProgress>
                        {this._displayPollution(objectifs.moyPol)}


                    </View>
                    <View style={styles.block}>
                    <Text style={styles.titre_block}>Cette Semaine</Text>
                        <Text style={{textAlign:'center',fontSize:20,color:'#FFFFFF'}}>{objectifsSemaine.nombreTrajets}{'\n trajets'}</Text>
                        <AnimatedCircularProgress
                            size={120}
                            style={styles.graph}
                            width={15}
                            fill={100*objectifsSemaine.distanceJour/150}
                            rotation={0}
                            lineCap={'round'}
                            arcSweepAngle={360}
                            duration={1000}
                            tintColor="#00B0F0"
                            backgroundColor="#FFFFFF" >
                            {(fill)=>(<Text>{objectifsSemaine.distanceJour}/150 km</Text>)}
                        </AnimatedCircularProgress>
                        {this._displayPollution(objectifsSemaine.moyPol)}
                        


                    </View>
                    <View style={styles.block}>
                        <Text style={styles.titre_block}>Bilan</Text>
                        


                    </View>

                </ScrollView>
                
                
            </SafeAreaView>
        )
    }
}

styles=StyleSheet.create({
    main_header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'grey'
    },
    réglage_image:{
        width:40,
        height:40,
    },
    main:{
        
    },
    titre:{
        fontSize:20,
        paddingLeft:10,
        fontWeight:'bold'
    },
    block:{

        backgroundColor:'#87CD94',
        margin:10,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,

    },
    main_container:{
        
    },
    pollution:{
        color:'#FFFFFF',
        fontWeight:'bold',
        fontSize:20
    },
    image_pollution:{
        width:100,
        height:90,
        justifyContent:'center',
        alignItems:'center',
    },
    titre_block:{
        position:'absolute',
        top:5,
        left:5,
        fontSize:20,
        fontWeight:'bold'

    },
    graph:{
        
    }
    
    
})

const mapStateToProps = (state) => {
    return {
      objectifs: state.objectifs,
      objectifsSemaine : state.objectifsSemaine
    }
  }

export default connect(mapStateToProps)(Profile)