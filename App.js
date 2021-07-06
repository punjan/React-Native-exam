
import React, { useState, useEffect ,useRef} from 'react';
import { TextInput,Image,SafeAreaView,Button,View, Text,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselCards from './CarouselCards'
const axios = require('axios');

function LoginScreen({ navigation }) {
  const [Username, setUsername] = React.useState('');
  const [Password, setPassword] = React.useState('');
  
  function Login () {
    console.log(Username)
    console.log(Password)
    if(Username != '' && Password != ''){
      navigation.navigate('Home')
    }else{
      console.log("can't LOGIN")
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={{flex:1}}>
      <View >
        <Image source={require('MyTestApp/assets/Image/earth-icon.png')} />
      </View>
        <Text>Username</Text>
           <TextInput
                  style={{backgroundColor:"#FFF"}}
                  placeholder="Input Username"
                  onChangeText={setUsername}
             />
           <Text>Password</Text>
         <TextInput
                  style={{backgroundColor:"#FFF"}}
                  placeholder="Input Password"
                  onChangeText={setPassword}
             />
      <View style={{marginTop:20}}>
        <Button
          title="Login"
          onPress={() => Login()}
        />        
      </View>

      <View style={{marginTop:20}}>
        <Button
          title="ListView"
          onPress={() => navigation.navigate('ListView')}
        />        
      </View>

         </SafeAreaView>
    </View>
  );
}

function HomeScreen ({ navigation }){  
  return (
    <View>
      <CarouselCards />
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />      
    </View>
  )
}

function ListViewScreen ({ navigation }) {
  const [DATA, setDATA] = useState([]);
  const GetApi = () => axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')

  useEffect(() => {
    GetApi().then(response => {
      setDATA(response.data)
    })
  },[])

  const renderItem = ({item, index}) => {
    return (
      <View style={{margin:20,backgroundColor:"#FFF",borderRadius:25}}>
        <Text style={{margin:10}}>{item.title}</Text>
        <View style={{alignItems:'center',marginTop:10,marginBottom:10}}>
          <Image source={{uri: item.thumbnailUrl}} style={{width:100,height:100}}/>
        </View>
      </View>
    );
  };

  // console.log(DATA)
  return (
    <View>
      <Button
        title="Back"
        onPress={() => navigation.navigate('Login')}
      />    
      <FlatList
        data={DATA}
        renderItem={renderItem}
      />

  
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListView" component={ListViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;