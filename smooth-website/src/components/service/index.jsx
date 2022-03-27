import React from "react";
import styled from "styled-components";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
  margin-bottom: 5em;
`;

const ServiceImage = styled.img`
  height: 20em;
  width: 20em;
`;

const ServiceDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
  margin: 0 50px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 28px;
  font-weight: 700;
  margin: 8px 0;
`;

const Details = styled.p`
  color: #7a7a7a;
  font-size: 19px;
  text-align: center;
  max-width: 65%;
`;

export function Service(props) {
  const { imageUrl, title, details, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
      <ServiceDescriptionContainer>
        <Title>{title}</Title>
        <Details>{details}</Details>
      </ServiceDescriptionContainer>
      <ServiceImage src={imageUrl} />
    </ServiceContainer>
  );
}
