import { Image } from "react-native";
import styled from "styled-components";
import { palette } from "../../theme/palette";
import GoBackIcon from "../../assets/icons/goback.svg";
import ArduinoIcon from "../../assets/kitComponents/arduino-icon.svg";

export const KitComponent = ({ navigation }) => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>Componentes</Title>
        <GoBackIconHolder
          onPress={() => {
            navigation.goBack();
          }}
        >
          <GoBackIcon style={{ flex: 1 }} color={"white"} />
        </GoBackIconHolder>
      </TitleContainer>
      <DescriptionContainer>
        <ImageHolder>
          <ArduinoIcon style={imageStyles.icon}></ArduinoIcon>
          <Image style={imageStyles.image} source={require("../../assets/kitComponents/arduino.png")}></Image>
        </ImageHolder>
        <ComponentTitle>ARDUINO UNO</ComponentTitle>
        <DescriptionTitle>Descripción</DescriptionTitle>
        <Description>
          Es el corazón de los proyectos, el cual se encargará de ejecutar el programa y poner en funcionamiento los componentes que se conecten a él,
          de acuerdo a la lógica de programación utilizada.
        </Description>
      </DescriptionContainer>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  background-color: ${palette.skyBlue.medium};
  height: 100%;
  align-items: center;
`;
const TitleContainer = styled.View`
  min-height: 140px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  margin-left: 80px;
  font-weight: 800;
  font-size: 40px;
  flex: 1;
`;
const ComponentTitle = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 60px;
`;
const DescriptionTitle = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 30px;
`;
const Description = styled.Text`
  color: white;
  font-weight: 400;
  font-size: 26px;
  margin-top: 30px;
`;
const DescriptionContainer = styled.View`
  width: 80%;
`;
const GoBackIconHolder = styled.TouchableOpacity`
  min-height: 100px;
  flex: 1;
  align-items: flex-end;
  padding-right: 60px;
  min-height: 40px;
`;

const ImageHolder = styled.View`
  margin-top: 60px;
  margin-bottom: 40px;
  min-height: 100px;
  height: 460px;
`;

//todo Make sure all incomming images have same dimensions
const imageStyles = {
  icon: { position: "absolute", left: 0, top: 0 },
  image: { position: "absolute", right: 0, bottom: 0 },
};
