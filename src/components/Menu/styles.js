import styled from "styled-components";

export const General = styled.div``;
export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: #ddd;
  display: flex;
  @media screen and (max-width: 1040px) {
    display: none;
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
  margin-left: 100px;
  margin-top: 33px;

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
  cursor: pointer;
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
  cursor: pointer;
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

export const ItensMenu = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Iten1 = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  color: white;
  background: #850101;
  font-size: 18px;
  margin-top: 30px;
  width: 100px;
  height: 50px;

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

export const Iten2 = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  color: white;
  background: #850101;
  font-size: 18px;
  margin-top: 30px;
  width: 230px;
  height: 50px;

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
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  color: white;
  background: #850101;
  font-size: 18px;
  margin-top: 30px;
  width: 100px;
  height: 50px;

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
  display: flex;
  justify-content: center;
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 5px 5px 0 0;
  color: white;
  background: #850101;
  font-size: 18px;
  margin-top: 30px;
  width: 100px;
  height: 50px;

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
