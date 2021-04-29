import React from "react";
import { useParams } from "react-router";
import PageTitle from "../../components/layout/PageTitle";

const Param = (props) => {
  const { id } = useParams();
  const text = `Exibindo parâmetros nas rotas: ${id}`;

  return (
    <div className="Param">
      <PageTitle title="Recebendo parâmetro da rota" subtitle={text} />
    </div>
  );
};

export default Param;
