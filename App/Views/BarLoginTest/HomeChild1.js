import React, { Component } from "react"
import {
  View,
  Text,
  TouchableOpacity
} from "react-native"


class App extends Component {

  render() {
    const { navigation } = this.props
    return (
      <View>
        <TouchableOpacity onPress={() => {
          global.LOGIN_STATE = 1
          STORAGE.save({
            key: "LOGINSTATE",
            data: 1
          }).then(res => {
            navigation.goBack()
          })
        }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(navigation)
          navigation.goBack()
        }}>
          <Text>No Login</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default App