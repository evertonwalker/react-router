import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

function sum(a, b) {
  const future = Date.now() + 1000;
  while (Date.now() < future) {} //espera 1seg
  return +a + +b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  //Uma maneira de resolver o problema
  //   const [result, setResult] = useState(0);

  //   useEffect(() => {
  //     setResult(sum(n1, n2));
  //   }, [n1, n2]);

  // Retorna o resultado dessa operação.
  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />

      <div className="center">
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
          className="input"
        />
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
          className="input"
        />
        <input
          type="number"
          value={n3}
          onChange={(e) => setN3(e.target.value)}
          className="input"
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
