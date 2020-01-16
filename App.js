import React, { Component } from "react"
import {
  View,
  Text
} from "react-native"
import "./App/Global/index"

import Router from "./App/Router/Index"

class App extends Component{

  componentDidMount(){
    global.LOGIN_STATE = 0
    STORAGE.save({
      key: "LOGINSTATE",
      data: 0
    })
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Router/>
      </View>
    )
  }
  
}

export default App