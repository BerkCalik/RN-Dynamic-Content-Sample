import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { Slider, ProductBox, BlogPosts } from '../'
import { getPageData } from '../../Services'

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

const Builder = ({ endpoint, defaultModel }) => {

  const [data, setData] = React.useState(null);
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        let _data = await getPageData(endpoint);
        if (_data != null) {
          _data = _data.filter(d => d.published)
          if (_data.length > 0) {
            _data.sort((a, b) => a.order - b.order)
            setData(_data)
            setReady(true)
            return;
          }  
        }        
        setData(defaultModel)
      } catch (error) {
        setData(defaultModel)
      }
      setReady(true)
    }

    getData()
  }, []);

  if (!ready) {
    return <View style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator style={{ alignSelf: "center" }} size="large" color="#000" />
    </View>
  }

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
