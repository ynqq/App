import React, { Component } from "react"
import { Image } from "react-native"

export function DrawerComponent(SubCom, selectData) {
    if (!selectData || !SubCom) {
        return null
    }
    return class extends Component {

        static navigationOptions = {
            drawerLabel: selectData.label,
            // drawerIcon: () => {
            //     return <Image source={require(selectData.img)} style={{
            //         width: 24,
            //         height: 24,
            //     }} />
            // }
        }

        constructor(props) {
            super(props)
            console.warn(props)
        }

        render(){
            console.warn(this.props)
            return(
                <SubCom {...this.props} />
            )
        }

    }
}