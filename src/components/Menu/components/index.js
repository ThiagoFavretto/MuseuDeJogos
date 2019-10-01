import React, { useState } from "react";
import {
  Container,
  Logo,
  Titulo,
  Subtitulo,
  Menu,
  Sanduiche,
  Iten1,
  Iten2,
  Iten3,
  Iten4,
  DivLeft,
  DivRight,
  ContainerResponsivo,
  ContainerItens
} from "./styles";
import { IoMdHome, IoIosAlbums } from "react-icons/io";
import { Link } from "react-router-dom";

const MainR = () => {
  const [ativo, setAtivo] = useState(false);

  const handleSetAtivo = () => {
    if (ativo) setAtivo(false);
    else setAtivo(true);
  };
  const Teste0 = props => {
    if (props.ativo) {
      console.log(ativo);
      return (
        <ContainerResponsivo>
          <ContainerItens>
            <Iten1 onClick={handleSetAtivo}>
              <Link
                to="/GtaQuadra"
                style={{ textDecoration: "none", color: "white" }}
              >
                GtaQuadra
              </Link>
            </Iten1>

            <Iten2 onClick={handleSetAtivo}>
              <Link
                to="/Mechas-and-Punishment"
                style={{ textDecoration: "none", color: "white" }}
              >
                Mechas and Punishment
              </Link>
            </Iten2>
            <Iten3 onClick={handleSetAtivo}>
              <Link
                to="/Muiiy"
                style={{ textDecoration: "none", color: "white" }}
              >
                Muiiy
              </Link>
            </Iten3>
            <Iten4 onClick={handleSetAtivo}>
              <Link
                to="/Imersion"
                style={{ textDecoration: "none", color: "white" }}
              >
                Imersion
              </Link>
            </Iten4>
          </ContainerItens>
        </ContainerResponsivo>
      );
    } else {
      return null;
    }
  };

  return (
    <Container>
      <Logo>
        <Titulo>Museu</Titulo>
        <Subtitulo>de Jogos</Subtitulo>
      </Logo>

      <Menu
        onClick={() => {
          setAtivo(false);
        }}
      >
        <DivLeft>
          <DivRight>
            <Link to="/" style={{ textDecoration: "none" }}>
              <IoMdHome size={40} color={"black"} />
            </Link>
          </DivRight>
        </DivLeft>
      </Menu>

      <Sanduiche onClick={handleSetAtivo}>
        <IoIosAlbums size={40} />
      </Sanduiche>
      <Teste0 ativo={ativo}></Teste0>
    </Container>
  );
};

export default MainR;
