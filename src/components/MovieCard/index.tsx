import React from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet } from "react-native";

import {
  Container,
  MovieImage,
  MovieClassificationBox,
  MovieClassification,
  MovieTitle,
  MovieGenre,
} from "./styles";

interface MovieData {
  id: number;
  title: string;
  genre: string;
  image: string;
  classification: number;
}

interface Props {
  data: MovieData;
}

export function MovieCard({ data }: Props) {
  const navigation = useNavigation<any>();

  function handleNavigateToAboutMovie() {
    navigation.navigate("About", { state: data });
  }

  return (
    <Container
      style={[styles.gap, styles.shadow]}
      onPress={handleNavigateToAboutMovie}
    >
      <MovieImage
        source={{
          uri: data.image,
        }}
      />
      <MovieClassificationBox isGood={data.classification >= 7}>
        <MovieClassification>{data.classification}</MovieClassification>
      </MovieClassificationBox>

      <MovieTitle>{data.title}</MovieTitle>
      <MovieGenre>{data.genre}</MovieGenre>
    </Container>
  );
}

const styles = StyleSheet.create({
  gap: {
    marginHorizontal: 1,
  },
  shadow: {
    shadowColor: "#07090D",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.21,
    shadowRadius: 8.19,
    elevation: 11,
  },
});
