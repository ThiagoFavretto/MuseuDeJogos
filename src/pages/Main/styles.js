import styled, { keyframes } from "styled-components";
import onda from "../../assets/onda.png";

const BorderAnimation = keyframes`
0% {
  border-radius: 0;
  width: 80%;

}
100% {
  border-radius: 0 50px 50px 0;
  width: 95%;
}
`;

export const Conteiner = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  background: #0a1c1f;
  display: flex;
`;

export const Content = styled.div`
  margin-top: 23px;
  width: 80%;
  height: 350px;
`;
export const PrincipalIMG = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://www.htxt.co.za/wp-content/uploads/2019/02/Grand-Theft-Auto-San-Andreas-Nightmare.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-left: 2%;
`;

export const Destaque = styled.div`
  width: 100%;
  max-width: 920px;
  height: 100%;
`;

export const ApoioImgClick = styled.div`
  height: 70%;
`;

export const Tx1 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fwww.blogcdn.com%2Fwww.engadget.com%2Fmedia%2F2010%2F08%2F100831-loveplus-02.jpg&client=amp-blogside-v2&signature=7259c6a9f5b0624eb69676e04fc546f3e0587b5e);
  background-size: 100% 100%;
`;

export const Tx2 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://uploads.spiritfanfiction.com/fanfics/capitulos/201510/fanfiction-originais-guerreiro-virtual--torneio-mundial-interativa-4641311-101020150433.jpg);
  background-size: 100% 100%;
`;

export const Tx3 = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(https://conteudo.imguol.com.br/c/entretenimento/40/2016/03/17/nervegear---ibm-1458244833870_615x300.jpg);
  background-size: 100% 100%;
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin-left: 5%;
  max-width: 496px;
  position: absolute;
  right: 20px;

  @media (max-width: 1150px) {
    width: 60%;
  }
`;

export const ItensSlider = styled.div`
  height: 250px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;

export const DestaqueHeader = styled.h1`
  margin: 40px;
  color: white;
`;

export const Left = styled.div`
  width: 60%;
  height: 90%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  height: 100%;
`;

export const BackgroundImg = styled.div`
  width: 60%;
  height: calc(100% - 80px);
  position: absolute;
  right: 0;
  background-image: url(${onda});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
`;

export const Title = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const SeeMore = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 30px;
  text-decoration: none;
`;
export const ImgClick = styled.div`
  display: flex;
  width: 80%;
  height: 80px;
  background-color: rgb(89, 89, 89, 0.4);
  transition: all 0.3s;
  color: white;
  padding: 0 0 0 10px;

  &:hover {
    background-color: rgb(38, 38, 38, 0.9);
    animation: ${BorderAnimation} 0.3s linear 0s;
    border-radius: 0 50px 50px 0;
    width: 95%;
  }
`;

export const TextoSlider = styled.div`
  color: white;
  font-size: 24px;
  padding: 10px;
  background: rgb(20, 20, 20, 0.4);
`;
