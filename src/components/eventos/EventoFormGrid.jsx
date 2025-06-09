import React, { useEffect, useState } from "react";
import {
    FormGrid, FormColumn, Label, EditInput, EditInputDate, EventTimeInput,
    EventValueInput, ImagePreview, EventImage, ActionButton, ImageUploadContainer,
    ImagePlaceholder, ImageUploadButton
} from "./styleEventos";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaMoneyBillWave, FaImage, FaTrash } from "react-icons/fa";
import api from "../../api";



const EventFormGrid = ({
    editableEvent,
    handleChange,
    handleImageChange,
    handleImageRemove
}) => {

    async function buscarCep() {
            const endereco = await api.get(`/enderecos/buscar/${editableEvent.cep}`);
            console.log("Dados do endereço:", endereco.data);
            // Aqui você pode atualizar os campos rua, bairro, etc, se quiser
            // Exemplo:
            // handleChange({ target: { name: 'rua', value: endereco.data.rua } });

            var localidade = endereco.data.localidade + " - " + endereco.data.uf;

            handleChange({ target: { name: 'rua', value: endereco.data.logradouro } });
            handleChange({ target: { name: 'bairro', value: endereco.data.bairro } });
            handleChange({ target: { name: 'localidade', value: localidade} });
            handleChange({ target: { name: 'uf', value: endereco.data.uf } });
    }

    useEffect(() => {
        console.log("CEP alterado:", editableEvent.cep);
        // Verifica se o CEP tem 8 dígitos antes de buscar
        if (editableEvent.cep && editableEvent.cep.length >= 8) {
            console.log("Buscando CEP:", editableEvent.cep);
            buscarCep();
        }
        // eslint-disable-next-line
    }, [editableEvent.cep]);

    return (
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
                    <Label>CEP: *</Label>
                    <EditInput
                        name="cep"
                        value={editableEvent.cep}
                        onChange={handleChange}
                        maxLength={8}
                        onBlur={buscarCep}
                        placeholder="Ex: Centro de Convenções"
                        icon={<FaMapMarkerAlt />}
                    />
                </div>
                <div>
                    <Label>Rua: *</Label>
                    <EditInput
                        name="rua"
                        value={editableEvent.rua}
                        onChange={handleChange}
                        readOnly={true}
                        placeholder="Ex: rua das flores, avenida paulista"
                        icon={<FaMapMarkerAlt />}
                    />
                </div>
                <div>
                    <Label>Bairro: *</Label>
                    <EditInput
                        name="bairro"
                        value={editableEvent.bairro}
                        onChange={handleChange}
                        readOnly={true}
                        placeholder="Ex: liberdade, pinheiros"
                        icon={<FaMapMarkerAlt />}
                    />
                </div>
                <div>
                    <Label>Numero: *</Label>
                    <EditInput
                        name="numero"
                        value={editableEvent.numero}
                        onChange={handleChange}
                        placeholder="Ex: 100, 150"
                        icon={<FaMapMarkerAlt />}
                    />
                </div>
                <div>
                    <Label>Complemento: </Label>
                    <EditInput
                        name="complemento"
                        value={editableEvent.complemento}
                        onChange={handleChange}
                        placeholder="Ex: apto 102, sala 5"
                        icon={<FaMapMarkerAlt />}
                    />
                </div>
                <div>
                    <Label>Cidade - Estado: *</Label>
                    <EditInput
                        name="Cidade - Estado"
                        value={`${editableEvent.localidade}`}
                        readOnly={true}
                        onChange={handleChange}
                        placeholder="Ex: são caetano - sp, rio de janeiro - rj"
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
                        type="time"
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
                    <Label>Descrição: *</Label>
                    <EditInput
                        as="textarea"
                        rows="2"
                        name="description"
                        value={editableEvent.description}
                        onChange={handleChange}
                        placeholder="Descreva os detalhes do evento"
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
    );
}

export default EventFormGrid;