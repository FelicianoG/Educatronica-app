import { styled } from "styled-components/native";
import { IconCircle } from "../components/IconCircle";

export function ListItem({ title }) {
  return (
    <ListCont>
      <MainContainer>
        <IconCircle></IconCircle>
        <TextContainer>
          <H1>{title}</H1>
          <H2>Ver práctica</H2>
        </TextContainer>
      </MainContainer>
    </ListCont>
  );
}

const ListCont = styled.View`
  margin-top: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const CircleContainer = styled.View`
  box-sizing: border-box;

  padding-bottom: 25%;
  width: 25%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circulo = styled.View`
  border-radius: 220px;
  justify-content: center;
  align-items: center;
  transform: rotate(-30deg);
  background-color: #86c218;
  position: absolute;
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px;
`;

const MainContainer = styled.View`
  box-sizing: border-box;
  padding: 4px;
  padding-left: 20px;
  background-color: #ffffff;
  width: 70%;
  max-width: 650px;
  min-width: 600px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 81.533px;
  border-radius: 33px;
`;

const H1 = styled.Text`
  font-weight: 700;
  color: #797979;
  font-size: 42px;
`;

const H2 = styled.Text`
  color: #a5a5a5;
  font-size: 42px;
`;
