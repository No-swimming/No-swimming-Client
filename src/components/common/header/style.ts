import styled from "styled-components";
import { Link } from "react-router-dom";
import { Basic } from "../../../style/Share/color";

export const AllPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OutLetContainer = styled.div`
  margin-top: 70px;
`;

export const Container = styled.div`
  background-color: white;
  height: 70px;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
  border-bottom: 1px solid #e6e6e6;
  > div {
    display: flex;
    align-items: center;
  }
  > div:first-child {
    gap: 60px;
    > img {
      width: 90px;
      height: 22px;
    }
  }
  > div:nth-child(2) {
    gap: 12px;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 727px) {
    display: none;
  }
`;

export const MenuContent = styled(Link)`
  display: flex;
  gap: 11px;
  text-decoration: none;
  color: rgba(${Basic.popupBG});
  transition: 2s;
  > p {
    @media (max-width: 1191px) {
      display: none;
    }
    font-size: 20px;
  }
  > :hover {
    color: black;
    font-weight: bold;
  }
`;

export const Role = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: black;
  padding: 2px;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 20px;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 28px;
  height: 28px;
`;
