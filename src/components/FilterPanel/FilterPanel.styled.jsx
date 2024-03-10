import styled from "styled-components";

export const FilterBtn = styled.button`
  margin-left: auto;
  margin-right: 5px;
  margin-bottom: 20px;
  border: none;
  padding: 5px 20px;
  font-size: 15px;
  font-weight: 700;
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #858585;
  }
`;

export const SingleInputsContainer = styled.div`
  margin-top: 20px;
`;

export const FilterName = styled.h2`
  margin-bottom: 8px;
`;
