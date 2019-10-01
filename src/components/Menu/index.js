import React from "react";
import {
  Container,
  Logo,
  Titulo,
  Subtitulo,
  Menu,
  ItensMenu,
  Iten1,
  Iten2,
  Iten3,
  Iten4,
  DivLeft,
  DivRight,
  General
} from "./styles";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import MainR from "./components/index";
const Main = () => {
  return (
    <General>
      <Container>
        <Logo>
          <Titulo>Museu</Titulo>
          <Subtitulo>de Jogos</Subtitulo>
        </Logo>

        <Menu>
          <DivLeft>
            <DivRight>
              <Link to="/" style={{ textDecoration: "none" }}>
                <IoMdHome size={40} color={"black"} />
              </Link>
            </DivRight>
          </DivLeft>
        </Menu>

        <ItensMenu>
          <Link
            to="/GtaQuadra"
            style={{ textDecoration: "none", marginLeft: "40px" }}
          >
            <Iten1>GtaQuadra</Iten1>
          </Link>
          <Link
            to="/Mechas-and-Punishment"
            style={{ textDecoration: "none", marginLeft: "40px" }}
          >
            <Iten2>Mechas and Punishment</Iten2>
          </Link>
          <Link
            to="/Muiiy"
            style={{ textDecoration: "none", marginLeft: "40px" }}
          >
            <Iten3>Muiiy</Iten3>
          </Link>
          <Link
            to="/Imersion"
            style={{ textDecoration: "none", marginLeft: "40px" }}
          >
            <Iten4>Imersion</Iten4>
          </Link>
        </ItensMenu>
      </Container>
      <MainR></MainR>
    </General>
  );
};

export default Main;
