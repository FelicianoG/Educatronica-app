import { useState } from "react";
import Constants from "expo-constants";
import { styled } from "styled-components/native";
import RegresarIcon from "../../../assets/icons/Regresar.svg";
import LupaIcon from "../../../assets/icons/Lupa.svg";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;

export function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <VolumeHeaderShadow />
      <VolumeHeader>
        <VolumeHeaderContainer>
          <IconHolder>
            <RegresarIcon width={120} height={40} />
          </IconHolder>
          <TitleContainer>
            <H2>1 GRADO</H2>
            <H1>VOLUMEN 1</H1>
          </TitleContainer>
          <IconHolder>
            <LupaIcon width={120} height={40} />
          </IconHolder>
        </VolumeHeaderContainer>
        <Toggler>
          <ToggleOpt onPress={() => setToggle(true)} active={toggle}>
            <ToggleOptText>Prácticas</ToggleOptText>
          </ToggleOpt>
          <ToggleOpt onPress={() => setToggle(false)} active={!toggle}>
            <ToggleOptText>Proyectos</ToggleOptText>
          </ToggleOpt>
        </Toggler>
      </VolumeHeader>
    </>
  );
}

const Toggler = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #a0e522;
  border-radius: 80px;
  width: 450px;
  flex: 0.6;
  position: relative;
  top: 20px;
`;
const ToggleOpt = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => {
    return props.active ? "#86c218" : "#00000000";
  }};
  border-radius: 80px;
  height: 80%;
  margin: 12px;
  flex: 1;
`;
const ToggleOptText = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

const IconHolder = styled.View`
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
  background-color: #86c218;
  width: 100%;
  height: 260px;
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
  height: 260px;
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
  font-size: 60px;
  font-weight: 700;
  text-align: center;
  margin-top: -5px;
`;
const H2 = styled.Text`
  color: white;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
`;
