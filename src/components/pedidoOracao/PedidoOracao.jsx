import React, { useState, useEffect } from 'react';
import { BoxTroca, Container, Sidebar, RequestItem, Details, Message, RequestTitle, RequestDetails, ContactInfo, ButtonGroup, ActionButton } from './stylePedidoOracao';
import { FaEnvelope, FaPhone, FaPrayingHands, FaWhatsapp } from 'react-icons/fa';
import api from '../../api';
import Swal from 'sweetalert2';

const prayerRequests2 = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    details: 'Por favor, ore por cura e fortalecimento.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    details: 'Ore por paz e orientação nas minhas decisões. Ore por paz e orientação nas minhas decisões. Ore por paz e orientação nas minhas decisões.',
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '321-654-0987',
    details: 'Peço orações pela minha família e pela nossa união.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '654-321-7890',
    details: 'Ore por sabedoria no meu trabalho e novos projetos.',
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@example.com',
    phone: '789-012-3456',
    details: 'Preciso de orações para superar momentos difíceis.',
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    phone: '567-890-1234',
    details: 'Peço oração pela saúde dos meus pais.',
  },
  {
    id: 7,
    name: 'Chris Taylor',
    email: 'chris@example.com',
    phone: '890-123-4567',
    details: 'Ore por proteção nas viagens e novos caminhos.',
  },
  {
    id: 8,
    name: 'Laura Martinez',
    email: 'laura@example.com',
    phone: '456-789-0123',
    details: 'Peço oração para vencer minhas inseguranças.',
  },
];


function PedidoOracao() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [prayerRequests, setPrayerRequests] = useState([]);

  useEffect(() => {
    async function fetchPrayerRequests() {
      try {
        const response = await api.get('/pedidos-oracao');
        console.log(response.data);
        
        const mappedRequests = response.data.map(request => ({
          id: request.id,
          name: request.usuario.nome,
          email: request.usuario.email,
          phone: request.usuario.telefone,
          details: request.descricao,
        }));
        setPrayerRequests(mappedRequests);
      }catch (error) {
        console.error("Erro ao buscar pedidos de oração:", error);
      }
    }
    fetchPrayerRequests();

    
  }, []);


  const handleContactClick = (phone) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  const handlePrayClick = (id) => {
    async function prayForRequest(id) {
      try {
        if (selectedRequest) {
          await api.post(`/pedidos-oracao/${id}/orar`);
          Swal.fire({
            title: 'Oração Registrada',
            text: `Você orou por ${selectedRequest.name}.`,
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            // Remove o pedido orado da lista sem reload
          setPrayerRequests(prev => prev.filter(request => request.id !== id));
          setSelectedRequest(null); // Limpa seleção
          });
        } else {
          alert('Por favor, selecione um pedido de oração.');
        }
      } catch (error) {
        console.error("Erro ao registrar oração:", error);
        Swal.fire({
          title: 'Erro',
          text: 'Não foi possível registrar sua oração. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }

    prayForRequest(id);
    window.reload
  };

  return (
    <BoxTroca>
      <Container>
        <Sidebar>
          {prayerRequests.map((request) => (
            <RequestItem
              key={request.id}
              isSelected={selectedRequest && selectedRequest.id === request.id}
              onClick={() => setSelectedRequest(request)}
            >
              {request.name}
            </RequestItem>
          ))}
        </Sidebar>
        <Details>
          {selectedRequest ? (
            <div>
              <RequestTitle>{selectedRequest.name}</RequestTitle>
              <ContactInfo>
                <div><FaEnvelope /> {selectedRequest.email}</div>
                <div><FaPhone /> {selectedRequest.phone}</div>
              </ContactInfo>
              <RequestDetails>{selectedRequest.details}</RequestDetails>
              <ButtonGroup>
                <ActionButton onClick={()=>handlePrayClick(selectedRequest.id)}><FaPrayingHands /> Orar</ActionButton>
                <ActionButton onClick={() => handleContactClick(selectedRequest.phone)}><FaWhatsapp /> Entrar em Contato</ActionButton>
              </ButtonGroup>
            </div>
          ) : (
            <Message>Selecione um pedido de oração para ver mais detalhes</Message>
          )}
        </Details>
      </Container>
    </BoxTroca>
  );
}

export default PedidoOracao;