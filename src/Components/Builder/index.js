import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Slider, ProductBox, BlogPosts } from '../'

const components = [
  { type: "slider", component: Slider },
  { type: "product-box", component: ProductBox },
  { type: "last-blog-posts", component: BlogPosts },
]

const renderItem = ({ item, index }) => {
  const Comp = components.find(c => c.type == item.type)?.component
  if (Comp != null) {
    return (
      <Comp {...item} />
    )
  }
  console.log("Builder | Component Not Found", item)
  return null
}

const Builder = ({ data }) => {

  console.log("builder data: ", data)
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => "builder-item-" + index}
      ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
    />
  )
}

export default Builder
