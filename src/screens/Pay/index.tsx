import React, { useState } from "react";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import { useNavigation } from "@react-navigation/native";

import ArrowRightSVG from "../../assets/SVG/Arrow-Right.svg";

import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { PaymentMethod } from "../../components/PaymentMethod";

import {
  Container,
  Header,
  ButtonGoBackWrapper,
  ButtonGoBack,
  Heading,
  Ticket,
  TicketInfo,
  Title,
  TicketDetail,
  TicketDetailRow,
  TicketDetailRowHeading,
  TicketDetailRowWrap,
  TicketDetailRowPrimaryHeading,
  TicketDetailRowSecondaryHeading,
  Divider,
  Bill,
  BillRow,
  BillHeading,
  BillPrimaryHeading,
  TearLine,
  LeftEllipse,
  Ellipse,
  RightEllipse,
  PaymentForm,
  InputPhoneNumber,
  ButtonGradient,
  Button,
  ButtonHeading,
  CodeFieldWrapper,
  CodeHeading,
  ChangeNumberButton,
  ChangeNumberButtonHeading,
  ResendText,
  CodefieldButtonWrapper,
} from "./styles";
import { Text } from "native-base";

const CELL_COUNT = 4;

export function Pay() {
  const navigation = useNavigation<any>();

  const [isCodeSend, setIsCodeSend] = useState(false);

  const [isPaymentTurn, setIsPaymentTurn] = useState(false);

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOnChange() {}

  function handleActivateCodeSend() {
    setIsCodeSend(true);
  }

  function handleActivatePaymentTurn() {
    setIsPaymentTurn(true);
  }

  function handleGoToTicket() {
    navigation.navigate("Ticket");
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#1a2232' }}
      behavior={Platform.OS === "ios" ? "position" : "position"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container showsVerticalScrollIndicator={false}>
          <Header>
            <ButtonGoBackWrapper>
              <ButtonGoBack onPress={handleGoBack}>
                <ArrowRightSVG />
              </ButtonGoBack>
            </ButtonGoBackWrapper>

            <Heading>Pay for tickets</Heading>
          </Header>

          <Ticket>
            <TicketInfo>
              <Title>The Batman</Title>

              <TicketDetail>
                <TicketDetailRow>
                  <TicketDetailRowHeading>Cinema</TicketDetailRowHeading>

                  <TicketDetailRowWrap>
                    <TicketDetailRowPrimaryHeading>
                      Eurasia Cinema7
                    </TicketDetailRowPrimaryHeading>
                    <TicketDetailRowSecondaryHeading>
                      ул. Петрова, д.24, ТЦ "Евразия"
                    </TicketDetailRowSecondaryHeading>
                  </TicketDetailRowWrap>
                </TicketDetailRow>

                <TicketDetailRow>
                  <TicketDetailRowHeading>Date</TicketDetailRowHeading>

                  <TicketDetailRowPrimaryHeading>
                    6 April 2022, 14:40
                  </TicketDetailRowPrimaryHeading>
                </TicketDetailRow>

                <TicketDetailRow>
                  <TicketDetailRowHeading>Hall</TicketDetailRowHeading>

                  <TicketDetailRowPrimaryHeading>
                    6th
                  </TicketDetailRowPrimaryHeading>
                </TicketDetailRow>

                <TicketDetailRow>
                  <TicketDetailRowHeading>Seats</TicketDetailRowHeading>

                  <TicketDetailRowPrimaryHeading>
                    7 row (7, 8)
                  </TicketDetailRowPrimaryHeading>
                </TicketDetailRow>
              </TicketDetail>

              <Divider />

              <Bill>
                <BillRow>
                  <BillHeading>1 x Adult</BillHeading>

                  <BillPrimaryHeading>2200 ₸</BillPrimaryHeading>
                </BillRow>
                <BillRow>
                  <BillHeading>1 x Child</BillHeading>

                  <BillPrimaryHeading>1000 ₸</BillPrimaryHeading>
                </BillRow>
                <BillRow>
                  <BillHeading>2 total</BillHeading>

                  <BillPrimaryHeading>3200 ₸</BillPrimaryHeading>
                </BillRow>
              </Bill>
            </TicketInfo>
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

            {isCodeSend && !isPaymentTurn && (
              <CodeFieldWrapper>
                <CodeHeading>Enter the password from the SMS</CodeHeading>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFiledRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
                <ChangeNumberButton>
                  <ChangeNumberButtonHeading>
                    Change number
                  </ChangeNumberButtonHeading>
                </ChangeNumberButton>

                <ResendText>Resend (0:59)</ResendText>
                <CodefieldButtonWrapper>
                  <ButtonGradient
                    colors={["#FF8036", "#FC6D19"]}
                    //style={styles.shadow}
                  >
                    <Button onPress={handleActivatePaymentTurn}>
                      <ButtonHeading>Continue</ButtonHeading>
                    </Button>
                  </ButtonGradient>
                </CodefieldButtonWrapper>
              </CodeFieldWrapper>
            )}

            <PaymentForm>
              {!isCodeSend && (
                <>
                  <InputPhoneNumber
                    placeholder="Phone Number"
                    placeholderTextColor="#637394"
                    keyboardType="numeric"
                  />
                  <ButtonGradient
                    colors={["#FF8036", "#FC6D19"]}
                    //style={styles.shadow}
                  >
                    <Button onPress={handleActivateCodeSend}>
                      <ButtonHeading>Continue</ButtonHeading>
                    </Button>
                  </ButtonGradient>
                </>
              )}

              {/* <ChangeNumberButton>
            <ChangeNumberButtonHeading>Change number</ChangeNumberButtonHeading>
          </ChangeNumberButton>

          <ResendText>Resend (0:59)</ResendText> */}
            </PaymentForm>

            {isPaymentTurn && <PaymentMethod />}
          </Ticket>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  root: {
    padding: 20,
    minHeight: 300,
  },
  title: { textAlign: "center", fontSize: 30 },
  codeFiledRoot: { marginTop: 20, width: "100%", paddingHorizontal: 20 },
  cell: {
    width: 70,
    height: 53,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#273550",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  focusCell: {
    borderColor: "#F26834",
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: gap / -2,
  },
  child: {
    marginHorizontal: gap / 2,
  },
});
