import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"

import BarLoginTest from "./BarLoginTest/BarLoginTest"
import BarHomeChildOneScreen from "../Views/BarLoginTest/HomeChild1"
import LoadingScreen from "../Views/Loading"

let routeList = createStackNavigator({
    BarLoginTest: {
        screen: BarLoginTest,
        navigationOptions: {
            headerShown: null,
            header: null
        }
    },
    BarHomeChildOne: {
        screen: BarHomeChildOneScreen,
        navigationOptions: {
            title: "子页面1",

        }
    }
}, {
    initialRouteName: "BarLoginTest"
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