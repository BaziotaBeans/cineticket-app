import { useState } from "react";

import ToggleSwitch from "toggle-switch-react-native";

import { Switch, Platform } from "react-native";

import { data } from "../../data";

import { useNavigation } from "@react-navigation/native";

import DateSVG from "../../assets/SVG/date.svg";

import SortSVG from "../../assets/SVG/sort.svg";

import { ActionSheetSort } from "../ActionSheetSort";

import {
  Container,
  Controls,
  ControlsItemWrapper,
  ControlsItem,
  ControlsItemHeading,
  Header,
  HeaderItem,
  HeaderItemHeading,
  SessionList,
  SessionItem,
  ControlsItemBody,
  ControlsItemFooter,
  ControlsItemSwitch,
  SessionTimeWrapper,
  SessionTimeHeading,
  SessionTimeSubHeadingWrapper,
  SessionTimeSubHeading,
  SessionDivider,
  SessionContent,
  SessionTitle,
  SessionPriceWrapper,
  SessionPrice,
  NoPrice,
} from "./styles";
import { useDisclose } from "native-base";

export function MovieSessions() {
  const navigation = useNavigation<any>();

  const [toggleFilter, setToggleFilter] = useState(false);

  const {
    isOpen: isOpenSort,
    onOpen: onOpenSort,
    onClose: onCloseSort
  } = useDisclose();

  function handleNavigateToSelectSeats() {
    navigation.navigate("SelectSeats");
  }

  function handleToggleFilter() {
    setToggleFilter(!toggleFilter);
  }

  return (
    <Container>
      <Controls>
        <ControlsItemWrapper>
          <ControlsItem>
            <ControlsItemBody>
              <DateSVG />
            </ControlsItemBody>
            <ControlsItemFooter>
              <ControlsItemHeading>April, 18</ControlsItemHeading>
            </ControlsItemFooter>
          </ControlsItem>
        </ControlsItemWrapper>

        <ControlsItemWrapper>
          <ControlsItem onPress={onOpenSort}>
            <ControlsItemBody>
              <SortSVG />
            </ControlsItemBody>
            <ControlsItemFooter>
              <ControlsItemHeading>Time ↑</ControlsItemHeading>
            </ControlsItemFooter>
          </ControlsItem>
        </ControlsItemWrapper>

        <ControlsItemWrapper>
          <ControlsItemSwitch>
            <ControlsItemBody>
              <Switch
                trackColor={{ false: "#253554", true: "#FF8036" }}
                thumbColor={toggleFilter ? "#FFF" : "#637394"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={handleToggleFilter}
                style={{
                  marginBottom: Platform.OS === "ios" ? 0 : -15,
                  marginTop: Platform.OS === "ios" ? 0 : -10,
                  //transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
                }}
                value={toggleFilter}
              />
            </ControlsItemBody>
            <ControlsItemFooter>
              <ControlsItemHeading>Time</ControlsItemHeading>
            </ControlsItemFooter>
            {/* <ToggleSwitch
              isOn={toggleFilter}
              onColor="green"
              offColor="red"
              // label="Example label"
              labelStyle={{ color: "black", fontWeight: "900" }}
              size="medium"
              onToggle={handleToggleFilter}
            /> */}
          </ControlsItemSwitch>
        </ControlsItemWrapper>
      </Controls>

      <Header>
        <HeaderItem>
          <HeaderItemHeading>Time</HeaderItemHeading>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemHeading>Adult</HeaderItemHeading>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemHeading>Child</HeaderItemHeading>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemHeading>Student</HeaderItemHeading>
        </HeaderItem>
        <HeaderItem>
          <HeaderItemHeading>VIP</HeaderItemHeading>
        </HeaderItem>
      </Header>

      <SessionList
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        {data.map((item: any) => {
          return (
            <SessionItem key={item?.id} onPress={handleNavigateToSelectSeats}>
              <SessionTimeWrapper>
                <SessionTimeHeading>{item?.time}</SessionTimeHeading>
                <SessionTimeSubHeadingWrapper>
                  {item?.params.map((param, index) => (
                    <SessionTimeSubHeading key={index}>
                      {param}
                    </SessionTimeSubHeading>
                  ))}
                </SessionTimeSubHeadingWrapper>
              </SessionTimeWrapper>

              <SessionDivider />

              <SessionContent>
                <SessionTitle>{item?.cinema}</SessionTitle>
                <SessionPriceWrapper>
                  {item?.prices?.adult ? (
                    <SessionPrice>{item?.prices?.adult}</SessionPrice>
                  ) : (
                    <NoPrice />
                  )}
                  {item?.prices?.child ? (
                    <SessionPrice>{item?.prices?.child}</SessionPrice>
                  ) : (
                    <NoPrice />
                  )}
                  {item?.prices?.student ? (
                    <SessionPrice>{item?.prices?.student}</SessionPrice>
                  ) : (
                    <NoPrice />
                  )}
                  {item?.prices?.vip ? (
                    <SessionPrice>{item?.prices?.vip}</SessionPrice>
                  ) : (
                    <NoPrice />
                  )}
                </SessionPriceWrapper>
              </SessionContent>
            </SessionItem>
          );
        })}
      </SessionList>

      <ActionSheetSort
        onOpen={onOpenSort}
        onClose={onCloseSort}
        isOpen={isOpenSort}
      />
    </Container>
  );
}
