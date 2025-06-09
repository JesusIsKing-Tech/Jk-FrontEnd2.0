import React, { useState, useEffect } from "react";
import HeaderLogado from "../../components/headerLogado/headerLogado";
import api from "../../api"; // Axios configurado
import Swal from "sweetalert2";
import {
  Background,
  Container,
  Titulo,
  TituloContainer,
  Form,
  InputContainer,
  Input,
  Label,
  Button,
  Image,
  Tabela,
  Cabecalho,
  Linha,
  Celula,
  BotaoVoltar,
} from "./doeStyle";
import img from "../../assets/doe.png";

const Doe = () => {
  const [formData, setFormData] = useState({
    cep: "",
    logradouro: "",
    bairro: "",
    localidade: "",
    uf: "",
    numero: "",
    complemento: "",
  });

  const [idEndereco, setIdEndereco] = useState(null);
  const [familia, setFamilia] = useState({
    nomeFamilia: "",
    integrantes: [],
  });

  const [verificado, setVerificado] = useState(false);

  useEffect(() => {
    const fetchAddress = async () => {
      if (formData.cep.length === 8) {
        try {
          const response = await api.get(`/enderecos/buscar/${formData.cep}`);
          if (response && response.data) {
            const { id, logradouro, bairro, localidade, uf } = response.data;
            setFormData((prev) => ({
              ...prev,
              logradouro,
              bairro,
              localidade,
              uf,
            }));
            setIdEndereco(id);
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response?.data?.message || "Erro ao buscar endereço",
            confirmButtonText: "OK",
          });
        }
      }
    };
    fetchAddress();
  }, [formData.cep]);

  useEffect(() => {
    const fetchFamilia = async () => {
      console.log("🔍 Executando useEffect");
      console.log("verificado:", verificado);
      console.log("idEndereco:", idEndereco);
  
      if (verificado && idEndereco) {
        try {
          console.log("📡 Fazendo requisição para:", `/usuarios/familia?enderecoId=${idEndereco}`);
          const response = await api.get(`/usuarios/familia?enderecoId=${idEndereco}`);
          if (response && response.data) {
            const familiaFiltrada = response.data.filter(membro => membro.endereco?.id === idEndereco);
            const nomeFamilia = familiaFiltrada[0]?.endereco?.logradouro || "Sem Nome";
            setFamilia({
              nomeFamilia,
              integrantes: familiaFiltrada,
            });
          }
        } catch (error) {
          console.error("❌ Erro ao buscar família:", error);
          Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Não foi possível carregar a família",
          });
        }
      }
    };
    fetchFamilia();
  }, [verificado, idEndereco]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleVerificar = (e) => {
    e.preventDefault();
    if (
      formData.cep &&
      formData.logradouro &&
      formData.bairro &&
      formData.localidade &&
      formData.uf &&
      formData.numero
    ) {
      setVerificado(true);
    } else {
      Swal.fire("Atenção", "Por favor, preencha todos os campos obrigatórios.", "warning");
    }
  };

  const handleVoltar = () => {
    setVerificado(false);
  };

  return (
    <>
      <HeaderLogado />
      <Background>
        <Image src={img} alt="Imagem de doação" />
        <Container>
          <TituloContainer>
            <Titulo>{verificado ? "SELECIONE O RESPONSÁVEL" : "RETIRAR DOAÇÃO"}</Titulo>
          </TituloContainer>

          {!verificado ? (
            <Form onSubmit={handleVerificar}>
              <InputContainer>
                <Label htmlFor="cep">CEP</Label>
                <Input
                  type="text"
                  id="cep"
                  name="cep"
                  placeholder="Digite seu CEP"
                  maxLength={8}
                  value={formData.cep}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="logradouro">Rua</Label>
                <Input type="text" id="logradouro" name="logradouro" value={formData.logradouro} onChange={handleChange} readOnly />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="bairro">Bairro</Label>
                <Input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} readOnly />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="localidade">Cidade</Label>
                <Input type="text" id="localidade" name="localidade" value={formData.localidade} onChange={handleChange} readOnly />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="uf">Estado</Label>
                <Input type="text" id="uf" name="uf" value={formData.uf} onChange={handleChange} readOnly />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="numero">Número</Label>
                <Input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="Número da casa"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="complemento">Complemento</Label>
                <Input
                  type="text"
                  id="complemento"
                  name="complemento"
                  placeholder="Complemento"
                  value={formData.complemento}
                  onChange={handleChange}
                />
              </InputContainer>
              <Button type="submit">Verificar</Button>
            </Form>
          ) : (
            <>
              <TituloContainer>
                <Titulo style={{ fontSize: "20px", marginTop: "20px" }}>
                  Família {familia.nomeFamilia || "Sem Nome"}
                </Titulo>
              </TituloContainer>
              <Tabela>
                <thead>
                  <Linha>
                    <Cabecalho>Nome</Cabecalho>
                    <Cabecalho>Data de Nasc</Cabecalho>
                    <Cabecalho>Telefone</Cabecalho>
                    <Cabecalho>Selecionar</Cabecalho>
                  </Linha>
                </thead>
                <tbody>
                  {familia.integrantes.length > 0 ? (
                    familia.integrantes.map((membro, index) => (
                      <Linha key={index}>
                        <Celula>{membro.nome}</Celula>
                        <Celula>{membro.data_nascimento ? new Date(membro.data_nascimento).toLocaleDateString("pt-BR") : "-"}</Celula>
                        <Celula>{membro.telefone || "-"}</Celula>
                        <Celula>
                          <input type="radio" name="responsavel" style={{ cursor: "pointer" }} />
                        </Celula>
                      </Linha>
                    ))
                  ) : (
                    <Linha>
                      <Celula colSpan={4} style={{ textAlign: "center" }}>
                        Nenhum integrante encontrado.
                      </Celula>
                    </Linha>
                  )}
                </tbody>
              </Tabela>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                <BotaoVoltar onClick={handleVoltar}>&larr; Voltar</BotaoVoltar>
                <Button>Doe</Button>
              </div>
            </>
          )}
        </Container>
      </Background>
    </>
  );
};

export default Doe;
