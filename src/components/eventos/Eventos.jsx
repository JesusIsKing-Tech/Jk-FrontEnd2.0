import React, { useState, useEffect } from 'react';
import {
  BoxTroca, Container, Sidebar, RequestItem, Details, Message, RequestTitle,
  EventImageContainer, EventImage, EventDescription, ButtonGroup, ActionButton,
  EditInput, EditInputDate, Label, ImageUploadContainer, FormGrid, FormColumn,
  AddEventButton, NoEventsMessage, EventTimeInput, EventValueInput, FormSection,
  ImagePreview, ImageUploadButton, ImagePlaceholder, EventStatus
} from './styleEventos';
import { FaEdit, FaTrash, FaSave, FaArrowLeft, FaImage, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import api from '../../api';
import EventFormGrid from './EventoFormGrid';
import Swal from 'sweetalert2';
import semImagem from '../../assets/sem-imagem.jpg';

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
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editableEvent, setEditableEvent] = useState({
    id: null,
    title: '',
    date: '',
    time: '',
    cep: '',
    rua: '',
    bairro: '',
    localidade: '',
    numero: '',
    complemento: '',
    image: '',
    description: '',
    value: '',
    file: null
  });

  async function fetchEvents() {
      try {
        const response = await api.get('/postagem');
        console.log('Eventos recebidos:', response.data);

        const fetchedEvents = response.data.map(event => ({
          id: event.id,
          title: event.titulo,
          date: event.data
            ? new Date(event.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
            : '',
          time: event.horaEvento ? event.horaEvento.slice(0, 5) : '',
          location: event.local || event.enderecoEvento?.logradouro || '', // Adicione location
          rua: event.endereco?.logradouro || '',
          bairro: event.endereco?.bairro || '',
          localidade: event.endereco?.localidade || '',
          numero: event.endereco?.numero || '',
          complemento: event.endereco?.complemento || '',
          cep: event.endereco?.cep || '',
          image: event.imagem || '',
          description: event.descricao,
          value: event.valor || ''
        }));

        console.log('Eventos formatados:', fetchedEvents);

        setEvents(fetchedEvents);

      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }

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
      id: '',
      title: '',
      description: '',
      location: '',
      cep: '',
      rua: '',
      bairro: '',
      numero: '',
      complemento: '',
      localidade: '',
      date: '',
      time: '',
      value: '',
      image: '',
      file: null,
    });
  };

  // Salvar evento (novo ou editado)
  const handleSaveClick = async () => {
    const enderecoEvento = {
      cep: editableEvent.cep,
      logradouro: editableEvent.rua,
      numero: editableEvent.numero,
      complemento: editableEvent.complemento,
      bairro: editableEvent.bairro,
      localidade: editableEvent.localidade,
      uf: editableEvent.uf
    };

    const valorNumerico = editableEvent.value
      ? Number(
        String(editableEvent.value)
          .replace(/\s/g, '')
          .replace('R$', '')
          .replace(/\./g, '')
          .replace(',', '.')
      )
      : 0;

    const formData = new FormData();
    formData.append("titulo", editableEvent.title);
    formData.append("data", editableEvent.date);
    formData.append("descricao", editableEvent.description);
    formData.append("valor", valorNumerico);
    formData.append("hora", editableEvent.time);
    formData.append(
      "enderecoEvento",
      new Blob([JSON.stringify(enderecoEvento)], { type: "application/json" })
    );
    if (editableEvent.file) {
      formData.append("file", editableEvent.file);
    }

    try {
      if (isAdding) {
        await api.post('/postagem', formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        Swal.fire({
          icon: 'success',
          title: 'Evento Adicionado',
          text: 'O evento foi adicionado com sucesso!',
          confirmButtonText: 'OK',
        });
        fetchEvents(); // Atualiza a lista de eventos após adicionar
      } else {
        // Atualização (PUT)
        await api.put(`/postagem/${editableEvent.id}`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        Swal.fire({
          icon: 'success',
          title: 'Evento Atualizado',
          text: 'O evento foi atualizado com sucesso!',
          confirmButtonText: 'OK',
        });
      }
      setIsEditing(false);
      setIsAdding(false);
      // Atualize a lista de eventos se necessário
      fetchEvents();
    } catch (error) {
      console.error("Erro ao salvar evento:", error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao salvar evento',
        text: error.response?.data?.message || 'Ocorreu um erro ao salvar o evento.',
        confirmButtonText: 'OK',
      });
    }
  };

  // Cancelar edição/adição
  const handleCancelEdit = () => {
    setIsEditing(false);
    setIsAdding(false);
  };

  // Excluir evento
  const handleDeleteEvent = async () => {
    const result = await Swal.fire({
    title: 'Tem certeza?',
    text: 'Você realmente deseja excluir este evento?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, excluir',
    cancelButtonText: 'Cancelar'
  });

    if (result.isConfirmed) {
      try {
        await api.delete(`/postagem/${selectedEvent.id}`);
        console.log("Evento excluído:", selectedEvent.id);
        Swal.fire({
          icon: 'success',
          title: 'Evento Excluído',
          text: 'O evento foi excluído com sucesso!',
          confirmButtonText: 'OK',
        });
      } catch (error) {
        console.error('Erro ao excluir evento:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erro ao excluir evento',
          text: error.response?.data?.message || 'Ocorreu um erro ao excluir o evento.',
          confirmButtonText: 'OK',
        });
      }
      setSelectedEvent(null);
      fetchEvents(); // Atualiza a lista de eventos após exclusão
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
      const imageUrl = URL.createObjectURL(file); // só para preview
      setEditableEvent((prev) => ({
        ...prev,
        image: imageUrl, // preview (opcional)
        file: file       // arquivo real para envio!
      }));
    }
  };

  // Remover imagem
  const handleImageRemove = () => {
    setEditableEvent((prev) => ({ ...prev, image: "" }));
  };

  // Verificar se o formulário está válido
  const isFormValid = () => {
    return (
      (editableEvent.title || '').trim() !== '' &&
      (editableEvent.date || '').trim() !== '' &&
      (editableEvent.time || '').trim() !== '' &&
      (editableEvent.description || '').trim() !== ''
    );
  };

  // Retornar lista de eventos
  useEffect(() => {
    fetchEvents();
  }, []);

  // Renderizar imagem eventos
  const fetchImage = async (event) => {

    try {
      const response = await api.get(`/postagem/foto-evento/${event.id}`, {
        responseType: 'blob'
      });
      if (!response.data || response.data.size === 0) {
        console.warn('Nenhuma imagem encontrada para o evento:', event.id);
        return semImagem; // Retorna uma imagem padrão se não houver imagem
      }
      const imageUrl = URL.createObjectURL(response.data);
      return imageUrl;
    } catch (error) {
      console.error('Erro ao buscar imagem do evento:', error);
    }
    return semImagem; // Retorna uma imagem padrão se falhar
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
                onClick={async () => {
                  let imageUrl = '';
                  if (!event.image) {
                    imageUrl = await fetchImage(event);
                  }
                  setSelectedEvent({ ...event, image: imageUrl || event.image });
                  setIsEditing(false);
                  setIsAdding(false);
                  console.log("Evento selecionado:", event);
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

              <EventFormGrid
                editableEvent={editableEvent}
                handleChange={handleChange}
                handleImageChange={handleImageChange}
                handleImageRemove={handleImageRemove}
              />

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
                    <FaMapMarkerAlt /> <span>{selectedEvent.rua + " - " + selectedEvent.bairro}</span>
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
