import { styled } from "styled-components/native";
import LEDIcon from "../../../assets/icons/LED.svg";

// import { Dimensions } from "react-native";
// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

export function ListItem({ title }) {
  return (
    <Listcont>
      <Maincontainer>
        <CircleContainer>
          <Circulo>
            <LEDIcon width={90} height={90} />
          </Circulo>
        </CircleContainer>
        <TextContainer>
          <TituloP>{title}</TituloP>
          <SubtituloP>Ver práctica</SubtituloP>
        </TextContainer>
      </Maincontainer>
    </Listcont>
  );
}

const Listcont = styled.View`
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

const Maincontainer = styled.View`
  padding-left: 20px;
  height: 142.5px;
  width: 652.5px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  column-gap: 81.533px;
  border-radius: 33px;
`;

const TituloP = styled.Text`
  font-weight: 700;
  color: #797979;
  font-size: 42px;
`;

const SubtituloP = styled.Text`
  color: #a5a5a5;
  font-size: 42px;
`;
