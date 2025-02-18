import React, { useState } from "react";
import { Search } from "lucide-react";
import FoodCard from "../foodCard/foodCard";
import {
  Container,
  SearchBar,
  SearchInput,
  SearchIcon,
  Grid,
  ContainerSearch,
  BoxGrid
} from "./styleFoodGrid";

// Dados de exemplo
const foodData = [
  { name: "ARROZ", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Arroz" },
  { name: "FEIJÃO", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Feijão" },
  { name: "ÓLEO", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Óleo" },
  { name: "SAL", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Sal" },
  { name: "MACARRÃO", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Macarrão" },
  { name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },
  { name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },{ name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },{ name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },{ name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },
  { name: "FARINHA", quantity: 10, weight: "100Kg", image: "https://via.placeholder.com/150?text=Farinha" },
];

const FoodGrid = () => {
  const [search, setSearch] = useState("");

  // Filtra os alimentos com base na pesquisa
  const filteredFoods = foodData.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BoxGrid>
      <ContainerSearch>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon />
      </SearchBar>
      </ContainerSearch>
    <Container>

      <Grid>
        {filteredFoods.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </Grid>
    </Container>
    </BoxGrid>
    
  );
};

export default FoodGrid;
