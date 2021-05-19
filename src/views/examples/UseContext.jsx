import React, { useContext, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  const { context, setStateContext } = useContext(DataContext);

  const { number, setNumber, text, setText } = useContext(AppContext);

  function addNumber(value) {
    setStateContext({
      ...context,
      number: context.number + value,
    });
  }

  useEffect(
    () => {
      if (number > 1250) {
        setText("Eita!");
      }
    },
    // eslint-disable-next-line
    [number]
  );

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.text}</span>
        <span className="text">{context.number}</span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(1)}>
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
      <div className="center">
        <span className="text"> {text}</span>
      </div>
    </div>
  );
};

export default UseContext;
