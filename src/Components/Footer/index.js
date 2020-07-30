import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

const Footer = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.center}>
        <Image 
          source={{uri: "https://reactnative.dev/img/oss_logo.png"}}
          style={styles.logo}
        />
      </View>
    </View>
  )
}

export default Footer

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