import React from "react";
import { Card, Image, Title, Details, Label, Value } from "./styleFoodCard";
import Arroz from "../../assets/arroz.png"

const FoodCard = ({ name, quantity, weight, image }) => {
  return (
    <Card>
      <Image src={Arroz} alt={name} />
      <Title>{name}</Title>
      <Details>
        <Label>Quantidade</Label>
        <Value>{quantity}</Value>
      </Details>
      <Details>
        <Label>Peso Total</Label>
        <Value>{weight}</Value>
      </Details>
    </Card>
  );
};

export default FoodCard;
