import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Builder from '../../Components/Builder'
import { getHomeData } from '../../Services'

const Home = () => {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      let _data = await getHomeData();
      _data = _data.filter(d => d.published)
      _data.sort((a, b) => a.order - b.order)
      console.log("data: ", data)

      setData(_data)
    }

    getData()
  }, []);

  return (
    <View style={styles.container}>
      {data != null ? <Builder data={data} /> : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
