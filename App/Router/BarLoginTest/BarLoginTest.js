import React from "react"
import { Image } from "react-native"

import {NavigationAction  } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createStackNavigator } from "react-navigation-stack"


import BarHomeScreen from "../../Views/BarLoginTest/Home"
import BarUserScreen from "../../Views/BarLoginTest/User"
import HomeIconGray from "../../Static/Img/home_gray.png"
import HomeIconLight from "../../Static/Img/home_light.png"
import UserIconGray from "../../Static/Img/personal_gray.png"
import UserIconLight from "../../Static/Img/personal_light.png"


const BarHome = createStackNavigator({
    BarHome: {
        screen: BarHomeScreen,
        navigationOptions: {
            title: '登录',
            headerBackTitle: null,
            // header: null
        }
    }

})



const BarUser = createStackNavigator({
    BarUser: {
        screen: BarUserScreen,
        navigationOptions: {
            title: "个人信息"
        }
    }

})



export default createBottomTabNavigator(
    {
        BarHome: {
            screen: BarHome,
            navigationOptions({ navigation }) {
                const tabBarVisible = navigation.state.index == 0
                return {
                    title: "主页",
                    tabBarVisible
                }
            }
        },
        BarUser: {
            screen: BarUser,
            navigationOptions: {
                title: "个人信息"
            }
        }
    },
    {
        initialRouteName: 'BarHome',
        defaultNavigationOptions({ navigation }) {
            return {
                tabBarIcon: ({ focused, tintColor }) => {
                    const { routeName } = navigation.state
                    switch (routeName) {
                        case "BarHome": return <Image source={focused ? HomeIconLight : HomeIconGray} style={{ ...iconStyle }} />; break;
                        case "BarUser": return <Image source={focused ? UserIconLight : UserIconGray} style={{ ...iconStyle }} />
                    }
                },
            }
        },
        tabBarOptions: {
            style: {
                backgroundColor: 'orchid',
                
            },
            activeTintColor: "red",
            activeBackgroundColor: "orange",
            inactiveBackgroundColor: "#000",
            inactiveTintColor: "#fff"
        }
    }
)


const iconStyle = {
    width: 30,
    height: 30
}