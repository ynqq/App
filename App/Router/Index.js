import React from "react"
import {
    Image
} from "react-native"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { createDrawerNavigator } from "react-navigation-drawer"

import BarLoginTest from "./BarLoginTest/BarLoginTest"
import BarHomeChildOneScreen from "../Views/BarLoginTest/HomeChild1"
import LoadingScreen from "../Views/Loading"
import DrawerComponent from "./DrawerTest"
import DrawerHome from "../Views/DrawerTest/DrawerHome"

const Drawer = createDrawerNavigator(
    {
        BarLoginTest: {
            screen: BarLoginTest,
            navigationOptions: {
                headerShown: null,
                header: null,
                drawerLabel: "首页",
                drawerIcon: (props) => {
                    return (
                        props.focused ? <Image style={{ width: 24, height: 24 }} source={require('../Static/Img/home_light.png')} /> : <Image style={{ width: 24, height: 24 }} source={require('../Static/Img/home_gray.png')} />
                    )
                },

            }
        },
        DrawerHome: {
            screen: DrawerHome,
            navigationOptions: {
                headerShown: null,
                header: null,
                drawerLabel: "首页",
                drawerIcon: (props) => (
                    props.focused ? <Image style={{ width: 24, height: 24 }} source={require('../Static/Img/home_light.png')} /> : <Image style={{ width: 24, height: 24 }} source={require('../Static/Img/home_gray.png')} />
                ),

            }
        }
    },
    {
        initialRouteName: "BarLoginTest",
        drawerType: "slide",
        contentComponent: DrawerComponent
    }
)

let routeList = createStackNavigator({
    BarHomeChildOne: {
        screen: BarHomeChildOneScreen,
        navigationOptions: {
            title: "子页面1",

        }
    },
    Drawer: {
        screen: Drawer,
        navigationOptions: {
            headerShown: null,
            header: null
        }
    },

}, {
    initialRouteName: "Drawer"
})

const defauleAction = routeList.router.getStateForAction
routeList.router.getStateForAction = (action, state) => {
    if (action.routeName === 'BarUser' && global.LOGIN_STATE === 0) {
        this.routes = [
            ...state.routes,
            {
                key: "id" + String(new Date().getTime()),
                routeName: 'BarHomeChildOne',
                params: {
                    name: "name1"
                }
            }
        ]
        return {
            ...state, routes, index: this.routes.length - 1
        }
    }
    return defauleAction(action, state)

}

const AppRouter = createSwitchNavigator({
    RouteList: routeList,
    Loading: {
        screen: LoadingScreen
    }
}, {
    initialRouteName: "Loading"
})

export default createAppContainer(AppRouter)