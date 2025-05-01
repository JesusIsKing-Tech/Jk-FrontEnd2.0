import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  Container,
  Title,
  PercentageText,
  Divider,
  StockInfo,
  StockTitle,
  StockDetails,
  StockLabel,
  StockValue,
  BoxTitulo
} from "./styleDashEstoque";

// Registra os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const DashEstoque = ({ estoqueUsado = 45, estoqueTotal = 100, quantidadeCestas = 28 }) => {
  const estoqueDisponivel = estoqueTotal - estoqueUsado;
  const porcentagemUsado = ((estoqueUsado / estoqueTotal) * 100).toFixed(0);

  const data = {
    labels: ["Em Uso", "Disponível"],
    datasets: [
      {
        data: [estoqueUsado, estoqueDisponivel],
        backgroundColor: ["#1460e6", "#0e48af"],
        borderWidth: 0,
        hoverOffset: 10, // Aumenta o efeito de destaque ao passar o mouse
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Remove a legenda padrão
      },
    },
    cutout: "0%", // Faz o gráfico ser um "anel" (doughnut style)
  };

  return (
    <Container>
      <BoxTitulo>
      <Title>CAPACIDADE DO ESTOQUE</Title>
      </BoxTitulo>

      <Pie data={data} options={options} />

      <PercentageText>{porcentagemUsado}% do Estoque em Uso</PercentageText>

      <Divider />

      <StockInfo>
        <StockTitle>CESTAS BÁSICAS</StockTitle>
        <StockDetails>
          <StockLabel>Quantidade Disponível</StockLabel>
          <StockValue>{quantidadeCestas}</StockValue>
        </StockDetails>
      </StockInfo>
    </Container>
  );
};

export default DashEstoque;
