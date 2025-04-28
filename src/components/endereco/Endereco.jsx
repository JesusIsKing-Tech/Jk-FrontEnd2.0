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
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '098-765-4321',
    oldAddress: {
      cep: '23456-789',
      rua: 'Rua das Flores',
      numero: '321',
      complemento: 'Casa',
      bairro: 'Jardim Velho',
      cidade: 'Antiga Cidade',
      estado: 'Velho Estado',
    },
    newAddress: {
      cep: '87654-321',
      rua: 'Avenida Central',
      numero: '654',
      complemento: 'Bloco B',
      bairro: 'Centro Novo',
      cidade: 'Nova Cidade',
      estado: 'Novo Estado',
    },
  },
  {
    id: 3,
    name: 'Michael Johnson',
    email: 'michael@example.com',
    phone: '321-654-0987',
    oldAddress: {
      cep: '34567-890',
      rua: 'Travessa Antiga',
      numero: '987',
      complemento: 'Sala 5',
      bairro: 'Bairro Tranquilo',
      cidade: 'Cidade Tranquila',
      estado: 'Estado Calmo',
    },
    newAddress: {
      cep: '76543-210',
      rua: 'Rua das Palmeiras',
      numero: '321',
      complemento: '',
      bairro: 'Bairro Verde',
      cidade: 'Cidade Jardim',
      estado: 'Estado Verdejante',
    },
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '654-321-7890',
    oldAddress: {
      cep: '45678-901',
      rua: 'Alameda das Rosas',
      numero: '456',
      complemento: 'Cobertura',
      bairro: 'Jardim Antigo',
      cidade: 'Cidade das Rosas',
      estado: 'Estado Rosado',
    },
    newAddress: {
      cep: '65432-109',
      rua: 'Avenida Nova Era',
      numero: '789',
      complemento: 'Torre 3',
      bairro: 'Bairro Moderno',
      cidade: 'Cidade Nova Era',
      estado: 'Estado Atual',
    },
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david@example.com',
    phone: '789-012-3456',
    oldAddress: {
      cep: '56789-012',
      rua: 'Rua Velha Guarda',
      numero: '159',
      complemento: '',
      bairro: 'Bairro Histório',
      cidade: 'Cidade Antiga',
      estado: 'Estado Tradicional',
    },
    newAddress: {
      cep: '54321-098',
      rua: 'Rua do Futuro',
      numero: '753',
      complemento: 'Casa 7',
      bairro: 'Bairro Futurista',
      cidade: 'Cidade do Amanhã',
      estado: 'Estado Inovador',
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