import { useState } from "react";

import { Actionsheet } from "native-base";

import { FontAwesome, Feather } from "@expo/vector-icons";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { sort, order } from "../../data";
import {
  ActiionSheetResultItemIcon,
  ActionSheetContent,
  ActionSheetHeading,
  ActionSheetResultItem,
  ActionSheetResultItemHeading,
  Footer,
} from "./styles";
import { Button } from "../Button";

function OrderList() {
  const [orderType, setOrderType] = useState();

  function handleSelectOrder(itemPressed: any) {
    setOrderType(itemPressed);
  }

  return (
    <>
      {order.map((item: any) => {
        return (
          <ActionSheetResultItem
            key={item.id}
            onPress={() => {
              handleSelectOrder(item.id);
            }}
          >
            {item.id === orderType && (
              <ActiionSheetResultItemIcon>
                <Feather name="check" size={24} color="#637394" />
              </ActiionSheetResultItemIcon>
            )}

            <ActionSheetResultItemHeading>
              {item.name}
            </ActionSheetResultItemHeading>
          </ActionSheetResultItem>
        );
      })}
    </>
  );
}

function SortList() {
  const [sortType, setSortType] = useState();

  function handleSelectSort(itemPressed: any) {
    setSortType(itemPressed);
  }

  return (
    <>
      {sort.map((item: any) => {
        return (
          <ActionSheetResultItem
            key={item.id}
            onPress={() => {
              handleSelectSort(item.id);
            }}
          >
            {item.id === sortType && (
              <ActiionSheetResultItemIcon>
                <Feather name="check" size={24} color="#637394" />
              </ActiionSheetResultItemIcon>
            )}

            <ActionSheetResultItemHeading>
              {item.name}
            </ActionSheetResultItemHeading>
          </ActionSheetResultItem>
        );
      })}
    </>
  );
}

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ActionSheetSort({ isOpen, onOpen, onClose }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content
            backgroundColor="#1A2435"
            h={550}
            borderWidth={2}
            style={{ borderColor: "#223049", paddingHorizontal: 10 }}
          >
            <ActionSheetContent>
              <ActionSheetHeading>Sort by</ActionSheetHeading>
              {<SortList />}

              <ActionSheetHeading style={{ marginTop: 20 }}>
                Order
              </ActionSheetHeading>
              {<OrderList />}

              <Footer>
                <Button title="Apply"/>
              </Footer>
            </ActionSheetContent>
          </Actionsheet.Content>
        </Actionsheet>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
