import HomeScreen from "../components/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../components/profile/Profile";
import React from "react";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import TripDetails from "../components/trips/TripDetails";
import TripsHome from "../components/trips/TripsHome";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Trips" component={TripsHome} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
