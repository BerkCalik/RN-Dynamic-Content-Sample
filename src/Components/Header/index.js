import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("ACTION", "Header menu onPress")}>
        <Image
          source={require('../../Assets/Images/bars.png')}
          style={{ width: 30, height: 20 }}
        />
      </TouchableOpacity>
      <View style={styles.center}>
        <Image 
          source={{uri: "https://reactnative.dev/img/oss_logo.png"}}
          style={styles.logo}
        />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#373837",
    borderColor: "#232423",
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15
  },
  center: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    height: 50,
    width: 150,
    alignSelf: "center",
    resizeMode: "contain"
  }
})