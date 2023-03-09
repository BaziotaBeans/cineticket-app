import React from "react";
// import Video from 'react-native-video';

import { StatusBar, useWindowDimensions } from "react-native";

import { TabView, TabBar, SceneMap } from "react-native-tab-view";

import { useNavigation, useRoute } from "@react-navigation/native";

import ArrowRightSVG from "../../../assets/SVG/Arrow-Right.svg";

import { MovieAbout } from "../../../components/MovieAbout";
import { MovieSessions } from "../../../components/MovieSessions";

import {
  Container,
  Header,
  ButtonGoBack,
  MovieTitle,
  TabBarTitle,
  ButtonGoBackWrapper,
} from "./styles";

const FirstRoute = () => {
  return <MovieAbout />;
};

const SecondRoute = () => <MovieSessions />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export function About() {
  const route = useRoute<any>();

  const layout = useWindowDimensions();

  const navigation = useNavigation<any>();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "About" },
    { key: "second", title: "Sessions" },
  ]);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToHome() {
    navigation.navigate("Home");
  }

  console.log(route.params);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1D273A"
        translucent
        animated={true}
      />
      <Header>
        <ButtonGoBackWrapper>
          <ButtonGoBack onPress={handleGoToHome}>
            <ArrowRightSVG />
          </ButtonGoBack>
        </ButtonGoBackWrapper>

        {/* <MovieTitle>{route.params.state?.title}</MovieTitle> */}
        <MovieTitle>
          {route.params.state?.title.length > 15
            ? route.params.state?.title.substring(0, 15 - 3) + "..."
            : route.params.state?.title}
        </MovieTitle>
      </Header>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        sceneContainerStyle={{}}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "#FE7E33", marginBottom: -2 }}
            tabStyle={{ backgroundColor: "#1D273A", minHeight: 0 }} // here
            indicatorContainerStyle={{ backgroundColor: "red" }}
            renderLabel={({ route, focused }) => (
              <TabBarTitle isFocused={focused}>{route.title}</TabBarTitle>
            )}
          />
        )}
      />
    </Container>
  );
}
