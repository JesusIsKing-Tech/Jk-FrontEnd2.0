import React, { useState, useEffect } from 'react';
import {
  BoxTroca, Container, Sidebar, RequestItem, Details, Message,
  RequestTitle, ContactInfo, AddressInfo, ButtonGroup, ActionButton,
  AddressCard, ActionButtonNao
} from './styleEndereco';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import api from '../../api';
import Swal from 'sweetalert2';

const addressRequests2 = [
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
  const [addressRequests, setAddressRequests] = useState([]);

  useEffect(() => {
    async function addressRequests() {
      try {
        const response = await api.get("/enderecos/chamados");

        const requests = Array.isArray(response.data) ? response.data : [];

        console.log(response.data);

        console.warn("Pedidos de alteração de endereço:", response.data);

        const mappedRequests = requests.map(request => ({
          id: request.id,
          name: request.usuario.nome,
          email: request.usuario.email,
          phone: request.usuario.telefone,
          newAddress: {
            cep: request.cep,
            rua: request.logradouro,
            numero: request.numero,
            complemento: request.complemento,
            bairro: request.bairro,
            cidade: request.localidade,
            estado: request.uf,
          },
          oldAddress: {
            cep: request.usuario.endereco.cep,
            rua: request.usuario.endereco.logradouro,
            numero: request.usuario.endereco.numero,
            complemento: request.usuario.endereco.complemento,
            bairro: request.usuario.endereco.bairro,
            cidade: request.usuario.endereco.localidade,
            estado: request.usuario.endereco.uf,
          },
        }));

        console.log(mappedRequests);

        setAddressRequests(mappedRequests);


      } catch (error) {
        console.error("Erro ao buscar pedidos de alteração de endereço:", error);
      }
    }

    addressRequests();
  }, []);


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

  const approveRequest = (id) => {
    async function approveRequest(id) {
      try {
        if (selectedRequest) {
          await api.post(`/enderecos/${id}/aprovar-chamado`);
          Swal.fire({
            title: 'Pedido Aceito',
            text: `Você aceitou o pedido de alteração de endereço de ${selectedRequest.name}.`,
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            setAddressRequests(prev =>
              prev.filter(request => request.id !== id)
            );
            setSelectedRequest(null); // Limpa seleção
          });
        }
      } catch (error) {
        console.error("Erro ao aceitar pedido de alteração de endereço:", error);
        Swal.fire({
          title: 'Erro',
          text: 'Não foi possível aceitar o pedido. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
    approveRequest(id);
  }

  const rejectRequest = (id) => {
    async function rejectRequest(id) {
      try {
        if (selectedRequest) {
          await api.post(`/enderecos/${id}/rejeitar-chamado`);
          Swal.fire({
            title: 'Pedido Recusado',
            text: `Você recusou o pedido de alteração de endereço de ${selectedRequest.name}.`,
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            setAddressRequests(prev =>
              prev.filter(request => request.id !== id)
            );
            setSelectedRequest(null); // Limpa seleção
          });
        }
      } catch (error) {
        console.error("Erro ao recusar pedido de alteração de endereço:", error);
        Swal.fire({
          title: 'Erro',
          text: 'Não foi possível recusar o pedido. Tente novamente mais tarde.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
    rejectRequest(id);
  }


  return (
    <BoxTroca>
      <Container>
        <Sidebar>
          {addressRequests.map((request) => (
            <RequestItem
              key={request.id}
              $isSelected={selectedRequest && selectedRequest.id === request.id}
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
                <ActionButton onClick={() => approveRequest(selectedRequest.id)}>Aceitar</ActionButton>
                <ActionButtonNao onClick={() => rejectRequest(selectedRequest.id)}>Recusar</ActionButtonNao>
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