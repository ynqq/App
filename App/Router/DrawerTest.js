import React, { Component } from "react"
import {
    View,
    ScrollView,
    Button,
    Text,
    TouchableOpacity
} from "react-native"
import { SafeAreaView } from "react-navigation"
import { DrawerItems } from "react-navigation-drawer"

export default (props) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{height:100,backgroundColor:'orchid'}}>
                    <Text>哈哈哈哈</Text>
                </View>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    )
}