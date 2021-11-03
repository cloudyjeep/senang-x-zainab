import React, { memo, useCallback, useEffect, useState } from "react";
import Button from "../component/Button";
import Container from "../component/Container";



const maxCount = 17;

const Number1 = memo(() => {
  const [state, setState] = useState({
    count: 0,
    text: [],
    update: true,
  });
  const { count, text, update } = state;

  // handle event tambah
  const handleTambah = useCallback(() => {
    if (state.count < maxCount) {
      setState((s) => ({ ...s, update: true, count: s.count + 1 }));
    }
  }, [state]);

  // handle event kurang
  const handleKurang = useCallback(() => {
    if(count !== 1){
      setState((s) => ({ ...s, update: true, count: s.count - 1 }));
    }
  }, [state]);

  // run effect when state.update == true
  useEffect(() => {
    if (update && count > 0) {
      console.log("effect", count);
      const dibagi3 = count % 3 == 0;
      const dibagi5 = count % 5 == 0;
      const item = dibagi3
        ? "Halo Zainab"
        : dibagi5
        ? "Halo Senang"
        : dibagi3 && dibagi5
        ? "Zainab X Senang"
        : count;
      setState((s) => ({ ...s, update: false, text: [...s.text, item] }));
    }
  }, [state]);

  return (
    <Container title="Jawaban Soal No. 1">
      <Button onClick={handleTambah}>Tambah</Button>
      <Button onClick={handleKurang}>Kurang</Button>
      {state.text.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </Container>
  );
});

export default Number1;
