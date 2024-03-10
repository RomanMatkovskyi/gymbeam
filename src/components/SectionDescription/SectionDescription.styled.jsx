import styled from "styled-components";

export const MainTitle = styled.h2`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-bottom: 15px;
  }
`;

export const SectionDescr = styled.p`
  margin-bottom: 20px;
`;

export const SectionDescrUp = styled.p`
  margin-top: 20px;
`;

export const SpanColor = styled.a`
  font-weight: 600;
  color: #ff4100;
  transition: color 0.3s ease;

  &:hover {
    color: #cc3400;
  }
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 15px;
`;

export const DescriptionList = styled.ul`
  margin-top: 30px;
  margin-bottom: 0;
  list-style: disc;
`;

export const MoreBtn = styled.button`
  cursor: pointer;

  padding: 0;
  border: none;
  background-color: transparent;
  color: #ff4100;
`;
