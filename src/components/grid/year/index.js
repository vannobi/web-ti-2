import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const Separator = () => <View style={styles.separator} />;

export function YearGrid(props) {
  const navigateToCurso = semester => {
    props.navigation.navigate('Curso', {
      semester: semester,
    });
  };

  const [items, setItems] = React.useState([
    { semA: ['Semestre 1', 1], semB: ['Semestre 2', 2], year: 1 },
    { semA: ['Semestre 3', 3], semB: ['Semestre 4', 4], year: 2 },
    { semA: ['Semestre 5', 5], semB: ['Semestre 6', 6], year: 3 },
    { semA: ['Semestre 7', 7], semB: ['Semestre 7', 7], year: 4 },
    { semA: ['Semestre 9', 9], semB: ['Semestre 9', 9], year: 5 },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: '#D8DEE9' }]}>
          <Text style={styles.itemsemA}>Año {item.year}</Text>
          <Separator />
          <Button
            color="#81A1C1"
            title={item.semA[0]}
            style={{ width: 5 }}
            onPress={() => navigateToCurso(item.semA[1])}
          />
          <Separator />
          <Button
            color="#5E81AC"
            title={item.semB[0]}
            style={{ width: 5 }}
            onPress={() => navigateToCurso(item.semB[1])}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    marginVertical: 4,
    borderBottomColor: '#FFFFFF00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 15,
    // height: 150,
  },
  itemsemA: {
    fontSize: 16,
    color: '#5E81AC',
    fontWeight: '600',
  },
  itemsemB: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
/* 

import React from 'react';

import { Divider, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const NavigationBar = props => {
  const navigateToConfig = () => {
    props.navigation.navigate('Config');
  };

  const SettingsIcon = props => <Icon {...props} name="settings" />;

  const renderSettingsAction = () => (
    <TopNavigationAction icon={SettingsIcon} onPress={navigateToConfig} />
  );

  return (
    <>
      <TopNavigation
        title="Sumillas"
        alignment="center"
        rightControls={renderSettingsAction()}
      />
      <Divider />
    </>
  );
};

export default NavigationBar;


*/
