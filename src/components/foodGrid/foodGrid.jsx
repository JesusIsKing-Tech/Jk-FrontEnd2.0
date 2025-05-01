"use client"

import { useState } from "react"
import {
  Container,
  SearchBar,
  SearchInput,
  SearchIcon,
  Grid,
  ContainerSearch,
  BoxGrid,
  AddButton,
  NoResults,
  TotalCount,
} from "./styleFoodGrid"
import { FaPlus } from "react-icons/fa"
import FoodCard from "../foodCard/foodCard"
import SimpleModal from "../simpleModal/simpleModal"

// Dados de exemplo com ícones em vez de URLs de imagem
const initialFoodData = [
  {
    id: 1,
    name: "ARROZ",
    quantity: 10,
    minQuantity: 5,
    weight: "100Kg",
    icon: "rice", // Usaremos isso para selecionar o ícone apropriado
  },
  {
    id: 2,
    name: "FEIJÃO",
    quantity: 8,
    minQuantity: 4,
    weight: "80Kg",
    icon: "beans",
  },
  {
    id: 3,
    name: "ÓLEO",
    quantity: 15,
    minQuantity: 8,
    weight: "13.5Kg",
    icon: "oil",
  },
  {
    id: 4,
    name: "SAL",
    quantity: 20,
    minQuantity: 5,
    weight: "20Kg",
    icon: "salt",
  },
  {
    id: 5,
    name: "MACARRÃO",
    quantity: 12,
    minQuantity: 6,
    weight: "12Kg",
    icon: "pasta",
  },
  {
    id: 6,
    name: "FARINHA",
    quantity: 7,
    minQuantity: 5,
    weight: "35Kg",
    icon: "flour",
  },
]

const FoodGrid = () => {
  const [foodData, setFoodData] = useState(initialFoodData)
  const [search, setSearch] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFood, setSelectedFood] = useState(null)
  const [isAddMode, setIsAddMode] = useState(false)

  // Filtra os alimentos com base na pesquisa
  const filteredFoods = foodData.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()))

  // Manipuladores de eventos
  const handleAddQuantity = (id, amount) => {
    setFoodData(
      foodData.map((food) => {
        if (food.id === id) {
          return { ...food, quantity: Math.max(0, food.quantity + amount) }
        }
        return food
      }),
    )
  }

  const handleAddNewItem = () => {
    setIsAddMode(true)
    setSelectedFood({
      id: Math.max(...foodData.map((f) => f.id)) + 1,
      name: "",
      quantity: 0,
      minQuantity: 0,
      weight: "",
      icon: "default",
    })
    setIsModalOpen(true)
  }

  const handleEditItem = (food) => {
    setIsAddMode(false)
    setSelectedFood(food)
    setIsModalOpen(true)
  }

  const handleSaveItem = (updatedFood) => {
    if (isAddMode) {
      setFoodData([...foodData, updatedFood])
    } else {
      setFoodData(foodData.map((food) => (food.id === updatedFood.id ? updatedFood : food)))
    }
    setIsModalOpen(false)
  }

  const handleDeleteItem = (id) => {
    setFoodData(foodData.filter((food) => food.id !== id))
    setIsModalOpen(false)
  }

  // Calcular totais
  const totalItems = foodData.length
  const totalQuantity = foodData.reduce((sum, food) => sum + food.quantity, 0)
  const lowStockItems = foodData.filter((food) => food.quantity <= food.minQuantity).length

  return (
    <BoxGrid>
      <ContainerSearch>
        <SearchBar>
          <SearchInput type="text" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
          <SearchIcon />
        </SearchBar>
        <AddButton onClick={handleAddNewItem}>
          <FaPlus /> Novo Item
        </AddButton>
      </ContainerSearch>

      <TotalCount>
        <div>
          Total de Itens: <strong>{totalItems}</strong>
        </div>
        <div>
          Quantidade Total: <strong>{totalQuantity}</strong>
        </div>
        {lowStockItems > 0 && (
          <div className="warning">
            Estoque Baixo: <strong>{lowStockItems}</strong>
          </div>
        )}
      </TotalCount>

      <Container>
        <Grid>
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <FoodCard key={food.id} food={food} onAddQuantity={handleAddQuantity} onEdit={handleEditItem} />
            ))
          ) : (
            <NoResults>
              <span>Nenhum item encontrado</span>
              <p>Tente uma busca diferente ou adicione novos itens ao estoque</p>
            </NoResults>
          )}
        </Grid>
      </Container>

      {isModalOpen && (
        <SimpleModal
          food={selectedFood}
          isNew={isAddMode}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveItem}
          onDelete={handleDeleteItem}
        />
      )}
    </BoxGrid>
  )
}

export default FoodGrid
