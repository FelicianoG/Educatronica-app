import { styled } from "styled-components/native";
import LedIcon from "../../../assets/icons/led.svg";

export function IconCircle({ icon, size = "md" }) {
  const sizes = {
    lg: 120,
    md: 90,
    sm: 60,
  };
  //todo Get icon from prop
  return (
    <CircleContainer>
      <Circle>
        <LedIcon width={sizes[size]} height={sizes[size]} />
      </Circle>
    </CircleContainer>
  );
}

const CircleContainer = styled.View`
  box-sizing: border-box;
  padding-bottom: 25%;
  width: 25%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Circle = styled.View`
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
