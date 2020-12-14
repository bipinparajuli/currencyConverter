/* eslint-disable prettier/prettier */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Snackbar from 'react-native-snackbar'

const currencyPerRupee = {
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.011,
  RUBEL:0.93,
  AUSDOLLAR:0.2,
  CANDOLLAR:0.019,
  YEN:1.54,
  DINAR:0.0043,
  BITCOIN:0.000004,
}

const App = () => {
  const [inputValue, setinputValue] = useState(0)
  const [resultValue, setresultValue] = useState(0)

const buttonPressed= (currency) => {
  // console.log(currency)
  if (!inputValue) {
    return Snackbar.show(({
      text:"Please enter a value",
      backgroundColor:"#EA7773",
      textColor:"#FFFFFF",
    }))
  }

  console.log(currency)

let result = parseFloat(inputValue) * currencyPerRupee[currency]
setresultValue(result.toFixed(2))
setinputValue(0)  
}
return (
    <>
<ScrollView keyboardShouldPersistTaps="handled" backgroundColor="#1b262c">
  <SafeAreaView style={styles.container}>
    <View style={styles.resultContainer}>
      <Text style={styles.resultValue}>{resultValue}</Text>
    </View>
<View style={styles.inputContainer}>
  <TextInput style={styles.input} 
  keyboardType="numeric"
  placeholder="Enter Value"
  placeholderTextColor="#c1c1c1"
  value={inputValue}
  onChangeText={(inputvalue) => setinputValue(inputvalue)}
  >

  </TextInput>
</View>
<View style={styles.convertButtonContainer}>
  {Object.keys(currencyPerRupee).map((currency)=> (
    <TouchableOpacity 
    key={currency}
    style={styles.converterButton}
    onPress={() => buttonPressed(currency)}
    >
<Text style={styles.converButtonText}>{currency}</Text>
    </TouchableOpacity>
  ))}
</View>
  </SafeAreaView>
</ScrollView>
    </>
  )
  }

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#1b262c"
},
resultContainer:{
  height:70,
  marginTop:80,
  justifyContent:"center",
  borderColor:"#bbe1fa",
  borderWidth:2,
alignItems:"center"
},
resultValue:{
  fontSize:30,
  color:"#fff",
  fontWeight:'bold'
},
inputContainer:{
height:70,
marginTop:10,
justifyContent:"center",
alignItems:"center",
borderWidth:2,
borderColor:"#bbe1fa"
},
input:{
fontSize:30,
textAlign:"center",
color:"#FFFFFF"
},
convertButtonContainer:{
  flexDirection:"row",
  flexWrap:"wrap",
marginTop:10
},
converterButton:{
  alignItems:"center",
  justifyContent:"center",
  height:100,
  width:"33.3%",
  borderWidth:2,
  borderColor:"#bbe1fa",
  marginTop:10,
  backgroundColor:"#0F4C75",
},
converButtonText:{
  color:"#fff",
  fontSize:15
}

});

export default App;
