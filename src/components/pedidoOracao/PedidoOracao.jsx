import React, { useState } from 'react';
import { BoxTroca, Container, Sidebar, RequestItem, Details, Message, RequestTitle, RequestDetails, ContactInfo, ButtonGroup, ActionButton } from './stylePedidoOracao';
import { FaEnvelope, FaPhone, FaPrayingHands, FaWhatsapp } from 'react-icons/fa';

const prayerRequests = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    details: 'Please pray for healing and strength.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    details: 'Pray for peace and guidance in my decisions.Pray for peace and guidance in my decisions.Pray for peace and guidance in my decisions.',
  },
  // Add more requests as needed
];

function PedidoOracao() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleContactClick = (phone) => {
    window.open(`https://wa.me/${phone}`, '_blank');
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
                <ActionButton><FaPrayingHands /> Orar</ActionButton>
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