import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import CalculadoraIMC from "./components/calculadoraIMC/calculadoraIMC";
import Footer from "./components/footer/Footer";
import Cabecera from "./components/cabecera/Cabecera";

class App extends Component{

  render(){
    return(
      <View style = {styles.contenido}>
        <Cabecera></Cabecera>
        <CalculadoraIMC></CalculadoraIMC>
        <Footer></Footer>
      </View>
    )
  }
}

//ESTILOS
const styles = StyleSheet.create ({
  contenido: {
    backgroundColor:'#0a0a0a',
    flex: 1,
    flexDirection: "column"
  }
});

export default App;