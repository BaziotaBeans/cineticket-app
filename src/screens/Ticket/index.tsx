import React from "react";
import QRCode from "react-native-qrcode-svg";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import {
  ButtonClose,
  Container,
  Header,
  Heading,
  LeftEllipse,
  QrCodeTicketWrapper,
  TearLine,
  TicketDetailText,
  TicketWrapper,
  Ellipse,
  RightEllipse,
  TicketDetail,
  MovieTitle,
  Item,
  ItemHeading,
  ItemWrapper,
  ItemPrimaryHeading,
  ItemSecondaryHeading,
  ButtonGroup,
  ButtonSecondary,
  ButtonHeading,
  ButtonPrimary,
} from "./styles";
import { StyleSheet } from "react-native";

export function Ticket() {
  const navigation = useNavigation<any>();

  function handleGoToProfile() {
    navigation.navigate("Profile");
  }

  function handleGoToHome() {
    navigation.navigate("Home");
  }

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>
        <Heading>Your ticket</Heading>

        <ButtonClose onPress={handleGoToHome}>
          <Ionicons name="close" size={30} color="#637394" />
        </ButtonClose>
      </Header>
      <TicketWrapper>
        <QrCodeTicketWrapper>
          <QRCode value="http://awesome.link.qr" size={250} />
        </QrCodeTicketWrapper>

        <TicketDetailText>
          Show this code to the gatekeeper at the cinema
        </TicketDetailText>

        <TearLine style={styles.container}>
          <LeftEllipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <Ellipse style={styles.child} />
          <RightEllipse style={styles.child} />
        </TearLine>

        <TicketDetail>
          <MovieTitle>The Batman</MovieTitle>
          <Item>
            <ItemHeading>Cinema</ItemHeading>

            <ItemWrapper>
              <ItemPrimaryHeading>Eurasia Cinema7</ItemPrimaryHeading>
              <ItemSecondaryHeading>
                ул. Петрова, д.24, ТЦ "Евразия"
              </ItemSecondaryHeading>
            </ItemWrapper>
          </Item>

          <Item>
            <ItemHeading>Date</ItemHeading>

            <ItemWrapper>
              <ItemPrimaryHeading>6 April 2022, 14:40</ItemPrimaryHeading>
            </ItemWrapper>
          </Item>

          <Item>
            <ItemHeading>Hall</ItemHeading>

            <ItemWrapper>
              <ItemPrimaryHeading>6th</ItemPrimaryHeading>
            </ItemWrapper>
          </Item>

          <Item>
            <ItemHeading>Cost</ItemHeading>

            <ItemWrapper>
              <ItemPrimaryHeading>3200 ₸ (paid)</ItemPrimaryHeading>
            </ItemWrapper>
          </Item>
          <ButtonGroup>
            <ButtonSecondary>
              <ButtonHeading>Refund</ButtonHeading>
            </ButtonSecondary>

            <ButtonPrimary onPress={handleGoToProfile}>
              <FontAwesome
                name="mail-forward"
                size={24}
                color="#fff"
                style={{ marginRight: 10 }}
              />
              <ButtonHeading>Send</ButtonHeading>
            </ButtonPrimary>
          </ButtonGroup>
        </TicketDetail>
      </TicketWrapper>
    </Container>
  );
}

const gap = 8;

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
  container: {
    flexDirection: "row",
    paddingHorizontal: gap / -2,
  },
  child: {
    marginHorizontal: gap / 2,
  },
});
