import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { styled } from "styled-components/native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";
import { Module } from "./components/Module";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;
const listExample = [{ title: "Práctica 1" }, { title: "Práctica 2" }, { title: "Práctica 3" }, { title: "Práctica 4" }, { title: "Práctica 4" }];
export function Volume() {
  return (
    <MainContainer>
      <Statusbar></Statusbar>
      <StyledView>
        <Header></Header>
        <List>
          <Module title={"MÓDULO 1"} month={"Octubre"}>
            {listExample.map((element, i) => {
              return <ListItem key={i} title={element.title}></ListItem>;
            })}
          </Module>
          <Module title={"MÓDULO 2"} month={"Noviembre"}>
            {listExample.map((element, i) => {
              return <ListItem key={i} title={element.title}></ListItem>;
            })}
          </Module>
        </List>
      </StyledView>
      <StatusBar style="auto" />
    </MainContainer>
  );
}

const StyledView = styled.View`
  background-color: #f4f4f4;
  width: 100%;
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const Statusbar = styled.View`
  background-color: #86c218;
  height: ${STATUSBAR_HEIGHT}px;
  width: 100%;
`;
const List = styled.ScrollView``;
