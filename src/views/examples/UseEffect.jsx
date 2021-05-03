import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(n) {
  if (n < 0) {
    return -1;
  }

  if (n === 0) {
    return 1;
  }

  return calcFactorial(n - 1) * n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [paOuImpa, setPaOuImpa] = useState(true);

  useEffect(() => {
    setFatorial(calcFactorial(number));
  }, [number]);

  useEffect(() => {
    setPaOuImpa(number % 2 === 0);
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text  red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">Esse número é? {paOuImpa ? "Pá" : "Impá"} </span>
      </div>
    </div>
  );
};

export default UseEffect;
