import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HospitalSearch } from "../components/HospitalSearch";
import { DocSearch } from "../components/DocSearch";
import { Schedule } from "../components/Schedule";

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Patient Plink",
      }}
      initialRouteName="HospitalSearch"
    >
      <Stack.Screen name="HospitalSearch" component={HospitalSearch} />
      <Stack.Screen
        options={{
          title: "Doctors",
        }}
        name="DoctorSearch"
        component={DocSearch}
      />
      <Stack.Screen
        options={{
          title: "Schedule",
        }}
        name="Schedule"
        component={Schedule}
      />
    </Stack.Navigator>
  );
}

export default HomeScreen;
