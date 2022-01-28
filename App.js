import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CalculadoraIMC from "./components/calculadoraIMC/calculadoraIMC";

class App extends Component{

  render(){
    return(
      <>
        <CalculadoraIMC></CalculadoraIMC>
      </>
    )
  }
}

export default App;