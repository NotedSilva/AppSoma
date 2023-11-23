import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Tabuada = () => {
  const [numero, setNumero] = useState('');
  const [tabuada, setTabuada] = useState([]);

  const gerarTabuada = () => {
    const num = parseInt(numero);

    if (!isNaN(num)) {
      const novaTabuada = [];

      for (let i = 0; i <= 10; i++) {
        const resultado = num * i;
        novaTabuada.push(`${num} x ${i} = ${resultado}`);
      }

      setTabuada(novaTabuada);
    } else {
      alert('Por favor, insira um número válido.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite um número para ver a tabuada:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={gerarTabuada}>
        <Text style={styles.btnText}>Gerar Tabuada</Text>
      </TouchableOpacity>
      {tabuada.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5DEB3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: '#A0522D',
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Tabuada;
