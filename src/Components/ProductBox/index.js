import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get("screen").width

const renderItem = ({item, index}) => (
  <View style={styles.item}>
    <Image 
      style={styles.image}
      source={{uri: item.image}}
    />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.price}>{item.price} {item.currency}</Text>
  </View>
)

const ProductBox = (props) => {
  return (
    <View>
      <FlatList 
        horizontal
        data={props.items}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item) => "product-box-"+item.id}
      />
    </View>
  )
}

export default ProductBox

const styles = StyleSheet.create({
  seperator: {
    width: 10
  },
  item: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: SCREEN_WIDTH / 2.5,
  }, 
  image: {
    height: SCREEN_WIDTH / 2,
    width: "100%",    
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 5,
    flex: 1
  },
  price: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 5
  }
})