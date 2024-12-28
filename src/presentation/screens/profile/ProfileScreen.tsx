import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../../config';
import {useProfileStore} from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Email: {email}</Text>
      <Pressable>
        <Text
          style={styles.primaryButton}
          onPress={() => useProfileStore.setState({name: 'Castellano'})}>
          cambiar nombre
        </Text>
      </Pressable>
      <Pressable>
        <Text
          style={styles.primaryButton}
          onPress={() =>
            useProfileStore.setState({email: 'info@esmirroque.com'})
          }>
          cambiar email
        </Text>
      </Pressable>

      <Pressable>
        <Text
          style={styles.primaryButton}
          onPress={() => changeProfile('Noel', 'esmir@esmirroque.com')}>
          Regresa a Noel
        </Text>
      </Pressable>
    </View>
  );
};
