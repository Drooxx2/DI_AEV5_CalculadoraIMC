import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Cabecera extends Component{

  render(){
    return(
      <View style = {styles.cabecera}>
        <Text style = {styles.titulo}>Calculadora IMC</Text>
      </View>
    )
  }
}

//ESTILOS
const styles = StyleSheet.create ({

  cabecera: {
    flex: 0.3
  },
  titulo: {
    alignSelf: "center",
    fontSize: 35,
    color: "#dedede",
    marginTop: 35
  }
});