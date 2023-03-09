import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { About } from "../screens/Movie/About";
import { Sessions } from "../screens/Movie/Sessions";
import { Pay } from "../screens/Pay";
import { Profile } from "../screens/Profile";
import { Ticket } from "../screens/Ticket";
import { SplashScreen } from "../screens/SplashScreen";
import { SelectSeats } from "../screens/SelectSeats";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="About" component={About} />
      <Screen name="Sessions" component={Sessions} />
      <Screen name="Pay" component={Pay} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Ticket" component={Ticket} />
      <Screen name="SplashScreen" component={SplashScreen} />
      <Screen name="SelectSeats" component={SelectSeats} />
    </Navigator>
  );
}
