import React, { memo, useMemo } from "react";
import styled from "styled-components";
import Container from "../component/Container";
import {
  Card,
  CardBox,
  CardHeader,
  CardItem,
  CardAvatar,
  CardAction,
  CardBody,
  CardContainer,
} from "../component/Card";
import { TextJumbo } from "../component/Text";

// component Jawaban A
const JawabanA = ({ data }) => {
  return (
    <Card>
      <CardHeader>Vaccination</CardHeader>
      {(data || []).map((item, i) => (
        <CardItem key={i}>
          <CardAvatar img="" />
          <CardBody>
            <div style={{ fontSize: "20px", marginBottom: "10px" }}>
              {item.name}
            </div>
            {item.clock}
          </CardBody>
          <CardAction>. . .</CardAction>
        </CardItem>
      ))}
    </Card>
  );
};

// component Jawaban A
const JawabanB = ({ data }) => {
  return (
    <CardContainer>
      {(data || []).map((item, i) => (
        <CardBox key={i} bg={item.bg} border={0}>
          <CardBody>
            <CardHeader>
              <CardAvatar size={8} img="" />
              {item.name}
            </CardHeader>
            {/* <div style={{ fontSize: "20px" }}>{item.name}</div> */}
            <TextJumbo>{item.total}</TextJumbo>
          </CardBody>
        </CardBox>
      ))}
    </CardContainer>
  );
};

const Number3 = memo(() => {
  const dataA = [
    {
      name: "Connon Deen",
      clock: "08:00-08:30",
    },
    {
      name: "Mollie Byrd",
      clock: "09:00-08:30",
    },
    {
      name: "Miverva Vargas",
      clock: "09:30-10:00",
    },
  ];
  const dataB = [
    {
      name: "Patiens",
      total: 2902,
      bg: "#ff000012",
    },
    {
      name: "Vaccinated",
      total: 1867,
      bg: "#28ff0012",
    },
    {
      name: "Covid-19",
      total: 1028,
      bg: "#c1ff0026",
    },
  ];
  return (
    <Container title="Jawaban Soal No. 3">
      <JawabanA data={dataA} />
      <JawabanB data={dataB} />
    </Container>
  );
});

export default Number3;
