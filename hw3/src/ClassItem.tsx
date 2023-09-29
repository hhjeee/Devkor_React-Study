import React from "react";
import styled from "styled-components";

interface ItemProps {
  image: string;
  imgVer: string;
  model?: string;
  title: string;
  price?: string;
  detail?: string;
}

interface ClassItemProps {
  item: ItemProps;
}

interface imgProps {
  imgVer: string;
}

export default function Wrap({ item }: ClassItemProps) {
  const { image, imgVer, model, title, price, detail } = item;
  return (
    <BigContainer>
      <img src={image} alt="img" />
      <SmallContainer imgVer={imgVer}>
        <span className="model">{model}</span>
        <h3>{title}</h3>
        <span className="price">
          {price === undefined ? "" : `₩${price}부터`}
        </span>
        <span className="detail">{detail}</span>
      </SmallContainer>
    </BigContainer>
  );
}

const BigContainer = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    scale: 1.02;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
  }

  img {
    border-radius: 10px;
    margin-right: 1rem;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
  }
  &:first-child {
    margin-left: 200px;
  }
`;
const SmallContainer = styled.div<imgProps>`
  padding: 30px;
  position: absolute;
  top: 0%;
  left: 0%;
  color: ${(imgProps) =>
    imgProps.imgVer === "light" ? "#1d1d1f" : "#f5f5f7"}};

  .model {
    font-size: 12px;
  }
  h3 {
    font-size: 26px;
    font-weight: border;
    width: 320px;
    margin-top: 12px;
    margin-bottom: 10px;
  }
  .price {
    font-size: 17px;
  }
`;
