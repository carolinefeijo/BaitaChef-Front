/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border: 1px solid #ccc;
  width: 350px;
  outline: none;
  border-radius: 50px;
  margin: 12px 0 12px 0;
  height: 50px;
  margin-right: 30px;
  @media (max-width: 768px) {
    margin-left: 30px;
    width: auto;
    height: 25px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  font-size: 17px;
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  margin-left: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const SearchButton = styled.button`
  margin-right: 8px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const SearchIcon = styled(GoSearch)`
  @media (max-width: 768px) {
    width: 14px;
    height: 14px;
  }
`;
