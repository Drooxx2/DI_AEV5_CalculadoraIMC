import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Footer extends Component{

  render(){
    return(
        <View style = {styles.pie}>
            <Text style={styles.texto}>Alumno: Manuel Medina Suárez</Text>
            <Text style={styles.texto}>Curso: 2º DAM</Text>
        </View>
    )
  }
}

//ESTILOS
const styles = StyleSheet.create ({
    pie: {
        backgroundColor:'#bf3228',
        flex: 0.13,
        fontSize: 20,
        borderColor: "#bf5f58",
        borderTopWidth: 1
    },
    texto: {
        alignSelf: 'center',
        fontSize: 14,
        color: '#dedede',
        fontWeight: 'bold',
        marginTop: 5
        
    },
});