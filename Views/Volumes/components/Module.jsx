import { styled } from "styled-components/native";

export function Module({ title, month, children }) {
  return (
    <MainContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Month>{month}</Month>
      </TextContainer>
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.View`
  margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const TextContainer = styled.View`
  align-self: flex-start;
  justify-content: center;
  padding-left: 100px;
`;
const Title = styled.Text`
  font-weight: 700;
  color: #5e8811;
  font-size: 42px;
`;
const Month = styled.Text`
  font-weight: 700;
  color: #84cc25;
  font-size: 42px;
`;
