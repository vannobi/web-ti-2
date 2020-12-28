import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Card,
  Text,
} from '@ui-kitten/components';

import { useFetch } from '../../utils/useFetch';
import { lightSumillaByCursoId } from '../../utils/backend.url';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

export function SumillaScreen({ route, navigation }) {
  const { curIde, curso } = route.params;
  const { data, loading } = useFetch(lightSumillaByCursoId(curIde));
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateToFullSumilla = sumIde => {
    navigation.navigate('FullSumilla', {
      sumIde: sumIde,
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
    console.log('data ->', data);
    console.log(typeof data);
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <TopNavigation
          title={`Sumillas - "${curso}"`}
          alignment="center"
          leftControl={BackAction()}
        />
        <Divider />
        <Layout style={styles.container}>
          {data.map(v => (
            <Card onPress={() => navigateToFullSumilla(v.sumIde)}>
              <Text category="h3">Version - {v.sumVersion}</Text>
              <Text>Fundamentacion: {v.sumFund}</Text>
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
    alignItems: 'center',
    flex: 1,
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
