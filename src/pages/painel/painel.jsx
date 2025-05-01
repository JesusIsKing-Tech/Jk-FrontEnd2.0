import React, { useState } from "react";
import {
  Container, StatsGrid,  BoxFiltro
} from "./painelStyle";
import HeaderLogado from "../../components/headerLogado/headerLogado";
import Kpis from "../../components/kpis/Kpis";
import Graficos from "../../components/graficosDash/GraficosDash"
import PedidoOracao from "../../components/pedidoOracao/PedidoOracao";
import Endereco from "../../components/endereco/Endereco"
import Eventos from "../../components/eventos/Eventos";

const Dashboard = () => {
  const [ativo, setAtivo] = useState("dash"); 

  const renderContent = () => {
    switch (ativo) {
      case "dash":
        return <Graficos/>
      case "oracao":
        return <PedidoOracao/>
      case "endereco":
        return <Endereco/>
      case "eventos":
        return <Eventos/>
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderLogado />
      <Container>
       
        <div style={{ display: "flex", width: "100%", height: "81vh", padding: "20px" }}>
          <StatsGrid>
            <Kpis title="Dashboards" estado={ativo === "dash"} onClick={() => setAtivo("dash")} />
            <Kpis title="Pedidos de Oração" estado={ativo === "oracao"} onClick={() => setAtivo("oracao")} />
            <Kpis title="Alteração de Endereço" estado={ativo === "endereco"} onClick={() => setAtivo("endereco")} />
            <Kpis title="Eventos" estado={ativo === "eventos"} onClick={() => setAtivo("eventos")} />
          </StatsGrid>
            {renderContent()}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;