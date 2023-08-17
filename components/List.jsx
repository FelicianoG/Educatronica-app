import { styled } from "styled-components/native";
import LEDIcon from "../assets/icons/LED.svg"

export function List ({title}) {
    return (
        <Listcont>
            <Maincontainer>
                 <Circulo>
                <LEDIcon width={90} height={90}/>
                </Circulo>
                <TituloP>{title}</TituloP>
                <SubtituloP>Ver práctica</SubtituloP>
            </Maincontainer>
        </Listcont>
    )
 }

 const Listcont = styled.View`
 margin-top: 50px;
 width: 100%;
 align-items: center;
 justify-content: center;
 display: flex;
 `;

 const Circulo = styled.View`
 background-color: #86c218;
 borderRadius: 100px;
 height: 127.5px;
 width: 127.5px;
 transform: rotate(-30deg);
 align-items: center;
 justify-content: center;
 `;

 const Maincontainer = styled.View`
 padding-left: 20px;
 height: 142.5px;
 width: 652.5px;
 borderRadius: 33px;
 flexWrap: wrap;
 justify-content: center;
 align-content: left;
 column-gap: 81.533px;
 `;

const TituloP = styled.Text`
font-weight: 700;
color: #797979;
font-size: 42px;
`;

const SubtituloP = styled.Text`
color: #A5A5A5;
font-size: 42px;
`;

    // /* Rounded border */
    // border-radius: 50%;

    // /* Center the content */
    // align-items: center;
    // display: flex;
    // justify-content: center;

    // /* Size */
    // height: 4rem;
    // width: 4rem;