import React, {Component} from "react";
import { StyleSheet, View, Text} from "react-native";
import { Button, TextInput } from "react-native";
import calculaIMC from "../../utils/calculaIMC"

export default class CalculadoraIMC extends Component{
  constructor(props) {
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      imc: 0,
      botonPulsado: false
    };
  }


/**
 * Devuelve un elemento <Text> con el color y el mensaje
 * correspondiente en función del imc
 */
  muestraResultado = (unIMC) => {

    let mensaje = "";
    let color = "";

    //Condiciones para el mensaje
    if(unIMC < 18.5) mensaje = "Peso insuficiente"
    else if(unIMC >= 18.5 && unIMC <= 24.9) mensaje = "Normopeso"
    else if(unIMC >= 25 && unIMC <= 26.9) mensaje = "Sobrepeso grado I"
    else if(unIMC >= 27 && unIMC <= 29.9) mensaje = "Sobrepeso grado II (preobesidad)"
    else if(unIMC >= 30 && unIMC <= 34.9) mensaje = "Obesidad de tipo I"
    else if(unIMC >= 35 && unIMC <= 39.9) mensaje = "Obesidad de tipo II"
    else if(unIMC >= 40 && unIMC <= 49.9) mensaje = "Obesidad de tipo III (mórbida)"
    else if(unIMC >= 50) mensaje = "Obesidad de tipo IV (extrema)"
    
    //Condiciones para el color
    if(unIMC < 27) color = 'green';
    else if(unIMC >= 27 && unIMC <= 39.9) color = 'orange';
    else color = 'red'

    //Return
    return <Text style={{color: color}}>{mensaje}</Text>
  }

  
  /**
   * Actualiza el state peso por el peso introducido
   * @param {El peso introducido por el usuario} unPeso 
   */
  actualizaPeso = (unPeso) => {
    this.setState({peso: unPeso})
  }

  /**
   * Actualiza el state altura por la altura introducida
   * @param {La altura introducida por el usuario} unaAltura 
   */
  actualizaAltura = (unaAltura) => {
    this.setState({altura: unaAltura})
  }

  /**
   * Calcula y actualiza el state imc
   */
  actualizaIMC = () => {
    this.setState({imc: calculaIMC(this.state.peso, this.state.altura)})
    this.setState({botonPulsado: true})
  }

  render(){
    return(
      <View style={styles.contenedor}>
        <View>
          <Text style = {styles.textoDatos}>DATOS</Text>
        </View>
        <View>
          <Text style = {styles.infoInput}>PESO</Text>
          <TextInput
            underlineColorAndroid={"#9e9e9e"}
            onChangeText={this.actualizaPeso}
            value={this.state.peso}
            keyboardType="numeric"
            placeholder="Introduce tu peso en KG"
            maxLength={3}
          />
        </View>
        <View>
          <Text style = {styles.infoInput}>ALTURA</Text>
          <TextInput
            underlineColorAndroid={"#9e9e9e"}
            onChangeText={this.actualizaAltura}
            value={this.state.altura}
            keyboardType="numeric"
            placeholder="Introduce tu altura en CM"
            maxLength={3}
          />
        </View>
        <View>
          <Button
            title='CALCULA IMC'
            color="#bf3228"
            onPress={this.actualizaIMC}
          />
        </View>
        <View>
          <Text>Resultado</Text>
          {(this.state.botonPulsado) && this.muestraResultado(this.state.imc)}
        </View>
      </View>
    )
  }
}

//ESTILOS
const styles = StyleSheet.create ({

  colorResultado: {
    color: 'red'
  },
  contenedor: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 60,
    padding: 10,
    backgroundColor: '#dedede',
    justifyContent: "space-evenly"
  },
  infoInput: {
    fontSize: 16,
    marginLeft: 3,
    color: "#363636",
  },
  textoDatos: {
    color: "#bf3228",
    fontSize: 25,
    marginLeft: 5, 
  }
});