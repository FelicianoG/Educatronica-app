import { useState } from "react";
import Constants from "expo-constants";
import { styled } from "styled-components/native";
import GoBack from "../../../assets/icons/goback.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import { useWindowDimensions } from "react-native";
import { palette } from "../../../theme/palette";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export function Header({ color, navigation }) {
  const [toggle, setToggle] = useState(true);
  const { width } = useWindowDimensions();

  let rem;
  if (width < 600) {
    rem = 8;
  } else if (width < 900) {
    rem = 18;
  } else if (width < 1200) {
    rem = 18;
  } else {
    rem = 18;
  }
  let vrem;
  if (width < 600) {
    vrem = 12;
  } else if (width < 900) {
    vrem = 18;
  } else if (width < 1200) {
    vrem = 18;
  } else {
    vrem = 18;
  }

  const Toggler = styled.View`
    background-color: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: ${palette[color].light};
    border-radius: 80px;
    width: ${rem * 32}px;
    position: relative;
    top: 20px;
    padding: ${rem * 0.2}px 0;
  `;
  const ToggleOpt = styled.TouchableOpacity`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => {
      return props.active ? palette[color].medium : "#00000000";
    }};
    border-radius: 80px;
    height: 80%;
    margin: 12px;
    padding-left: ${rem * 1}px;
    padding-right: ${rem * 1}px;
    flex: 1;
  `;
  const ToggleOptText = styled.Text`
    color: white;
    font-size: ${1.2 * rem}px;
    font-weight: 700;
  `;

  const IconHolder = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const TitleContainer = styled.View`
    position: relative;
    top: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const VolumeHeader = styled.View`
    background-color: ${palette[color].medium};
    width: 100%;
    margin: auto;
    height: ${14 * vrem}px;
    border-radius: 0 0 80px 80px;
    align-items: center;
    box-shadow: black 8px 8px;
  `;
  const VolumeHeaderShadow = styled.View`
    position: absolute;
    transform: scale(1.01);
    top: 10px;
    background-color: #00000020;
    width: 100%;
    height: ${14 * vrem}px;
    border-radius: 0 0 80px 80px;
    align-items: center;
    box-shadow: black 8px 8px;
  `;
  const VolumeHeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    /* background-color: red; */
    width: 100%;
    height: 50%;
    justify-content: space-between;
  `;
  const H1 = styled.Text`
    color: white;
    font-size: ${3 * rem}px;
    font-weight: 700;
    text-align: center;
    margin-top: -5px;
  `;
  const H2 = styled.Text`
    color: white;
    font-size: ${2 * rem}px;
    font-weight: 700;
    text-align: center;
  `;

  return (
    <>
      <VolumeHeaderShadow />
      <VolumeHeader size={"30"}>
        <VolumeHeaderContainer>
          <IconHolder>
            <GoBack
              onPress={() => {
                navigation.goBack();
              }}
              width={120}
              height={40}
            />
          </IconHolder>
          <TitleContainer>
            <H2>1 GRADO</H2>
            <H1>VOLUMEN 1</H1>
          </TitleContainer>
          <IconHolder>
            <SearchIcon width={120} height={40} />
          </IconHolder>
        </VolumeHeaderContainer>
        <Toggler>
          <ToggleOpt onPress={() => setToggle(true)} active={toggle}>
            <ToggleOptText>MODULO 1</ToggleOptText>
          </ToggleOpt>
          <ToggleOpt onPress={() => setToggle(false)} active={!toggle}>
            <ToggleOptText>MODULO 2</ToggleOptText>
          </ToggleOpt>
          <ToggleOpt onPress={() => setToggle(false)} active={!toggle}>
            <ToggleOptText>MODULO 3</ToggleOptText>
          </ToggleOpt>
        </Toggler>
      </VolumeHeader>
    </>
  );
}
