import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  user: null,
  products: [],
  // foco...
  number: 0,
  custom: { value: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "number_add_2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload } };
    case "7x":
      if (!state.number) {
        state.number = 1;
      }
      return { ...state, number: (state.number || 1) * 7 };
    case "/25":
      return { ...state, number: state.number / 25 };
    case "convertToInteger":
      return { ...state, number: parseInt(state.number) };
    case "custom":
      return { ...state, number: state.number + state.custom.value };
    case "changeCustom":
      return { ...state, custom: { value: action.payload } };
    default:
      return state;
  }
}

// multiplicar por 7, dividir por 25 // depois converterPara inteiro
// Para adicionar um número qualquer

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exemplo reducer" />
      <div className="center">
        {state.user ? (
          <span className="text"> {state.user.name} </span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Walker" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add_2" })}
          >
            +2
          </button>
        </div>
      </div>
      <SectionTitle title="Desafio 01" />
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "7x" })}>
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "/25" })}>
            / 25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "convertToInteger" })}
          >
            Convert to integer
          </button>
        </div>
        <div>
          <button className="btn" onClick={() => dispatch({ type: "custom" })}>
            {" "}
            Somar com{" "}
          </button>
          <input
            type="number"
            className="text"
            value={state.custom.value}
            onChange={(event) =>
              dispatch({ type: "changeCustom", payload: +event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
