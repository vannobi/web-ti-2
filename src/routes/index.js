import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/HomeScreen';
import { ConfigScreen } from '../pages/ConfigScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CursoScreen } from '../pages/CursoScreen';
import { SumillaScreen } from '../pages/SumillaScreen';
import { FullSumillaScreen } from '../pages/FullSumillaScreen';

const Stack = createStackNavigator();
// add Component Screen
const MainNavigation = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Config" component={ConfigScreen} />
    <Stack.Screen name="Curso" component={CursoScreen} />
    <Stack.Screen name="Sumilla" component={SumillaScreen} />
    <Stack.Screen name="FullSumilla" component={FullSumillaScreen} />
  </Stack.Navigator>
);

const Routes = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  </SafeAreaProvider>
);

export default Routes;
