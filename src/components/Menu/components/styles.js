import styled, { keyframes } from "styled-components";

const Slide = keyframes`
0% {
width: 0;

}
100% {
  width: 350px;
}
`;
export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #ddd;
  display: none;
  @media screen and (max-width: 1040px) {
    display: flex;
  }
`;

export const Titulo = styled.h1`
  color: #850101;
`;
export const Subtitulo = styled.div`
  font-size: 28px;
  margin-left: 20px;
  color: #850101;
  white-space: nowrap;
`;
export const Logo = styled.div`
  margin-left: 20px;
`;

export const Menu = styled.div`
  cursor: pointer;
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 20%;
  margin-top: 25px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.2px;
    bottom: 0;
    background-color: #000;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const DivLeft = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:before {
    content: "";
    position: absolute;
    width: 1.2px;
    height: 100%;
    background-color: #000;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleY(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleY(1);
  }
`;

export const DivRight = styled.div`
  position: relative;
  width: 40px;
  height: 40px;

  &:before {
    content: "";
    position: absolute;
    right: 1%;
    width: 1.2px;
    height: 100%;
    background-color: #000;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleY(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleY(1);
  }
`;

export const Sanduiche = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 30px;
  position: absolute;
  right: 20px;
`;

export const Iten1 = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  color: white;
  background: #850101;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const Iten2 = styled.div`
  white-space: nowrap;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  color: white;
  background: #850101;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const Iten3 = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  color: white;
  background: #850101;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const Iten4 = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px;
  color: white;
  background: #850101;
  font-size: 24px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 0;
    background-color: #fff;
    visibility: hidden;
    transform: scaleX(0);
    transition: 0.25s linear;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export const ContainerResponsivo = styled.div`
  position: absolute;
  background: #471111;
  width: 350px;
  height: 250px;
  top: 100px;
  right: 20px;
  z-index: 1;
  border-radius: 25px 0 0 25px;
  animation: ${Slide} 0.1s linear 0s;
`;

export const ContainerItens = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
