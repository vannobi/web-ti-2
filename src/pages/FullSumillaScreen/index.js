import React from 'react';
import { StyleSheet, ActivityIndicator, View, ScrollView } from 'react-native';
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
import { fullSumillaById } from '../../utils/backend.url';

const BackIcon = props => <Icon {...props} name="arrow-back" />;

const Separator = () => <View style={styles.separator} />;

export function FullSumillaScreen({ route, navigation }) {
  const { sumIde } = route.params;
  const { data, loading } = useFetch(fullSumillaById(sumIde));
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => <TopNavigationAction icon={BackIcon} onPress={navigateBack} />;
  if (loading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  } else {
    console.log('full sumilla data ->', data);
    console.log(typeof data);
    return (
      <ScrollView>
        <TopNavigation
          title={`Sumillas - Id "${sumIde}"`}
          alignment="center"
          leftControl={BackAction()}
        />
        <Divider />
        <Layout style={styles.container}>
          <Card>
            <Text category="h2">Informacion General:</Text>
            <Text category="s1">Creditos: {data.informacionGeneral.creditos}</Text>
            <Text category="s1">Semestre: {data.informacionGeneral.semestre}</Text>
            <Text category="h6">Horas del curso</Text>
            <Text category="s1">
              Laboratorio: {data.informacionGeneral.horasDelCurso.laboratorio}
            </Text>
            <Text category="s1">
              Practica: {data.informacionGeneral.horasDelCurso.practica}
            </Text>
            <Text category="s1">
              Teoria: {data.informacionGeneral.horasDelCurso.teoria}
            </Text>
          </Card>
          <Separator />
          <Card>
            <Text category="h2">Fundamentacion:</Text>
            <Text category="s1">{data.fundamentacion}</Text>
          </Card>
          <Separator />
          <Card>
            <Text category="h2">Niveles de Resultados Del Estudiante:</Text>
            {data.nivelesDeResultadoDelEstudiante.map(n => (
              <>
                <Text category="h6">{n.resultado.resEstNom}</Text>
                <Text category="s1">Resultado - Nivel: {n.nivel}</Text>
                <Text category="s1">Codigo: {n.resultado.restEstCod}</Text>
                <Text category="s1">Descripcion: {n.resultado.resEstDes}</Text>
                <Separator />
              </>
            ))}
          </Card>
          <Separator />
          <Card>
            <Text category="h2">Competencias del Curso:</Text>
            {data.competenciasDelCurso.map(n => (
              <>
                <Text category="h6">Nombre: {n.competencia.comNom}</Text>
                <Text category="s1">Descripcion: {n.competencia.comDes}</Text>
              </>
            ))}
          </Card>
          <Separator />
          <Card>
            <Text category="h2">Unidades Academicas:</Text>
            {data.unidadesAcademicas.map(u => (
              <>
                <Text category="h6">Topicos</Text>
                <Text category="s1">Competencia: {u.Competencias}</Text>
                {u.Topicos.map(t => (
                  <>
                    <Text category="s1">Descripcion: {t.topDes}</Text>
                  </>
                ))}
                <Text category="h6">Bibliografia:</Text>
                {u.Bibliografia.map(b => (
                  <>
                    <Text category="s1">Nombre: {b.bibNom}</Text>
                    <Text category="s1">Edicion: {b.bibEdici}</Text>
                    <Text category="s1">Editorial: {b.bibEdito}</Text>
                    <Text category="s1">Año: {b.bibAnio}</Text>
                    <Separator />
                  </>
                ))}
                <Separator />
              </>
            ))}
          </Card>
        </Layout>
      </ScrollView>
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
  separator: {
    marginVertical: 4,
    borderBottomColor: '#FFFFFF00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
