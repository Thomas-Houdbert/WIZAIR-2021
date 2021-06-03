import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { StyleSheet, Image,Text, Button } from 'react-native';
import Acceuil from '../Components/Acceuil'
import Map from '../Components/Map'
import Profile from '../Components/Profile'
import Blog from '../Components/Blog'
import ActivityDetail from '../Components/ActivityDetail'
import NewActivity from '../Components/NewActivity'


const ActivityStackNavigator = createStackNavigator({
    Acceuil:{
        screen:Acceuil,
        navigationOptions:{
            title:'trajet',
            headerShown:false
        }
    },
    ActivityDetail:{
        screen: ActivityDetail,
        navigationOptions:{
        }
    },
    NewActivity:{
        screen:NewActivity
    }
})


const AppNavigator = createBottomTabNavigator({
    Acceuil :{
        screen:ActivityStackNavigator,
        navigationOptions:{
            tabBarIcon:()=>{
                return(
                    <Image
                    source={require('../Images/menus/trajets.png')}
                    style={styles.logo_menu}
                    />
                )
            },
            
            

        },

    },
    Map :{
        screen:Map,
        navigationOptions:{
            tabBarIcon:()=>{
                return(
                    <Image
                    source={require('../Images/menus/carte.png')}
                    style={styles.logo_menu}
                    />
                )
            }
        }
    },
    Blog :{
        screen:Blog,
        navigationOptions:{
            tabBarIcon:()=>{
                return(
                    <Image
                    source={require('../Images/menus/blog.png')}
                    style={styles.logo_menu}
                    />
                )
            }
        }
    },
    Profile :{
        screen:Profile,
        navigationOptions:{
            tabBarIcon:()=>{
                return(
                    <Image
                    source={require('../Images/menus/profil.png')}
                    style={styles.logo_menu}
                    />
                )
            }
        }
    },
},
{
    
    tabBarOptions:{
        activeBackgroundColor:'#69C181',
        inactiveBackgroundColor:'#FFFFFF',
        showLabel:false,
        showIcon:true,

    },

}
)

const styles = StyleSheet.create({
    logo_menu:{
        width:40,
        height:40
    }
})
    


export default createAppContainer(AppNavigator)