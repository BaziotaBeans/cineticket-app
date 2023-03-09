import { useState } from "react";

import { Actionsheet } from "native-base";

import { FontAwesome, Feather } from "@expo/vector-icons";

import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { city } from "../../data";

import {
  ActiionSheetResultItemIcon,
  ActionSheetHeader,
  ActionSheetResult,
  ActionSheetResultItem,
  ActionSheetResultItemHeading,
  ActionSheetTextInput,
  ActionSheetTextInputIcon,
} from "./styles";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface CityListProps {
  searchedValue: string;
}

function CityList({ searchedValue }: CityListProps) {
  const [citySelected, setCitySelected] = useState();

  const filteredCity =
    searchedValue.length > 0
      ? city.filter((item) => item.name.includes(searchedValue))
      : city;

  function handleSelectCity(itemPressed: any) {
    setCitySelected(itemPressed);
  }

  return (
    <>
      {filteredCity.map((item: any) => {
        return (
          <ActionSheetResultItem
            key={item.id}
            onPress={() => {
              handleSelectCity(item.id);
            }}
          >
            {item.id === citySelected && (
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

export function ActionSheetSelectCity({ isOpen, onOpen, onClose }: Props) {
  const [search, setSearch] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
          <Actionsheet.Content
            backgroundColor="#1A2435"
            h={500}
            borderWidth={2}
            style={{ borderColor: "#223049", paddingHorizontal: 10 }}
          >
            <ActionSheetHeader>
              <ActionSheetTextInputIcon>
                <FontAwesome name="search" size={20} color="#637394" />
              </ActionSheetTextInputIcon>

              <ActionSheetTextInput
                placeholder="Search"
                placeholderTextColor="#637394"
                onChangeText={setSearch}
                value={search}
              />

              <ActionSheetResult showsVerticalScrollIndicator={false}>
                {<CityList searchedValue={search} />}
              </ActionSheetResult>
            </ActionSheetHeader>
          </Actionsheet.Content>
        </Actionsheet>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
