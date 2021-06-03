import React from 'react'
import {View,StyleSheet,TextInput,Text,Image, ImageBackground,Button} from 'react-native'
import AppNavigator from '../Navigation/Navigation'

class Authentification extends React.Component {


    constructor(props) {
        super(props)
        this.state={
            isAuthenticated : true
        }
    }

    _authentification() {
        this.setState({isAuthenticated:false})
    }

    _deconnection() {
        this.setState({isAuthenticated:true})
    }
    

    _displayAuthentification() {
        if(this.state.isAuthenticated) {
            return(
                <View style={styles.main_container}>
                    <Image
                    style={styles.logo}
                    source={require('../Images/logoWIZAIR.png')}
                    />
                    <Text style={styles.titre}>WIZAIR</Text>
                    <TextInput
                    keyboardType={'email-address'} 
                    maxLength={50}
                    style={styles.text_id}
                    autoCompleteType='email'
                    placeholder='Adresse mail'
                    />
                    <Text style={styles.oubli}>adresse mail oubliée</Text>
                    <TextInput 
                    maxLength={50}
                    style={styles.text_mdp}
                    autoCompleteType='password'
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    />
                    <Text style={styles.oubli}>mot de passe oublié</Text>
                    <Button
                    style={styles.bouton}
                    color={'green'} 
                    title={'Connection'}
                    onPress={()=>this._authentification()}
                    
                    />
                    <Button
                    style={styles.bouton}
                    color={'green'} 
                    title={'Inscription'}
                    
                    />
                

                </View>
            )
        }
        
    }

    _displayApp(){
        if(!this.state.isAuthenticated) {
            return(
                <AppNavigator

                />
            )
        }
    }


    
    render() {


        return(
            <View
            style={{flex:1,backgroundColor:'#FFFFFF'}}>
            {this._displayAuthentification()}
            {this._displayApp()}

            </View>

        )
    }
}

const styles= StyleSheet.create({
    main_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text_id:{
        width:250,
        fontSize:20,
        borderColor:'#000000',
        borderWidth:1,
        paddingLeft:5,
        textAlign:'center',
        height:40,
        borderRadius:10,

    },
    text_mdp:{
        width:250,
        fontSize:20,

        borderColor:'#000000',
        borderWidth:1,
        paddingLeft:5,
        textAlign:'center',
        height:40,
        borderRadius:10,

    },
    logo:{
        height:160,
        width:280,
    },
    bouton:{
        borderWidth:1
      
    },
    titre:{
        fontSize:100,
        fontStyle:'italic',
        textAlign:'center',
        color:'#000000'
    },
    oubli:{
        width:250,
        fontStyle:'italic',
        fontSize:10,
        color:'grey',
        marginBottom:10,
    }
})

export default Authentification