import styled from "styled-components";

export const CategoryList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CategoryItem = styled.li`
  width: calc((100% - 10px) / 2);
`;

export const CardLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductImg = styled.img`
  display: block;
  margin-bottom: 10px;
  width: 100%;
  height: auto;
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

export const RatingElement = styled.div`
  position: relative;
  &::before {
    content: "★★★★★";
    color: #959595;
  }
`;

export const RatedElement = styled.span`
  position: absolute;
  width: ${(props) => props.rating};
  height: 100%;
  left: 0;
  top: 0;
  overflow: hidden;
  &::before {
    content: "★★★★★";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: #ff4100;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 15px;
  letter-spacing: 0.02em;
  text-align: left;
`;
