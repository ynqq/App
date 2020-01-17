import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity
} from "react-native"


class App extends Component{

  render(){
    return (
      <View>
        <TouchableOpacity   onPress={() => {
          console.log(this.props)
          this.props.navigation.navigate('BarHomeChildOne')
        }}>
        <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity   onPress={() => {
          console.log(this.props)
          // this.props.navigation.navigate('DrawerHome')
          this.props.navigation.toggleDrawer()
        }}>
        <Text>Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

export default App