import React, { useState, useEffect } from "react";

import { Actionsheet, useDisclose } from "native-base";

import { StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { useRecoilState } from "recoil";

import { seats } from "../../data";

import { useNavigation } from "@react-navigation/native";

import ArrowRightSVG from "../../assets/SVG/Arrow-Right.svg";
import ClockSVG from "../../assets/SVG/clock.svg";
import DateSVG from "../../assets/SVG/date.svg";
import CompressSVG from "../../assets/SVG/compress.svg";
import EnlargeSVG from "../../assets/SVG/enlarge.svg";
import ScreenSVG from "../../assets/SVG/Screen.svg";

import { Seats } from "../../components/Seats";

import { LoadAnimation } from "../../components/LoadingSpinner";

import { generalState } from "../../store";

import {
  Container,
  Header,
  HeaderBody,
  HeaderFooter,
  HeaderBox,
  ButtonGoBackWrapper,
  ButtonGoBack,
  ButtonToggleWrapper,
  ButtonToggle,
  HeaderHeadingWrapper,
  HeaderHeading,
  HeaderSubHeading,
  DateTimeButton,
  DateTimeButtonHeading,
  Space,
  SymbolContainer,
  SymbolItem,
  SymbolSeatAvailable,
  SymbolSeatHeading,
  SymbolItemSpace,
  SymbolSeatChosen,
  SymbolSeatOccupied,
  SeatWrapper,
  SeatContent,
  ButtonByTicketsWrapper,
  ButtonByTickets,
  ButtonByTicketsHeading,
  Footer,
  MiddleWrapper,
  ActionSheetHeading,
  ActionSheetSubHeading,
  ActionSheetItem,
  ActionSheetItemHeading,
  ActionSheetItemSubHeading,
  ActionSheetItemWrapper,
} from "./styles";

export function SelectSeats() {
  const navigation = useNavigation<any>();

  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclose();

  const [generalStateData, setGeneralStateData] = useRecoilState(generalState);

  function handleGoBack() {
    navigation.goBack();
  }

  function handlePress() {
    console.log("Yes");
  }

  function handleGoToPay() {
    onClose();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Pay');
    }, 2000);
  }

  function handleConfirmSeatChosen() {
    setGeneralStateData((state) => ({ ...state, isChosenSeat: true }));
    onClose();
  }

  return (
    <>
      {isLoading ? (
        <LoadAnimation />
      ) : (
        <>
          <Container>
            <Header>
              <HeaderBody>
                <ButtonGoBackWrapper>
                  <ButtonGoBack onPress={handleGoBack}>
                    <ArrowRightSVG />
                  </ButtonGoBack>
                </ButtonGoBackWrapper>

                <HeaderHeadingWrapper>
                  <HeaderHeading>Eurasia Cinema7</HeaderHeading>
                  <HeaderSubHeading>The Batman</HeaderSubHeading>
                </HeaderHeadingWrapper>

                <ButtonToggleWrapper>
                  <ButtonToggle>
                    <EnlargeSVG />
                  </ButtonToggle>
                </ButtonToggleWrapper>
              </HeaderBody>
              <HeaderFooter>
                <HeaderBox>
                  <DateTimeButton>
                    <DateSVG />
                    <DateTimeButtonHeading>April, 14</DateTimeButtonHeading>
                  </DateTimeButton>
                </HeaderBox>

                <Space />

                <HeaderBox>
                  <DateTimeButton>
                    <ClockSVG />
                    <DateTimeButtonHeading>April, 14</DateTimeButtonHeading>
                  </DateTimeButton>
                </HeaderBox>
              </HeaderFooter>
            </Header>

            <SymbolContainer>
              <SymbolItem>
                <SymbolSeatAvailable />
                <SymbolSeatHeading>Available</SymbolSeatHeading>
              </SymbolItem>

              <SymbolItemSpace>
                <SymbolItem>
                  <SymbolSeatOccupied>
                    <Ionicons name="close" size={14} color="#637394" />
                  </SymbolSeatOccupied>
                  <SymbolSeatHeading>Occupied</SymbolSeatHeading>
                </SymbolItem>
              </SymbolItemSpace>

              <SymbolItem>
                <SymbolSeatChosen
                  colors={["#FF8036", "#FC6D19"]}
                  style={styles.shadow}
                />
                <SymbolSeatHeading>Chosen</SymbolSeatHeading>
              </SymbolItem>
            </SymbolContainer>

            <SeatWrapper
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              contentContainerStyle={{
                paddingVertical: 20,
                paddingHorizontal: 10,
              }}
            >
              <SeatContent showsVerticalScrollIndicator={false}>
                <ScreenSVG />
                <Seats data={seats} />
              </SeatContent>
            </SeatWrapper>
            <MiddleWrapper>
            </MiddleWrapper>

            <Footer>
              <ButtonByTicketsWrapper
                colors={["#FF8036", "#FC6D19"]}
                style={styles.shadow}
              >
                <ButtonByTickets onPress={generalStateData.isChosenSeat ? handleGoToPay : onOpen}>
                  <ButtonByTicketsHeading>
                    {generalStateData.isChosenSeat ? 'Buy 2 tickets • 3000 ₸' : 'Select ticket type'}
                  </ButtonByTicketsHeading>
                </ButtonByTickets>
              </ButtonByTicketsWrapper>
            </Footer>
          </Container>

          <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
            <Actionsheet.Content
              backgroundColor="#1A2435"
              h={300}
              borderWidth={2}
              style={{ borderColor: "#223049" }}
            >
              <ActionSheetHeading>Select ticket type</ActionSheetHeading>
              <ActionSheetSubHeading>8h row, 7th seat</ActionSheetSubHeading>

              <ActionSheetItemWrapper>

                <ActionSheetItem onPress={handleConfirmSeatChosen}>
                  <ActionSheetItemHeading>Adult</ActionSheetItemHeading>
                  <ActionSheetItemSubHeading>2200 ₸</ActionSheetItemSubHeading>
                </ActionSheetItem>

                <ActionSheetItem onPress={handleConfirmSeatChosen}>
                  <ActionSheetItemHeading>Child</ActionSheetItemHeading>
                  <ActionSheetItemSubHeading>1000 ₸</ActionSheetItemSubHeading>
                </ActionSheetItem>

                <ActionSheetItem onPress={handleConfirmSeatChosen}>
                  <ActionSheetItemHeading>Student</ActionSheetItemHeading>
                  <ActionSheetItemSubHeading>1500 ₸</ActionSheetItemSubHeading>
                </ActionSheetItem>
              </ActionSheetItemWrapper>
            </Actionsheet.Content>
          </Actionsheet>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#ff8036",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 16.41,
    elevation: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});
