import React from "react";
import {
  Conteiner,
  PrincipalIMG,
  Destaque,
  ImgClick,
  Tx1,
  Tx2,
  Tx3,
  SliderContainer,
  ApoioImgClick,
  ItensSlider,
  Header,
  DestaqueHeader,
  Content,
  Left,
  Right,
  BackgroundImg,
  SeeMore,
  Title,
  TitleContainer,
  TextoSlider
} from "./styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

const Main = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    vertical: true,
    verticalSwiping: true
  };

  return (
    <Conteiner>
      <Left>
        <Header>
          <DestaqueHeader>Em destaque</DestaqueHeader>
        </Header>
        <Content>
          <Destaque>
            <PrincipalIMG>
              <ApoioImgClick></ApoioImgClick>
              <Link to="/GtaQuadra" style={{ textDecoration: "none" }}>
                <ImgClick>
                  <TitleContainer>
                    <Title>gta Hexa</Title>
                    <SeeMore>Ver mais</SeeMore>
                  </TitleContainer>
                </ImgClick>
              </Link>
            </PrincipalIMG>
          </Destaque>
        </Content>
      </Left>
      <Right>
        <BackgroundImg>
          <SliderContainer>
            <Slider {...settings}>
              <ItensSlider>
                <Tx1>
                  <Link to="/Muiiy" style={{ textDecoration: "none" }}>
                    <TextoSlider>Muiiy</TextoSlider>
                  </Link>
                </Tx1>
              </ItensSlider>
              <ItensSlider>
                <Tx2>
                  <Link
                    to="/Mechas-and-Punishment"
                    style={{ textDecoration: "none" }}
                  >
                    <TextoSlider>Mechas and Punishment</TextoSlider>
                  </Link>
                </Tx2>
              </ItensSlider>
              <ItensSlider>
                <Tx3>
                  <Link to="/Imersion" style={{ textDecoration: "none" }}>
                    <TextoSlider>Imersion</TextoSlider>
                  </Link>
                </Tx3>
              </ItensSlider>
            </Slider>
          </SliderContainer>
        </BackgroundImg>
      </Right>
    </Conteiner>
  );
};

export default Main;
