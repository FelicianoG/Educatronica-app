import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { styled } from "styled-components/native";
import { Header } from "./components/Header";
import { ListItem } from "./components/ListItem";

const STATUSBAR_HEIGHT = Constants.statusBarHeight;
const lista = [
  { titulo: "Práctica 1" },
  { titulo: "Práctica 2" },
  { titulo: "Práctica 3" },
  { titulo: "Práctica 4" },
  { titulo: "Práctica 4" },
  { titulo: "Práctica 4" },
  { titulo: "Práctica 4" },
  { titulo: "Práctica 4" },
  { titulo: "Práctica 4" },
];
export function Volume() {
  return (
    <MainContainer>
      <Statusbar></Statusbar>
      <StyledView>
        <Header></Header>
        <List>
          {lista.map((elemento) => {
            return <ListItem title={elemento.titulo}></ListItem>;
          })}
        </List>
      </StyledView>
      <StatusBar style="auto" />
    </MainContainer>
  );
}

const StyledView = styled.View`
  background-color: aliceblue;
  width: 100%;
  flex: 1;
`;

const MainContainer = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  justify-content: space-between;
`;

const Statusbar = styled.View`
  background-color: #86c218;
  height: ${STATUSBAR_HEIGHT}px;
  width: 100%;
`;
const List = styled.ScrollView``;
