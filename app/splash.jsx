import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View>
      <Image source={require('../assets/images/logo.png')}
      style= {{
        width: 200,
        height: 200,
        marginVertical: 150,
        marginHorizontal: 'auto', 
      }}/> 
      <Text style= {{
        fontSize: 30,
        textAlign: 'center',
        marginVertical: -150,
        marginHorizontal: 50,
        fontWeight: 'bold',
        fontStyle: 'italic'
      }}>HADIRIN PEGAWAI</Text>

    </View>
  );
}
