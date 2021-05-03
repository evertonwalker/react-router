import React, { useEffect, useRef, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function merge(valueOneInput, valueTwoInput) {
  const valueSetOne = new Set(Array.from(valueOneInput));
  const valueSetTwo = new Set(Array.from(valueTwoInput));

  let valueResult = new Set();

  valueSetOne.forEach((it) => {
    valueResult.add(it);
  });

  valueSetTwo.forEach((it) => {
    valueResult.add(it);
  });

  let result;
  if (valueResult.size > 0) {
    result = Array.from(valueResult.values()).toString();
    result = result.replace(/,/g, "");
  } else {
    result = "";
  }

  console.log(result);
  return result;
}

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  const [resultMerge, setMerge] = useState("");

  useEffect(() => {
    count.current = count.current + 1;
    myInput2.current.focus();
    setMerge(merge(myInput1.current.value, myInput2.current.value));
  }, [value1]);

  useEffect(() => {
    count.current++;
    myInput1.current.focus();
    setMerge(merge(myInput1.current.value, myInput2.current.value));
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />

      <SectionTitle title="Exercício #01" />
      <div>
        <span className="text">Valor:</span>
        <span className="text">{value1}[</span>
        <span className="text red">{count.current}</span>
        <span className="text">]</span>
      </div>

      <input
        type="text"
        className="input"
        value={value1}
        ref={myInput1}
        onChange={(e) => setValue1(e.target.value)}
      />

      <SectionTitle title="Exercício #02" />
      <input
        type="text"
        className="input"
        value={value2}
        ref={myInput2}
        onChange={(e) => setValue2(e.target.value)}
      />

      <SectionTitle title="Desafio merge #03" />
      <div className="center">
        <span className="text"> {resultMerge}</span>
      </div>
    </div>
  );
};

export default UseRef;
