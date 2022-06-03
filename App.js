import "react-native-gesture-handler";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Feather } from "@expo/vector-icons";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerTitle: "Blogs",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#000",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <Feather
                    name="plus"
                    size={30}
                    style={{ marginHorizontal: 20 }}
                    onPress={() => navigation.navigate("Create")}
                    color={"white"}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={({ navigation, route }) => ({
              headerTitle: "Blogs",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#000",
              },
              headerRight: () => (
                <TouchableOpacity>
                  <Feather
                    color={"white"}
                    name="edit"
                    size={30}
                    style={{ marginHorizontal: 20 }}
                    onPress={() => {
                      const { data } = route.params;
                      navigation.navigate("Edit", { data });
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Create"
            options={{
              headerTitle: "Create Blog",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#000",
              },
            }}
            component={CreateScreen}
          />
          <Stack.Screen
            name="Edit"
            options={{
              headerTitle: "Edit Blog",
              headerTitleAlign: "center",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#000",
              },
            }}
            component={EditScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
