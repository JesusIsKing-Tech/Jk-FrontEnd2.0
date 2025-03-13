import React, { useState } from 'react';
import {
  BoxTroca, Container, Sidebar, RequestItem, Details, Message, RequestTitle,
  EventImageContainer, EventImage, EventDescription, ButtonGroup, ActionButton, EditInput, EditInputDate, Label, ImageUploadContainer
} from './styleEventos';
import { FaEdit, FaTrash, FaSave, FaArrowLeft, FaImage } from 'react-icons/fa';

const eventList = [
  {
    id: 1,
    title: 'Concert Night',
    date: '20/11/2023',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFMYFcRAkAPkE99ylA1tAp9jyL1l15by30w&s',
    description: 'An amazing night with live music and performances.',
  },
];

function Eventos() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableEvent, setEditableEvent] = useState({});

  const handleEditClick = () => {
    setIsEditing(true);
    setEditableEvent(selectedEvent);
  };

  const handleSaveClick = () => {
    setSelectedEvent(editableEvent);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "date") {
      let newValue = value.replace(/\D/g, "");

      if (newValue.length > 2) newValue = newValue.slice(0, 2) + "/" + newValue.slice(2);
      if (newValue.length > 5) newValue = newValue.slice(0, 5) + "/" + newValue.slice(5, 9);
      if (newValue.length > 10) newValue = newValue.slice(0, 10);

      setEditableEvent((prev) => ({ ...prev, date: newValue }));
    } else {
      setEditableEvent((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEditableEvent((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  const handleImageRemove = () => {
    setEditableEvent((prev) => ({ ...prev, image: "" }));
  };

  return (
    <BoxTroca>
      <Container>
        <Sidebar>
          {eventList.map((event) => (
            <RequestItem
              key={event.id}
              isSelected={selectedEvent && selectedEvent.id === event.id}
              onClick={() => {
                setSelectedEvent(event);
                setIsEditing(false);
              }}
            >
              {event.title}
            </RequestItem>
          ))}
        </Sidebar>
        <Details>
          {selectedEvent ? (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              {isEditing ? (
                <div>
                  <Label>Título:</Label>
                  <EditInput
                    name="title"
                    value={editableEvent.title}
                    onChange={handleChange}
                  />
                  <Label>Data:</Label>
                  <EditInputDate
                    name="date"
                    value={editableEvent.date}
                    onChange={handleChange}
                    placeholder="DD/MM/AAAA"
                  />
                  <Label>Descrição:</Label>
                  <EditInput
                    name="description"
                    value={editableEvent.description}
                    onChange={handleChange}
                  />
                  
                  <Label>Imagem:</Label>
                  <EventImageContainer>
                    {editableEvent.image ? (
                      <EventImage src={editableEvent.image} alt="Evento" />
                    ) : (
                      <p>Nenhuma imagem selecionada</p>
                    )}
                  </EventImageContainer>
                  
                  <ImageUploadContainer>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {editableEvent.image && (
                      <ActionButton onClick={handleImageRemove} danger><FaTrash /> Remover Imagem</ActionButton>
                    )}
                  </ImageUploadContainer>
                </div>
              ) : (
                <div>
                  <RequestTitle>{selectedEvent.title}</RequestTitle>
                  <p>Data: {selectedEvent.date}</p>
                  <EventImageContainer>
                    <EventImage src={selectedEvent.image} alt={selectedEvent.title} />
                  </EventImageContainer>
                  <EventDescription>{selectedEvent.description}</EventDescription>
                </div>
              )}
              <ButtonGroup>
                {isEditing ? (
                  <>
                    <ActionButton onClick={handleCancelEdit}><FaArrowLeft /> Voltar</ActionButton>
                    <ActionButton onClick={handleSaveClick} style={{backgroundColor:"green"}}><FaSave /> Salvar</ActionButton>

                  </>
                ) : (
                  <>
                    <ActionButton onClick={handleEditClick}><FaEdit /> Editar</ActionButton>
                    <ActionButton danger><FaTrash /> Apagar Evento</ActionButton>
                  </>
                )}
              </ButtonGroup>
            </div>
          ) : (
            <Message>Selecione um evento para ver mais detalhes</Message>
          )}
        </Details>
      </Container>
    </BoxTroca>
  );
}

export default Eventos;
