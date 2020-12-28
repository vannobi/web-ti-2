import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Text,
  Card,
} from '@ui-kitten/components';

import { useFetch } from '../../utils/useFetch';
import { cursoBySemesterUrl } from '../../utils/backend.url';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export function CursoScreen({ route, navigation }) {
  const { semester } = route.params;
  const { data, loading } = useFetch(cursoBySemesterUrl(semester));
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateToSumilla = (curIde, curso) => {
    navigation.navigate('Sumilla', {
      curIde: curIde,
      curso: curso,
    });
  };
  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <TopNavigation
          title={`Cursos - semestre "${semester}"`}
          alignment="center"
          leftControl={BackAction()}
        />
        <Divider />
        <Layout style={styles.container}>
          {data.map(v => (
            <Card onPress={() => navigateToSumilla(v.curIde, v.curNom)}>
              <Text category="h3">{v.curNom}</Text>
              <Text category="s1">Codigo: {v.curCod}</Text>
              <Text category="s1">Creditos: {v.curCredi}</Text>
            </Card>
          ))}
        </Layout>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flex: 1,
    alignContent: 'center',
  },
  safeAreaView: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
