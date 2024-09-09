import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TelaInicial = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/adega.jpg')} style={styles.image} /> */}
      <Text style={styles.title}>-- Adega Preferida </Text>
      <Text style={styles.subtitle}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default TelaInicial;
