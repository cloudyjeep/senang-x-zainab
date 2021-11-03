import React from "react";
import styled from "styled-components";
import Number1 from "./Jawaban/Number1";
import Number2 from "./Jawaban/Number2";
import Number3 from "./Jawaban/Number3";

const Root = styled.div`
  padding: 24px;
`;

function App() {
  return (
    <Root>
      <style>{`html { font-family: Arial, Helvetica, sans-serif; }`}</style>
      <Number1 />
      <Number2 />
      <Number3 />
    </Root>
  );
}

export default App;
