/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-shadow: 0 2px 4px 0 #92919133;
  @media (max-width: 768px) {
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 60px;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const ButtonMenu = styled.button`
  outline: none;
  background: none;
  border: none;
  @media (max-width: 768px) {
  }
`;

export const IconMenu = styled.img`
  width: 28px;
  height: 17px;
  @media (max-width: 768px) {
    margin-top: 15px;
    width: 22px;
    height: 12px;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  gap: 10px;
  @media (max-width: 768px) {
    gap: 3px;
    width: 90px;
  }
`;

export const LogoImg = styled.img`
  width: 61px;
  height: 46px;
  border-radius: 5px;
  @media (max-width: 768px) {
    margin-left: 30px;
    margin-top: 10px;
    width: 32px;
    height: 22px;
    border-radius: 3px;
  }
`;

export const Title = styled.h1`
  margin-left: 5px;
  color: #e32727;
  font-family: "Quicksand";
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
export const TitleSub = styled.h1`
  color: #63aa4a;
  font-family: "Quicksand";
  margin-right: 50px;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
