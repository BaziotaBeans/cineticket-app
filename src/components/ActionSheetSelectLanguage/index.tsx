import { useState } from "react";

import { Actionsheet } from "native-base";

import { FontAwesome, Feather } from "@expo/vector-icons";

import { languages } from "../../data";

import {
  ActiionSheetResultItemIcon,
  ActionSheetResult,
  ActionSheetResultItem,
  ActionSheetResultItemHeading,
} from "./styles";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function LanguageList() {
  const [langueSelected, setLangueSelected] = useState();

  function handleSelectCity(itemPressed: any) {
    setLangueSelected(itemPressed);
  }

  return (
    <>
      {languages.map((item: any) => {
        return (
          <ActionSheetResultItem
            key={item.id}
            onPress={() => {
              handleSelectCity(item.id);
            }}
          >
            {item.id === langueSelected && (
              <ActiionSheetResultItemIcon>
                <Feather name="check" size={24} color="#637394" />
              </ActiionSheetResultItemIcon>
            )}
            <ActionSheetResultItemHeading>
              {item.description}
            </ActionSheetResultItemHeading>
          </ActionSheetResultItem>
        );
      })}
    </>
  );
}

export function ActionSheetSelectLanguage({ isOpen, onOpen, onClose }: Props) {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} size="full">
      <Actionsheet.Content
        backgroundColor="#1A2435"
        h={250}
        borderWidth={2}
        style={{ borderColor: "#223049", paddingHorizontal: 10 }}
      >
        <ActionSheetResult showsVerticalScrollIndicator={false}>
          {<LanguageList />}
        </ActionSheetResult>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
