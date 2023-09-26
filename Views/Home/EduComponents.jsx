import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { palette } from "../../theme/palette";
import GoBack from "../../assets/icons/goback.svg";
import { View } from "react-native";

export const EduComponents = ({ compState, navigation }) => {
  const { showComp, setShowComp } = compState;
  return (
    <Main style={{ top: showComp ? 0 : 1000, borderRadius: showComp ? 0 : 60, position: "absolute" }}>
      <TouchableOpacity
        disabled={showComp}
        style={{ width: "100%", height: "100%" }}
        onPress={(e) => {
          !showComp && setShowComp((prev) => !prev);
        }}
      >
        <CompTitle>COMPONENTES</CompTitle>
        {showComp && (
          <GoBackComp
            onPress={() => {
              setShowComp(false);
            }}
          >
            <GoBack color={"white"} width={60} height={60} />
          </GoBackComp>
        )}
        <ContentPadding>
          <Content>
            <ContentTitle>Más recientes</ContentTitle>
            <ContentTitle>Sugerencias</ContentTitle>
            <List contentContainerStyle={{ alignItems: "center" }}>
              <View style={{ width: "75%" }}>
                <ListItem navigation={navigation} title={"Arduino UNO"} />
                <ListItem title={"Sensor de movimiento"} />
                <ListItem title={"Resistencia"} />
                <ListItem title={"Zumbador"} />
                <ListItem title={"Servomotor"} />
                <ListItem title={"Sensor de movimiento"} />
                <ListItem title={"Resistencia"} />
                <ListItem title={"Zumbador"} />
                <ListItem title={"Servomotor"} />
                <ListItem title={"Sensor de movimiento"} />
                <ListItem title={"Resistencia"} />
                <ListItem title={"Zumbador"} />
              </View>
            </List>
          </Content>
        </ContentPadding>
      </TouchableOpacity>
    </Main>
  );
};

const ListItem = ({ title, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("ComponentArduinoUno");
      }}
    >
      <ListItemMainContainer>
        <GoBack color={palette.navyBlue.light} width={80} height={80}></GoBack>
        <ListItemTitle>{title}</ListItemTitle>
      </ListItemMainContainer>
      <ListItemBottomBar />
    </TouchableOpacity>
  );
};

const Main = styled.View`
  background-color: ${palette.skyBlue.medium};
  width: 100%;
  min-height: 1400px;
  display: absolute;
  /* border-radius: 40px; */
  align-items: center;
  /* border-color: red;
  border-width: 3px; */
`;
const ContentPadding = styled.View`
  width: 100%;
  min-height: 140px;
  align-items: center;
`;
const List = styled.ScrollView`
  width: 100%;
  max-height: 680px;
`;
const ListItemMainContainer = styled.View`
  width: 100%;
  margin: 20px;
  flex-direction: row;
  align-items: center;
  min-height: 80px;
  /* border-bottom-width: 6px;
  border-bottom-color: grey; */
`;
const ListItemBottomBar = styled.View`
  height: 10px;
  width: 75%;
  margin: auto;
  background-color: ${palette.neutral.light};
  border-radius: 12px;
`;

const ListItemTitle = styled.Text`
  margin-left: 40px;
  flex: 1;
  font-size: 40px;
  font-weight: 700;
  color: ${palette.navyBlue.light};
`;

const Content = styled.View`
  background-color: white;
  width: 95%;
  border-top-right-radius: 90px;
  border-top-left-radius: 90px;
  min-height: 1000px;
  align-items: center;
`;
const ContentTitle = styled.Text`
  font-size: 36px;
  color: #000000;
  margin: 30px;
  font-weight: 800;
  width: 100%;
  padding-left: 80px;
  margin-top: 60px;
`;
const CompTitle = styled.Text`
  font-size: 60px;
  color: white;
  margin: 30px;
  text-align: center;
`;
//todo cambiar a svg
const GoBackComp = styled.TouchableOpacity`
  position: absolute;
  top: 42px;
  right: 40px;
  color: white;
  text-align: center;
  font-size: 60px;
`;
