import HeaderLogado from "../../components/headerLogado/headerLogado";
import { FaEdit, FaSave, FaTimes, FaTrash, FaPlus } from 'react-icons/fa';
import React, { useState } from 'react';

import {
    ProfileContainer,
    Sidebar,
    MainContent,
    ProfileImage,
    InfoLabel,
    InfoInput,
    EditButton,
    Endereco,
    ToggleButton
} from './perfilStyle';

import arroz from '../../assets/arroz.png'

const initialData = {
    nome: "Kauá Vidal",
    email: "kauavidal2004@gmail.com",
    telefone: "11-966555566",
    cestaBasica: true,
    endereco: {
        cep: "09905090",
        rua: "Nove de Setembro",
        numero: "15",
        complemento: "Apartamento 102",
        bairro: "Vila Guiomar",
        cidade: "Santo André",
        estado: "São Paulo"
    },
    imageUrl: "../../assets/arroz.png"
};

function Perfil() {
    const [cestaBasica, setCestaBasica] = useState(initialData.cestaBasica);
    const [editandoPerfil, setEditandoPerfil] = useState(false);
    const [editandoEndereco, setEditandoEndereco] = useState(false);
    const [dados, setDados] = useState(initialData);
    const [dadosOriginais, setDadosOriginais] = useState(initialData);

    const toggleCestaBasica = () => {
        if (editandoPerfil) {
            setCestaBasica(!cestaBasica);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDados((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleEnderecoChange = (e) => {
        const { name, value } = e.target;
        setDados((prevState) => ({
            ...prevState,
            endereco: {
                ...prevState.endereco,
                [name]: value,
            },
        }));
    };

    const iniciarEdicaoPerfil = () => {
        setEditandoPerfil(true);
        setDadosOriginais({ ...dados });
    };

    const cancelarEdicaoPerfil = () => {
        setEditandoPerfil(false);
        setDados(dadosOriginais);
        setCestaBasica(dadosOriginais.cestaBasica);
    };

    const iniciarEdicaoEndereco = () => {
        setEditandoEndereco(true);
        setDadosOriginais({ ...dados });
    };

    const cancelarEdicaoEndereco = () => {
        setEditandoEndereco(false);
        setDados(dadosOriginais);
    };

    return (
        <>
            <HeaderLogado />
            <ProfileContainer>
                <Sidebar>
                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around", marginTop: "50px" }} >
                        <ProfileImage src={arroz} alt="Profile" />
                    </div>
                    {editandoPerfil && (
                        <div style={{ display: "flex", justifyContent: "space-around", width: "80%",marginBottom:"30px" }}>
                            <EditButton>
                                <FaPlus /> Adicionar Foto
                            </EditButton>
                            <EditButton style={{ backgroundColor: '#FF6347' }}>
                                <FaTrash /> Remover Foto
                            </EditButton>
                        </div>
                    )}
                    <InfoLabel>Nome</InfoLabel>
                    <InfoInput type="text" name="nome" value={dados.nome} onChange={handleInputChange} disabled={!editandoPerfil} />

                    <InfoLabel>E-mail</InfoLabel>
                    <InfoInput type="email" name="email" value={dados.email} onChange={handleInputChange} disabled={!editandoPerfil} />

                    <InfoLabel>Telefone</InfoLabel>
                    <InfoInput type="text" name="telefone" value={dados.telefone} onChange={handleInputChange} disabled={!editandoPerfil} />

                    <InfoLabel>Precisa receber cesta básica?</InfoLabel>
                    <div style={{ width: "80%", marginTop: "10px", flexDirection: "row" }}>
                        <ToggleButton active={cestaBasica} onClick={toggleCestaBasica} disabled={!editandoPerfil} />
                    </div>
                    <div style={{ width: "80%", marginTop: "30px", flexDirection: "row" }}>
                        {editandoPerfil ? (
                            <>
                                <EditButton onClick={() => setEditandoPerfil(false)}>
                                    <FaSave /> Salvar
                                </EditButton>
                                <EditButton onClick={cancelarEdicaoPerfil} style={{ marginLeft: '10px', backgroundColor: '#FF6347' }}>
                                    <FaTimes /> Cancelar
                                </EditButton>
                            </>
                        ) : (
                            <EditButton onClick={iniciarEdicaoPerfil}>
                                <FaEdit /> Editar
                            </EditButton>
                        )}
                    </div>
                </Sidebar>

                <MainContent>
                    <Endereco>ENDEREÇO</Endereco>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        <div style={{ flex: '1 1 48%' }}>
                            <InfoLabel>CEP</InfoLabel>
                            <InfoInput type="text" name="cep" value={dados.endereco.cep} onChange={handleEnderecoChange} disabled={!editandoEndereco} />

                            <InfoLabel>Rua</InfoLabel>
                            <InfoInput type="text" name="rua" value={dados.endereco.rua} onChange={handleEnderecoChange} disabled={!editandoEndereco} />

                            <InfoLabel>Bairro</InfoLabel>
                            <InfoInput type="text" name="bairro" value={dados.endereco.bairro} onChange={handleEnderecoChange} disabled={!editandoEndereco} />

                            <InfoLabel>Estado</InfoLabel>
                            <InfoInput type="text" name="estado" value={dados.endereco.estado} onChange={handleEnderecoChange} disabled={!editandoEndereco} />
                        </div>
                        <div style={{ flex: '1 1 48%' }}>
                            <InfoLabel>Número</InfoLabel>
                            <InfoInput type="text" name="numero" value={dados.endereco.numero} onChange={handleEnderecoChange} disabled={!editandoEndereco} />

                            <InfoLabel>Complemento</InfoLabel>
                            <InfoInput type="text" name="complemento" value={dados.endereco.complemento} onChange={handleEnderecoChange} disabled={!editandoEndereco} />

                            <InfoLabel>Cidade</InfoLabel>
                            <InfoInput type="text" name="cidade" value={dados.endereco.cidade} onChange={handleEnderecoChange} disabled={!editandoEndereco} />
                        </div>
                    </div>
                    {editandoEndereco ? (
                        <>
                            <EditButton onClick={() => setEditandoEndereco(false)}>
                                <FaSave /> Salvar
                            </EditButton>
                            <EditButton onClick={cancelarEdicaoEndereco} style={{ marginLeft: '10px', backgroundColor: '#FF6347' }}>
                                <FaTimes /> Cancelar
                            </EditButton>
                        </>
                    ) : (
                        <EditButton onClick={iniciarEdicaoEndereco}>
                            <FaEdit /> Editar
                        </EditButton>
                    )}
                </MainContent>
            </ProfileContainer>
        </>
    );
}

export default Perfil;