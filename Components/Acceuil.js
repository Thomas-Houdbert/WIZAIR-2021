import React from 'react'
import {View,StyleSheet,TextInput,Text,Image, ImageBackground,Button,SafeAreaView,Dimensions,FlatList, TouchableOpacity, Alert} from 'react-native'
import ActivityItem from './ActivityItem'
import dataActivity from '../Helpers/testDatas'
import Test from './Test'
import {connect} from 'react-redux'


class Acceuil extends React.Component {
    constructor(props){
        super(props)

    }

    _newActivité(){
        this.props.navigation.navigate('NewActivity')
    }

    _displayActivityDetail = (activity) =>{
        this.props.navigation.navigate('ActivityDetail',{activité: activity})
    }
      

    render() {

        return(
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.header}>
                    <Text style={styles.titre}>Trajets</Text>
                </View>
                <View style={styles.activité}>
                <Text style={styles.new_activity}>Nouveau Trajet</Text>
                <TouchableOpacity onPress={()=>this._newActivité()}>
                <Image
                source={require('../Images/lanceurActivité.png')}
                style={styles.logoActivité}
                />
                </TouchableOpacity>
                </View>
                <FlatList
                    data={this.props.activités}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <ActivityItem
                        activité={item}
                        displayActivityDetail={this._displayActivityDetail}
                        />

                    )}
                    ListFooterComponent={<Button title={"voir des activités plus anciennes"}/>}
                    ListEmptyComponent={<Text>Vous pouvez commencer une première activité</Text>}
                />


            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems:'center',
        borderRadius:20,
        backgroundColor:'#87CD94',
        width:100
    },
    titre:{
        fontSize:20,
        color:'#FFFFFF',


    },
    logoActivité:{
        height:100,
        width:100,
        margin:10
    },
    mainContainer: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#fdfdfe'
    },
    activité:{
        marginTop:20,
        width:Dimensions.get('window').width-100,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:3,
        borderColor:'#00B0F0'


    },
    liste:{
        flex:1
        
    },
    new_activity:{
        fontSize:20,
    }
})

const mapStateToProps = (state) => {
    return {
      activités: state.activities
    }
  }


export default connect(mapStateToProps)(Acceuil)