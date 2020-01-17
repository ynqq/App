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
          // this.props.navigation.navigate('BarHomeChildOne')
          this.props.navigation.toggleDrawer()
        }}>
        <Text>DrawerHome</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

export default App