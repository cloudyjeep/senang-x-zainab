import React, { useCallback, useEffect, useState } from "react";
import Container from "../component/Container";
import { InputText } from "../component/Input";

const Number2 = () => {
  const [{ input, output }, setState] = useState({
    input: "kurnianto syaputra",
    output: "",
  });

  // handle input value and detect huruf vocal
  const handleInput = useCallback(
    (e) => {
      const input = String(e.target.value);
      const regex = /[aiueo]/g;
      const output = (input.match(regex) || []).join("");
      setState((s) => ({ input, output }));
    },
    [setState]
  );

  // detect huruf vocal when init this component
  useEffect(() => {
    handleInput({ target: { value: input } });
  }, []);

  return (
    <Container title="Jawaban Soal No. 2">
      <InputText type="text" value={input} onInput={handleInput} />
      <div>output: {output}</div>
    </Container>
  );
};

export default Number2;
