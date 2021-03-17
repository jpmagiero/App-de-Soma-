import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer'

import DashboardStack from './src/components/navigators/DashboardStack'
import SettingsStack from './src/components/navigators/SettingsStack'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardStack} />
        <Drawer.Screen name="Settings" component={SettingsStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
