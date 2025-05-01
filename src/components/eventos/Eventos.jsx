import React, { useState } from 'react';
import {
  BoxTroca, Container, Sidebar, RequestItem, Details, Message, RequestTitle,
  EventImageContainer, EventImage, EventDescription, ButtonGroup, ActionButton, 
  EditInput, EditInputDate, Label, ImageUploadContainer, FormGrid, FormColumn,
  AddEventButton, NoEventsMessage, EventTimeInput, EventValueInput, FormSection,
  ImagePreview, ImageUploadButton, ImagePlaceholder, EventStatus
} from './styleEventos';
import { FaEdit, FaTrash, FaSave, FaArrowLeft, FaImage, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// Dados de exemplo
const eventList = [
  {
    id: 1,
    title: 'Noite de Louvor',
    date: '20/11/2025',
    time: '19:30',
    location: 'Igreja Central',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfTiaIJIZXF2xEjcfJaiE3SwRVzuDQoC5LPw&s',
    description: 'Uma noite especial de louvor e adoração a Deus.',
    value: 'Entrada gratuita'
  },
  {
    id: 2,
    title: 'Campanha de Arrecadação de Arroz',
    date: '05/12/2025',
    time: '10:00',
    location: 'Salão Paroquial',
    image: 'https://www.pibvm.com.br/mt-content/uploads/2024/01/photo-from-junior-7.jpg',
    description: 'Doe 1kg de arroz para ajudar famílias carentes da comunidade.',
    value: '1kg de arroz'
  },
  {
    id: 3,
    title: 'Culto da Família',
    date: '12/12/2025',
    time: '19:00',
    location: 'Igreja Esperança',
    image: 'https://www.pibvm.com.br/mt-content/uploads/2018/05/mt-1464-home-img-2.jpg',
    description: 'Celebre a união familiar em um culto especial.',
    value: 'Entrada gratuita'
  },
  {
    id: 4,
    title: 'Mutirão da Solidariedade - Doação de Feijão',
    date: '20/12/2025',
    time: '09:00',
    location: 'Centro Comunitário',
    image: 'https://images.unsplash.com/photo-1624315141662-5b6a381beec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    description: 'Ajude doando 1kg de feijão para famílias em vulnerabilidade.',
    value: '1kg de feijão'
  },
  {
    id: 5,
    title: 'Vigília de Oração',
    date: '31/12/2025',
    time: '22:00',
    location: 'Igreja Vida Nova',
    image: 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
    description: 'Uma vigília especial para agradecer e consagrar o novo ano a Deus.',
    value: 'Entrada gratuita'
  },
];


function Eventos() {
  const [events, setEvents] = useState(eventList);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editableEvent, setEditableEvent] = useState({
    id: null,
    title: '',
    date: '',
    time: '',
    location: '',
    image: '',
    description: '',
    value: ''
  });

  // Iniciar edição de evento
  const handleEditClick = () => {
    setIsEditing(true);
    setIsAdding(false);
    setEditableEvent(selectedEvent);
  };

  // Iniciar adição de novo evento
  const handleAddClick = () => {
    setIsAdding(true);
    setIsEditing(false);
    setSelectedEvent(null);
    setEditableEvent({
      id: Date.now(), // ID temporário
      title: '',
      date: '',
      time: '',
      location: '',
      image: '',
      description: '',
      value: ''
    });
  };

  // Salvar evento (novo ou editado)
  const handleSaveClick = () => {
    if (isAdding) {
      // Adicionar novo evento
      setEvents([...events, editableEvent]);
      setSelectedEvent(editableEvent);
    } else {
      // Atualizar evento existente
      setEvents(events.map(event => 
        event.id === editableEvent.id ? editableEvent : event
      ));
      setSelectedEvent(editableEvent);
    }
    setIsEditing(false);
    setIsAdding(false);
  };

  // Cancelar edição/adição
  const handleCancelEdit = () => {
    setIsEditing(false);
    setIsAdding(false);
  };

  // Excluir evento
  const handleDeleteEvent = () => {
    if (window.confirm('Tem certeza que deseja excluir este evento?')) {
      setEvents(events.filter(event => event.id !== selectedEvent.id));
      setSelectedEvent(null);
    }
  };

  // Atualizar campos do evento
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      let newValue = value.replace(/\D/g, "");

      if (newValue.length > 2) newValue = newValue.slice(0, 2) + "/" + newValue.slice(2);
      if (newValue.length > 5) newValue = newValue.slice(0, 5) + "/" + newValue.slice(5, 9);
      if (newValue.length > 10) newValue = newValue.slice(0, 10);

      setEditableEvent((prev) => ({ ...prev, date: newValue }));
    } else if (name === "value") {
      // Formatar valor como moeda
      let newValue = value.replace(/\D/g, "");
      if (newValue) {
        newValue = (parseInt(newValue) / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
      }
      setEditableEvent((prev) => ({ ...prev, value: newValue }));
    } else {
      setEditableEvent((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Gerenciar upload de imagem
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditableEvent((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  // Remover imagem
  const handleImageRemove = () => {
    setEditableEvent((prev) => ({ ...prev, image: "" }));
  };

  // Verificar se o formulário está válido
  const isFormValid = () => {
    return (
      editableEvent.title.trim() !== '' &&
      editableEvent.date.trim() !== '' &&
      editableEvent.time.trim() !== '' &&
      editableEvent.location.trim() !== '' &&
      editableEvent.description.trim() !== ''
    );
  };

  return (
    <BoxTroca>
      <Container>
        <Sidebar>
          <AddEventButton onClick={handleAddClick}>
            <FaPlus /> Novo Evento
          </AddEventButton>
          
          {events.length > 0 ? (
            events.map((event) => (
              <RequestItem
                key={event.id}
                isSelected={selectedEvent && selectedEvent.id === event.id}
                onClick={() => {
                  setSelectedEvent(event);
                  setIsEditing(false);
                  setIsAdding(false);
                }}
              >
                {event.title}
              </RequestItem>
            ))
          ) : (
            <NoEventsMessage>
              Nenhum evento cadastrado
            </NoEventsMessage>
          )}
        </Sidebar>
        
        <Details>
          {isAdding || isEditing ? (
            // Formulário de edição/adição
            <FormSection>
              <h2>{isAdding ? 'Adicionar Novo Evento' : 'Editar Evento'}</h2>
              
              <FormGrid>
                <FormColumn>
                  <div>
                    <Label>Título do Evento: *</Label>
                    <EditInput
                      name="title"
                      value={editableEvent.title}
                      onChange={handleChange}
                      placeholder="Ex: Show de Rock"
                    />
                  </div>
                  
                  <div>
                    <Label>Descrição: *</Label>
                    <EditInput
                      as="textarea"
                      rows="4"
                      name="description"
                      value={editableEvent.description}
                      onChange={handleChange}
                      placeholder="Descreva os detalhes do evento"
                    />
                  </div>
                  
                  <div>
                    <Label>Local: *</Label>
                    <EditInput
                      name="location"
                      value={editableEvent.location}
                      onChange={handleChange}
                      placeholder="Ex: Centro de Convenções"
                      icon={<FaMapMarkerAlt />}
                    />
                  </div>
                </FormColumn>
                
                <FormColumn>
                  <div>
                    <Label>Data: *</Label>
                    <EditInputDate
                      name="date"
                      value={editableEvent.date}
                      onChange={handleChange}
                      placeholder="DD/MM/AAAA"
                      icon={<FaCalendarAlt />}
                    />
                  </div>
                  
                  <div>
                    <Label>Hora: *</Label>
                    <EventTimeInput
                      name="time"
                      value={editableEvent.time}
                      onChange={handleChange}
                      placeholder="Ex: 19:30"
                      icon={<FaClock />}
                    />
                  </div>
                  
                  <div>
                    <Label>Valor: (opcional)</Label>
                    <EventValueInput
                      name="value"
                      value={editableEvent.value}
                      onChange={handleChange}
                      placeholder="Ex: R$ 50,00"
                      icon={<FaMoneyBillWave />}
                    />
                  </div>
                  
                  <div>
                    <Label>Imagem do Evento:</Label>
                    {editableEvent.image ? (
                      <ImagePreview>
                        <EventImage src={editableEvent.image || "/placeholder.svg"} alt="Prévia do evento" />
                        <ActionButton onClick={handleImageRemove} danger>
                          <FaTrash /> Remover
                        </ActionButton>
                      </ImagePreview>
                    ) : (
                      <ImageUploadContainer>
                        <ImagePlaceholder>
                          <FaImage size={40} />
                          <p>Clique para adicionar uma imagem</p>
                        </ImagePlaceholder>
                        <ImageUploadButton>
                          <FaImage /> Selecionar Imagem
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange} 
                          />
                        </ImageUploadButton>
                      </ImageUploadContainer>
                    )}
                  </div>
                </FormColumn>
              </FormGrid>
              
              <ButtonGroup>
                <ActionButton onClick={handleCancelEdit}>
                  <FaArrowLeft /> Cancelar
                </ActionButton>
                <ActionButton 
                  onClick={handleSaveClick} 
                  disabled={!isFormValid()}
                  style={{
                    backgroundColor: isFormValid() ? "green" : "#555",
                    cursor: isFormValid() ? "pointer" : "not-allowed"
                  }}
                >
                  <FaSave /> Salvar Evento
                </ActionButton>
              </ButtonGroup>
            </FormSection>
          ) : selectedEvent ? (
            // Visualização de evento
            <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div>
                <RequestTitle>{selectedEvent.title}</RequestTitle>
                
                <EventStatus>
                  <div>
                    <FaCalendarAlt /> <span>{selectedEvent.date}</span>
                  </div>
                  <div>
                    <FaClock /> <span>{selectedEvent.time}</span>
                  </div>
                  <div>
                    <FaMapMarkerAlt /> <span>{selectedEvent.location}</span>
                  </div>
                  {selectedEvent.value && (
                    <div>
                      <FaMoneyBillWave /> <span>{selectedEvent.value}</span>
                    </div>
                  )}
                </EventStatus>
                
                {selectedEvent.image && (
                  <EventImageContainer>
                    <EventImage src={selectedEvent.image} alt={selectedEvent.title} />
                  </EventImageContainer>
                )}
                
                <EventDescription>{selectedEvent.description}</EventDescription>
              </div>
              
              <ButtonGroup>
                <ActionButton onClick={handleEditClick}>
                  <FaEdit /> Editar
                </ActionButton>
                <ActionButton onClick={handleDeleteEvent} danger>
                  <FaTrash /> Apagar Evento
                </ActionButton>
              </ButtonGroup>
            </div>
          ) : (
            // Mensagem quando nenhum evento está selecionado
            <Message>
              {events.length > 0 
                ? "Selecione um evento para ver mais detalhes" 
                : "Clique em 'Novo Evento' para começar a adicionar eventos"}
            </Message>
          )}
        </Details>
      </Container>
    </BoxTroca>
  );
}

export default Eventos;
