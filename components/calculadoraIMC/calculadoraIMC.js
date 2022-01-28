import React, {Component} from "react";
import { StyleSheet, ScrollView, View, Text, Alert} from "react-native";
import { Button, TextInput } from "react-native";
import calculaIMC from "../../utils/calculaIMC"
export default class CalculadoraIMC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      imc: 0
    };
  }

  actualizaPeso = (unPeso) => {
    this.setState({peso: unPeso})
  }

  actualizaAltura = (unaAltura) => {
    this.setState({altura: unaAltura})
  }

  actualizaIMC = () => {
    this.setState({imc: calculaIMC(this.state.peso, this.state.altura)})
  }



  render(){
    return(
      <View>
        <Text>Calculadora IMC</Text>
        <View>
          <Text>DATOS</Text>
          <Text>PESO</Text>
          <TextInput
            style={{ height: 30, width: 300 }}
            onChangeText={this.actualizaPeso}
            value={this.state.peso}
            keyboardType="numeric"
            placeholder="Introduce tu peso en KG"
            underlineColorAndroid="blue"
            maxLength={3}
          />
          <Text>ALTURA</Text>
          <TextInput
            style={{ height: 30, width: 300 }}
            onChangeText={this.actualizaAltura}
            value={this.state.altura}
            keyboardType="numeric"
            placeholder="Introduce tu altura en CM"
            underlineColorAndroid="blue"
            maxLength={3}
          />
          <Button
            title='Hola caracola'
            style={{backgroundColor: "#f194ff"}}
            color="#f194ff"
            onPress={this.actualizaIMC}
          />
          <Text>{this.state.imc}</Text>
        </View>
      </View>
    )
  }
}