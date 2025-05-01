"use client"

import { useState } from "react"
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SaveButton,
  DeleteButton,
  CancelButton,
  QuantityControl,
  QuantityButton,
} from "./styleSimpleModal"
import { FaTimes, FaSave, FaTrash, FaPlus, FaMinus } from "react-icons/fa"

const SimpleModal = ({ food, isNew = false, onClose, onSave, onDelete }) => {
  const [formData, setFormData] = useState({ ...food })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: name === "quantity" || name === "minQuantity" ? Number.parseInt(value) || 0 : value,
    })
  }

  const handleQuantityChange = (amount) => {
    setFormData({
      ...formData,
      quantity: Math.max(0, formData.quantity + amount),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{isNew ? "Adicionar Novo Item" : `Editar ${formData.name}`}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Nome do Item*</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: Arroz"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Quantidade*</Label>
              <QuantityControl>
                <QuantityButton type="button" onClick={() => handleQuantityChange(-1)}>
                  <FaMinus />
                </QuantityButton>
                <Input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="0"
                  required
                />
                <QuantityButton type="button" onClick={() => handleQuantityChange(1)}>
                  <FaPlus />
                </QuantityButton>
              </QuantityControl>
            </FormGroup>

            <FormGroup>
              <Label>Quantidade Mínima (Alerta)</Label>
              <Input
                type="number"
                name="minQuantity"
                value={formData.minQuantity}
                onChange={handleChange}
                min="0"
                placeholder="Quantidade para alerta de estoque baixo"
              />
            </FormGroup>

            <FormGroup>
              <Label>Peso Total</Label>
              <Input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Ex: 100Kg"
              />
            </FormGroup>

            <ButtonGroup>
              <CancelButton type="button" onClick={onClose}>
                Cancelar
              </CancelButton>

              {!isNew && (
                <DeleteButton type="button" onClick={() => onDelete(formData.id)}>
                  <FaTrash /> Excluir
                </DeleteButton>
              )}

              <SaveButton type="submit">
                <FaSave /> {isNew ? "Adicionar" : "Salvar"}
              </SaveButton>
            </ButtonGroup>
          </form>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default SimpleModal
