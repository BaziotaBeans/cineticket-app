import React, { useEffect, useState } from "react";
import { useDisclose } from "native-base";
import { StatusBar } from "react-native";

import { api } from "../../service/api";

import { Header } from "../../components/Header";

import SearchSVG from "../../assets/SVG/Search.svg";

import { MovieCard } from "../../components/MovieCard";
import { LoadAnimation } from "../../components/LoadingSpinner";
import { ActionSheetSelectCity } from "../../components/ActionSheetSelectCity";
import { ActionSheetSelectLanguage } from "../../components/ActionSheetSelectLanguage";
import { ActionSheetLogin } from "../../components/ActionSheetLogin";

import { Container, Content, Row, SectionTItle, Button } from "./styles";
import { Spinner } from "../../components/Spinner";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const {
    isOpen: isOpenCityList,
    onOpen: onOpenCityList,
    onClose: onCloseCityList,
  } = useDisclose();

  const {
    isOpen: isOpenLanguageList,
    onOpen: onOpenLanguageList,
    onClose: onCloseLanguageList,
  } = useDisclose();

  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclose();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await api.get("movie");
        setMovie(response.data);
      } catch (error) {
        console.log("Erro");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadAnimation />
      ) : (
        <>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#1D273A"
            translucent
            animated={true}
          />

          <Container
            zoomScale={2}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}
            persistentScrollbar={false}
          >
            <Header
              onOpenCityList={onOpenCityList}
              onOpenLanguageList={onOpenLanguageList}
              onOpenLogin={onOpenLogin}
            />

            <Row>
              <SectionTItle>Now in cinemas</SectionTItle>

              <Button>
                <SearchSVG />
              </Button>
            </Row>
            <Content>
              {movie.map((item) => {
                return <MovieCard key={item?.id} data={item} />;
              })}
            </Content>
          </Container>

          <ActionSheetSelectCity
            isOpen={isOpenCityList}
            onOpen={onOpenCityList}
            onClose={onCloseCityList}
          />

          <ActionSheetSelectLanguage
            isOpen={isOpenLanguageList}
            onOpen={onOpenLanguageList}
            onClose={onCloseLanguageList}
          />

          <ActionSheetLogin
            isOpen={isOpenLogin}
            onOpen={onOpenLogin}
            onClose={onCloseLogin}
          />
        </>
      )}
    </>
  );
}
