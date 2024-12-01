import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LanguageItem({ lang, image }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.logo} />
      <Text style={styles.text}>{lang}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
