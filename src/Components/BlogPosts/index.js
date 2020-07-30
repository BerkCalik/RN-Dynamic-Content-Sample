import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get("screen").width

const renderItem = ({ item, index }) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={{ uri: item.image }}
    />
    <View style={styles.infoBox}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
)

const BlogPosts = (props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={props.items}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item) => "product-box-" + item.id}
      />
    </View>
  )
}

export default BlogPosts

const styles = StyleSheet.create({
  seperator: {
    width: 10
  },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: SCREEN_WIDTH / 1.2,
  },
  image: {
    height: SCREEN_WIDTH / 1.8,
    width: "100%",
  },
  infoBox: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#292929ad",
    padding: 5
  },
  title: {
    fontSize: 16,
    color: "#fff"
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#fff"
  }
})