import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class App extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>Usuário</Text>
        <TextInput style={styles.input} placeholder='usuário'/>

        <Text style={styles.texto}>Senha</Text>
        <TextInput style={styles.input} placeholder='senha' />
        <Button style={styles.botao} title='Cadastrar' onPress={this.clicar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:40,
    backgroundColor:'#FFDE03'
  },
  input: {
    borderWidth:2,
    borderColor:'black',
    padding:10,
    marginBottom:10,
    backgroundColor:'white'
  },
  texto: {
    fontWeight:'bold',
    fontSize:25
  }
});
