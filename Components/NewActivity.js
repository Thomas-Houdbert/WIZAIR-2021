import React from 'react'
import {View,StyleSheet,TextInput,Text,Image, ImageBackground,Button,SafeAreaView,Dimensions,FlatList, TouchableOpacity, Alert} from 'react-native'
import {connect} from 'react-redux'
import moment from 'moment'

class NewActivity extends React.Component {

    constructor(props){
        super(props)
        this.donneesAcitvitée=["",0,0,0,0,0,""]
    }


    _submit() {
        const activité={
        id:[this.props.id,moment(new Date(this.donneesAcitvitée[0])).isoWeek()],
        date:this.donneesAcitvitée[0],
        distance:this.donneesAcitvitée[1]/1,
        average_speed:60*this.donneesAcitvitée[1]/this.donneesAcitvitée[2],
        duration:this.donneesAcitvitée[2]/1,
        min_pollution:this.donneesAcitvitée[5]/1,
        max_pollution:this.donneesAcitvitée[4]/1,
        average_pollution:this.donneesAcitvitée[3]/1,
        desc:this.donneesAcitvitée[6]
        }
        const action = {type:'ADD_ACTIVITY', value:activité}
        this.props.dispatch(action)
        this.props.navigation.navigate('Acceuil')


    }

    _searchTextInputChanged(text,i) {
        this.donneesAcitvitée[i]=text 
      }
    
    
    render(){

        return(
            <View>
                <TextInput
                style={styles.text}
                placeholder={"date"}
                onChangeText={(text)=>this._searchTextInputChanged(text,0)}
                />
                <TextInput
                style={styles.text}
                placeholder={"distance"}
                onChangeText={(text)=>this._searchTextInputChanged(text,1)}
                />
                <TextInput
                style={styles.text}
                placeholder={"temps"}
                onChangeText={(text)=>this._searchTextInputChanged(text,2)}
                />
                <TextInput
                style={styles.text}
                placeholder={"moy_pollution"}
                onChangeText={(text)=>this._searchTextInputChanged(text,3)}
                />
                <TextInput
                style={styles.text}
                placeholder={"maxpoll"}
                onChangeText={(text)=>this._searchTextInputChanged(text,4)}
                />
                <TextInput
                style={styles.text}
                placeholder={"minpoll"}
                onChangeText={(text)=>this._searchTextInputChanged(text,5)}
                />
                <TextInput
                style={styles.text}
                placeholder={"desc"}
                onChangeText={(text)=>this._searchTextInputChanged(text,6)}
                numberOfLines={10}
                />
                <Button
                title={"submit"}
                onPress={()=>this._submit()}
                />
            </View>
        )


    }
}
const styles=StyleSheet.create({
    text:{
        fontSize:30,
        marginTop:10

    }
})

const mapStateToProps = (state) => {
    return {
      activités : state.activities,
      id: state.maxid+1
    }
  }

export default connect(mapStateToProps)(NewActivity)