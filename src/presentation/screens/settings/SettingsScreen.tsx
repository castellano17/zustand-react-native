import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../config';
import {useCounterStore} from '../../store/counter-store';

export const SettingsScreen = () => {
  const counter = useCounterStore(state => state.counter);
  const increaseBy = useCounterStore(state => state.incrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Settings ${counter}`,
    });
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {counter} </Text>
      <Pressable>
        <Text style={styles.primaryButton} onPress={() => increaseBy(1)}>
          +1
        </Text>
      </Pressable>
      <Pressable>
        <Text style={styles.primaryButton} onPress={() => increaseBy(-1)}>
          -1
        </Text>
      </Pressable>
    </View>
  );
};
