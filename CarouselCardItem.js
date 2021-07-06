import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image ,TouchableOpacity ,Linking} from "react-native"
import Lightbox from 'react-native-lightbox-v2';
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH *0.7)

const Click = (uri,type) =>{
    console.log(uri)
    console.log(type)
    if(type == "web"){
        Linking.openURL(uri, '_blank');
    }else if(type == "app"){
        Linking.openURL(uri)
    }else{
        <LightboxView />
    }
    
}

const LightboxView = ({navigator}) => (

    <Lightbox navigator={navigator}>
      <Image
        style={{ height: 300 }}
        source={{ uri: 'http://knittingisawesome.com/wp-content/uploads/2012/12/cat-wearing-a-reindeer-hat1.jpg' }}
      />
    </Lightbox>
  );

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
        {item.type =='pic'? <LightboxView />:
        <TouchableOpacity onPress={()=>Click(item.uri,item.type)}>
            <Image source={{ uri: item.imgUrl }}style={styles.image}/>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.body}</Text>            
        </TouchableOpacity>        
        }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    margin:10,
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    // paddingBottom: 40,
    paddingTop:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    // paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    // fontSize: 18,
    // paddingLeft: 20,
    // paddingRight: 20
  }
})

export default CarouselCardItem