import React, { useState } from 'react';
import {
  BoxTroca, Container, Sidebar, RequestItem, Details, Message,
  RequestTitle, ContactInfo, AddressInfo, ButtonGroup, ActionButton,
  AddressCard,ActionButtonNao
} from './styleEndereco';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const addressRequests = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    oldAddress: {
      cep: '12345-678',
      rua: 'Rua Antiga',
      numero: '123',
      complemento: 'Apto 1',
      bairro: 'Bairro Antigo',
      cidade: 'Cidade Velha',
      estado: 'Estado Antigo',
    },
    newAddress: {
      cep: '98765-432',
      rua: 'Rua Nova',
      numero: '456',
      complemento: 'Apto 2',
      bairro: 'Bairro Novo',
      cidade: 'Cidade Nova',
      estado: 'Estado Novo',
    },
  },
];

function Endereco() {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const renderAddress = (title, address) => (
    <AddressCard>
      <h3>{title}</h3>
      <p>CEP: {address.cep}</p>
      <p>Rua: {address.rua}</p>
      <p>Número: {address.numero}</p>
      <p>Complemento: {address.complemento}</p>
      <p>Bairro: {address.bairro}</p>
      <p>Cidade: {address.cidade}</p>
      <p>Estado: {address.estado}</p>
    </AddressCard>
  );

  return (
    <BoxTroca>
      <Container>
        <Sidebar>
          {addressRequests.map((request) => (
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
              <AddressInfo>
                {renderAddress('Endereço Antigo', selectedRequest.oldAddress)}
                {renderAddress('Endereço Novo', selectedRequest.newAddress)}
              </AddressInfo>
              <ButtonGroup>
                <ActionButton>Aceitar</ActionButton>
                <ActionButtonNao>Recusar</ActionButtonNao>
              </ButtonGroup>
            </div>
          ) : (
            <Message>Selecione um pedido de alteração de endereço para ver mais detalhes</Message>
          )}
        </Details>
      </Container>
    </BoxTroca>
  );
}

export default Endereco;