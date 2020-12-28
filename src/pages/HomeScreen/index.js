import React, { useState } from 'react';
import { StyleSheet, Linking, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import heartIcons from '../../resources/heartIcons';
import { Layout } from '@ui-kitten/components';
import NavigationBar from '../../components/layout/header/NavigationBar';
import { YearGrid } from '../../components/grid/year';
// import ToggleThemeButton from '../../components/buttons/ToggleThemeButton';

export const HomeScreen = props => {
  const [icon, setIcon] = useState(heartIcons[0]);

  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationBar {...props} />
        <Layout style={styles.container}>
          <YearGrid {...props} />
        </Layout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'flex-end',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 10,
  },
  safeAreaView: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  iconButton: {
    marginVertical: 16,
  },
});
