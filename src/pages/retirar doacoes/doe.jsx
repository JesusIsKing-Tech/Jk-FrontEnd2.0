import HeaderLogado from "../../components/headerLogado/headerLogado";
import React, { useState } from 'react';
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
    Botao,
    BotaoVoltar
} from "./doeStyle"; // ajuste o caminho conforme necessário
import img from "../../assets/doe.png";

function Doe() {
    const [familia, setFamilia] = useState({
        nomeFamilia: 'Soares',
        integrantes: [
            {
                nome: 'Alberto Soares',
                dataNasc: '24/01/1987',
                telefone: '11-933445566'
            }, {
                nome: 'Alberto Soares',
                dataNasc: '24/01/1987',
                telefone: '11-933445566'
            }, {
                nome: 'Alberto Soares',
                dataNasc: '24/01/1987',
                telefone: '11-933445566'
            }, {
                nome: 'Alberto Soares',
                dataNasc: '24/01/1987',
                telefone: '11-933445566'
            }, {
                nome: 'Alberto Soares',
                dataNasc: '24/01/1987',
                telefone: '11-933445566'
            },
            {
                nome: 'Maria Soares',
                dataNasc: '15/05/1990',
                telefone: '11-933445577'
            }
            // Você pode adicionar mais membros aqui
        ]
    });

    const [verificado, setVerificado] = useState(false);

    const handleVerificar = (event) => {
        event.preventDefault();
        setVerificado(true);
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
                        <Titulo>{verificado ? 'SELECIONE O RESPONSÁVEL' : 'RETIRAR DOAÇÃO'}</Titulo>
                    </TituloContainer>

                    {verificado ? (
                        <>
                            <TituloContainer>
                                <Titulo style={{fontSize:"20px",marginTop:"20px"}}>Família {familia.nomeFamilia}</Titulo>
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
                                    {familia.integrantes.map((membro, index) => (
                                        <Linha key={index}>
                                            <Celula>{membro.nome}</Celula>
                                            <Celula>{membro.dataNasc}</Celula>
                                            <Celula>{membro.telefone}</Celula>
                                            <Celula>
                                                <input type="radio" name="selecionar" />
                                            </Celula>
                                        </Linha>
                                    ))}
                                </tbody>
                            </Tabela>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",
                                width:"100%"
                            }}>
                            <BotaoVoltar onClick={handleVoltar}>&larr; Voltar</BotaoVoltar>
                            <Botao>Doar</Botao>
                            </div>
                        </>
                    ) : (
                        <Form>
                            <InputContainer>
                                <Label>CEP</Label>
                                <Input type="text" placeholder="Digite seu cep" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Rua</Label>
                                <Input type="text" placeholder="Digite sua rua" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Número</Label>
                                <Input type="text" placeholder="Digite o número" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Complemento</Label>
                                <Input type="text" placeholder="Digite o complemento" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Bairro</Label>
                                <Input type="text" placeholder="Digite seu bairro" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Cidade</Label>
                                <Input type="text" placeholder="Digite sua cidade" />
                            </InputContainer>
                            <InputContainer>
                                <Label>Estado</Label>
                                <Input type="text" placeholder="Digite seu estado" />
                            </InputContainer>
                            <Button onClick={handleVerificar}>Verificar</Button>
                        </Form>
                    )}
                </Container>
            </Background>
        </>
    );
}

export default Doe;