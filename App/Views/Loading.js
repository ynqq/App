import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity
} from "react-native"


class App extends Component{

  componentDidMount(){
    this.props.navigation.navigate('RouteList')
        // setTimeout(() => {
        //     this.props.navigation.navigate('RouteList')
        // }, 2000);
    }

  render(){
    return (
      <View>
       
        <Text>Loading</Text>
      </View>
    )
  }
  
}

export default App