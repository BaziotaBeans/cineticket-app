import { useState, useCallback, useRef } from "react";

import { useRoute } from "@react-navigation/native";

import YoutubePlayer from "react-native-youtube-iframe";

import { TouchableWithoutFeedback, StyleSheet, Alert } from "react-native";

import { ResizeMode } from "../../utils/Enum";

import { FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Video } from "expo-av";

import {
  AboutContainer,
  VideoWrapper,
  VideoStateButtonWrapper,
  VideoStateButton,
  RatingContainer,
  RatingItem,
  RatingItemHeading,
  RatingItemSubHeading,
  LineSeparator,
  DetailWrapper,
  DetailDescription,
  DetailParamsRow,
  DetailParamsRowHeading,
  DetailParamsRowClassification,
  DetailParamsRowSubHeading,
  Footer,
  SelectSessionButton,
  SelectSessionHeading,
} from "./styles";

export function MovieAbout() {
  const video = useRef(null);
  const [status, setStatus] = useState<any>({});
  const [activeController, setActiveController] = useState(false);
  const [playing, setPlaying] = useState(false);
  const { params } = useRoute<any>();

  function handlePressIn() {
    console.log("yes");
    setActiveController(true);
  }

  function handlePressOut() {
    setActiveController(false);
  }

  function onBlur() {
    console.log("clicked");
  }

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  console.log(params?.state?.id_video);

  return (
    <>
      <AboutContainer
        contentContainerStyle={{ paddingBottom: 0 }}
        showsVerticalScrollIndicator={false}
      >
        <VideoWrapper
          onStartShouldSetResponder={(evt) => true}
          onMoveShouldSetResponder={(evt) => true}
          onResponderGrant={handlePressIn}
          onResponderMove={handlePressIn}
        >
          <YoutubePlayer
            height={420}
            play={playing}
            videoId={params?.state?.id_video}
            onChangeState={onStateChange}
          />
        </VideoWrapper>

        {/* <TouchableWithoutFeedback onPress={onBlur}>
          <VideoWrapper
            onStartShouldSetResponder={(evt) => true}
            onMoveShouldSetResponder={(evt) => true}
            onResponderGrant={handlePressIn}
            onResponderMove={handlePressIn}
          >
            <Video
              ref={video}
              style={{ flex: 1 }}
              source={{
                uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
              }}
              useNativeControls
              resizeMode={ResizeMode.COVER}
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <VideoStateButtonWrapper
              colors={["#303C42", "#21242A"]}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 0.0, x: 1.0 }}
              isActive={activeController}
            >
              <VideoStateButton
                onPress={() =>
                  status.isPlaying
                    ? video.current.pauseAsync()
                    : video.current.playAsync()
                }
              >
                {status.isPlaying ? (
                  <Ionicons
                    name="ios-pause"
                    size={24}
                    color="rgba(255, 255, 255, 0.5)"
                  />
                ) : (
                  <FontAwesome5
                    name="play"
                    size={24}
                    color="rgba(255, 255, 255, 0.5)"
                  />
                )}
              </VideoStateButton>
            </VideoStateButtonWrapper>
          </VideoWrapper>
        </TouchableWithoutFeedback> */}

        <RatingContainer
          colors={["#1A2231", "#1E283C"]}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 2.0, x: 0.0 }}
        >
          <RatingItem>
            <RatingItemHeading>
              {params?.state?.about?.imdb_classification}
            </RatingItemHeading>
            <RatingItemSubHeading>IMDB</RatingItemSubHeading>
          </RatingItem>
          <LineSeparator />
          <RatingItem>
            <RatingItemHeading>
              {params?.state?.about?.kinopoisk_classification}
            </RatingItemHeading>
            <RatingItemSubHeading>Kinopoisk</RatingItemSubHeading>
          </RatingItem>
        </RatingContainer>

        <DetailWrapper>
          <DetailDescription>
            {params?.state?.about?.description}
          </DetailDescription>
          <DetailParamsRow>
            <DetailParamsRowHeading>Certificado</DetailParamsRowHeading>

            <DetailParamsRowClassification>
              <DetailParamsRowSubHeading>
                {params?.state?.about?.certificate}
              </DetailParamsRowSubHeading>
            </DetailParamsRowClassification>
          </DetailParamsRow>

          <DetailParamsRow>
            <DetailParamsRowHeading>Runtime</DetailParamsRowHeading>

            <DetailParamsRowSubHeading>
              {params?.state?.about?.runtime}
            </DetailParamsRowSubHeading>
          </DetailParamsRow>

          <DetailParamsRow>
            <DetailParamsRowHeading>Release</DetailParamsRowHeading>

            <DetailParamsRowSubHeading>
              {params?.state?.about?.release}
            </DetailParamsRowSubHeading>
          </DetailParamsRow>

          <DetailParamsRow>
            <DetailParamsRowHeading>Genre</DetailParamsRowHeading>

            <DetailParamsRowSubHeading>
              {params?.state?.about?.genre}
            </DetailParamsRowSubHeading>
          </DetailParamsRow>

          <DetailParamsRow>
            <DetailParamsRowHeading>Director</DetailParamsRowHeading>

            <DetailParamsRowSubHeading>
              {params?.state?.about?.Director}
            </DetailParamsRowSubHeading>
          </DetailParamsRow>

          <DetailParamsRow>
            <DetailParamsRowHeading>Cast</DetailParamsRowHeading>

            <DetailParamsRowSubHeading>
              {params?.state?.about?.Cast}
            </DetailParamsRowSubHeading>
          </DetailParamsRow>
        </DetailWrapper>
      </AboutContainer>
      <Footer style={styles.shadow}>
        <SelectSessionButton>
          <SelectSessionHeading>Select Session</SelectSessionHeading>
        </SelectSessionButton>
      </Footer>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
});
