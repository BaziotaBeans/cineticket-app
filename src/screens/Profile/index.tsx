import React from "react";

import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useRecoilState } from "recoil";

import { generalState } from "../../store";

import { useDisclose } from "native-base";

import PopCornSVG from "../../assets/SVG/empty-pop-corn.svg";

import ArrowRightSVG from "../../assets/SVG/Arrow-Right.svg";

import VisaSVG from "../../assets/SVG/visa.svg";

import {
  ButtonHeader,
  Container,
  Header,
  Heading,
  Content,
  Section,
  SectionHeading,
  Card,
  CardNumber,
  CardDate,
  ButtonNewCard,
  ButtonNewCardHeading,
  PaymentHistory,
  PaymentHistoryItem,
  PaymentHistoryItemImg,
  PaymentHistoryItemMovieTitle,
  PaymentHistoryItemDate,
  PaymentHistoryItemCinema,
  PaymentHistoryItemWrapper,
  EmptyData,
  EmptyMessage,
} from "./styles";
import { ActionSheetAddCard } from "../../components/ActionSheetAddCard";

export function Profile() {
  const navigation = useNavigation<any>();

  const [generalStateData, setGeneralStateData] = useRecoilState(generalState);

  const { isOpen, onOpen, onClose } = useDisclose();

  function handleGoBack() {
    navigation.goBack();
  }

  function handleGoToTicket() {
    navigation.navigate("Ticket");
  }

  return (
    <Container>
      <Header>
        <ButtonHeader onPress={handleGoBack}>
          <ArrowRightSVG />
        </ButtonHeader>

        <Heading>8 (707) 268 48 12</Heading>

        <ButtonHeader>
          <MaterialCommunityIcons name="logout" size={28} color="#637394" />
        </ButtonHeader>
      </Header>

      <Content>
        <Section>
          <SectionHeading>Saved Cards</SectionHeading>
          {generalStateData.isMovieChosen && (
            <Card>
              <VisaSVG />
              <CardNumber>4716 •••• •••• 5615</CardNumber>
              <CardDate>06/24</CardDate>
            </Card>
          )}

          <ButtonNewCard onPress={onOpen}>
            <ButtonNewCardHeading>Add new card</ButtonNewCardHeading>
          </ButtonNewCard>
        </Section>

        <Section>
          <SectionHeading>Payments history</SectionHeading>

          {generalStateData.isMovieChosen && (
            <PaymentHistory>
              <PaymentHistoryItem onPress={handleGoToTicket}>
                <PaymentHistoryItemImg
                  source={{ uri: "https://i.ibb.co/J7rKZCp/Batman-56x86.png" }}
                />

                <PaymentHistoryItemWrapper>
                  <PaymentHistoryItemMovieTitle>
                    The Batman
                  </PaymentHistoryItemMovieTitle>
                  <PaymentHistoryItemDate>
                    6 April 2022, 14:40
                  </PaymentHistoryItemDate>
                  <PaymentHistoryItemCinema>
                    Eurasia Cinema7
                  </PaymentHistoryItemCinema>
                </PaymentHistoryItemWrapper>
              </PaymentHistoryItem>
            </PaymentHistory>
          )}
          {/* <PaymentHistory>
            <PaymentHistoryItem onPress={handleGoToTicket}>
              <PaymentHistoryItemImg
                source={{ uri: "https://i.ibb.co/J7rKZCp/Batman-56x86.png" }}
              />

              <PaymentHistoryItemWrapper>
                <PaymentHistoryItemMovieTitle>
                  The Batman
                </PaymentHistoryItemMovieTitle>
                <PaymentHistoryItemDate>
                  6 April 2022, 14:40
                </PaymentHistoryItemDate>
                <PaymentHistoryItemCinema>
                  Eurasia Cinema7
                </PaymentHistoryItemCinema>
              </PaymentHistoryItemWrapper>
            </PaymentHistoryItem>
          </PaymentHistory> */}
        </Section>
      </Content>

      <EmptyData>
        <PopCornSVG />
        <EmptyMessage>You haven't bought tickets yet</EmptyMessage>
      </EmptyData>

      <ActionSheetAddCard isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Container>
  );
}
