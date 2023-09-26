import React, { useState } from "react";
import styled from "styled-components";
import { palette } from "../../theme/palette";
import { EduComponents } from "./EduComponents";
import Vol1Icon from "../../assets/icons/volumes/Vol1.svg";
import Vol2Icon from "../../assets/icons/volumes/Vol2.svg";
import Vol3Icon from "../../assets/icons/volumes/Vol3.svg";

const Home = ({ navigation }) => {
  const [showComp, setShowComp] = useState(false);
  const sizes = {
    lg: 120,
    md: 90,
    sm: 60,
  };
  return (
    <Main>
      <Header></Header>
      <Volumes>
        <Title>VOLÚMENES</Title>
        <List>
          <Volume
            onPress={() => {
              navigation.push("Volume1");
            }}
            $color={palette.green.medium}
          >
            <Vol1Icon width={230} height={230} style={{ position: "absolute", left: -10, top: 0, opacity: 0.8 }}></Vol1Icon>
            <VolTitleContainer>
              <VolTitle>VOLUMEN 1</VolTitle>
              <VolSubTitle>1˚ GRADO</VolSubTitle>
            </VolTitleContainer>
          </Volume>
          <Volume
            navigation={navigation}
            onPress={() => {
              navigation.push("Volume2");
            }}
            $color={palette.orange.medium}
          >
            <Vol2Icon width={240} height={240} style={{ position: "absolute", left: 6, top: -14, opacity: 0.8 }}></Vol2Icon>
            <VolTitleContainer>
              <VolTitle>VOLUMEN 2</VolTitle>
              <VolSubTitle>2˚ GRADO</VolSubTitle>
            </VolTitleContainer>
          </Volume>
          <Volume
            onPress={() => {
              navigation.push("Volume3");
            }}
            $color={palette.yellow.medium}
          >
            <Vol3Icon width={260} height={260} style={{ position: "absolute", left: 0, top: -12, opacity: 0.8 }}></Vol3Icon>
            <VolTitleContainer>
              <VolTitle>VOLUMEN 3</VolTitle>
              <VolSubTitle>3˚ GRADO</VolSubTitle>
            </VolTitleContainer>
          </Volume>
        </List>
      </Volumes>
      <EduComponents navigation={navigation} compState={{ showComp, setShowComp }}></EduComponents>
    </Main>
  );
};

const Main = styled.View`
  /* background-color: #d334ce; */
  height: 100%;
`;

const Header = styled.View`
  /* background-color: blue; */
  height: 6%;
`;

const Volumes = styled.View`
  /* background-color: #00ff22; */
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  text-align: center;
  font-size: 60px;
  color: ${palette.navyBlue.dark};
  margin: 20px;
`;

const List = styled.View`
  /* background-color: #3b78ae; */
  width: 85%;
  flex: 1;
  align-items: center;
  max-height: 800px;
`;

const Volume = styled.TouchableOpacity`
  background-color: ${(props) => {
    return props.$color;
  }};
  margin: 20px;
  border-radius: 20px;
  justify-content: flex-start;
  flex: 1;
  align-items: center;
  width: 80%;
  overflow: hidden;
`;

const VolTitleContainer = styled.View`
  /* background-color: aqua; */
  height: 100%;
  width: 40%;
  justify-content: center;
  position: relative;
  right: -130px;
`;

const VolTitle = styled.Text`
  color: white;
  font-size: 40px;
`;

const VolSubTitle = styled.Text`
  color: white;
  font-size: 30px;
`;

export default Home;
