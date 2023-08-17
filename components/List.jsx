import { styled } from "styled-components/native";
import LEDIcon from "../assets/icons/LED.svg";

export function List ({title}) {
    return (
      <ListContainer>
    <MainContainer>
      <Icon>
        <LEDIcon width={240} height={80} />
      </Icon>
      <Div>
        <H3>{title}</H3>
        <P>Ver práctica</P>
      </Div>
    </MainContainer>
    </ListContainer>
    ) 
}

const MainContainer = styled.View`
  width: 696px;
  height: 152px;
  margin: 20px;
  border-radius: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  flexWrap: wrap;
  
`;

const H3= styled.Text`
  color: #797979;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
`;

const P= styled.Text`
  color: #A5A5A5;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
`;

const Icon = styled.View`
  background-color: #86c218;
  width: 136px;
  height: 136px;
  border-radius: 70px;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
  transform: rotate(-30deg);
`;

const Div = styled.View`
  display: flex;
  justify-content: center;
  align-items: left;
  margin: 0px 70px;
`;

const ListContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

