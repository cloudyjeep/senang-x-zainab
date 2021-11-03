import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #dddddd;
  background: ${(props) => props.bg};
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0px 1px 4px 1px #eee;
`;
const Divider = styled.div`
  height: 1px;
  background: #eeee;
  margin: 16px 0 24px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

export default ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Divider />
    {children}
  </Container>
);
