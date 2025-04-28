"use client"
import {
  Card,
  Title,
  Details,
  Label,
  Value,
  ButtonGroup,
  QuantityButton,
  EditButton,
  LowStockBadge,
  IconContainer
} from "./styleFoodCard"
import { FaPlus, FaMinus, FaEdit, FaBreadSlice, FaWineBottle, FaCube, FaBox, FaUtensils } from "react-icons/fa"
import { GiRiceCooker, GiBowlOfRice, GiSaltShaker, GiWheat, GiNoodles } from "react-icons/gi"

const FoodCard = ({ food, onAddQuantity, onEdit }) => {
  const { id, name, quantity, minQuantity, weight, icon } = food
  const isLowStock = quantity <= minQuantity

  // Função para selecionar o ícone apropriado com base no tipo de alimento
  const getFoodIcon = () => {
    switch (icon) {
      case "rice":
        return <GiBowlOfRice size={50} />;
      case "beans":
        return <FaCube size={50} />;
      case "oil":
        return <FaWineBottle size={50} />;
      case "salt":
        return <GiSaltShaker size={50} />;
      case "pasta":
        return <GiNoodles size={50} />;
      case "flour":
        return <GiWheat size={50} />;
      default:
        return <FaBox size={50} />;
    }
  };

  return (
    <Card isLowStock={isLowStock}>
      {isLowStock && <LowStockBadge>Estoque Baixo</LowStockBadge>}

      <IconContainer>
        {getFoodIcon()}
      </IconContainer>
      
      <Title>{name}</Title>

      <Details>
        <Label>Quantidade</Label>
        <Value isLow={isLowStock}>{quantity}</Value>
      </Details>

      <Details>
        <Label>Peso Total</Label>
        <Value>{weight}</Value>
      </Details>

      <ButtonGroup>
        <QuantityButton onClick={() => onAddQuantity(id, -1)} danger>
          <FaMinus />
        </QuantityButton>

        <EditButton onClick={() => onEdit(food)}>
          <FaEdit /> Editar
        </EditButton>

        <QuantityButton onClick={() => onAddQuantity(id, 1)}>
          <FaPlus />
        </QuantityButton>
      </ButtonGroup>
    </Card>
  )
}

export default FoodCard
