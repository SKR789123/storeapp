import { View, Text,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductList = () => {
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
    },
    ];
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity >
        <Text>{item.title}</Text>
    </TouchableOpacity>
); 

const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // extraData={selectedId}
      />
  )
}

export default ProductList