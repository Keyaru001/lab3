import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import LanguageItem from '../LanguageItem';

const langs = [
  { id: '1', lang: 'JavaScript', image: require('../../assets/lang1.webp') },
  { id: '2', lang: 'Python', image: require('../../assets/lang2.jpg') },
];

export default function LanguagesScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <FlatList
      data={langs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <LanguageItem lang={item.lang} image={item.image} />}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    />
  );
}
