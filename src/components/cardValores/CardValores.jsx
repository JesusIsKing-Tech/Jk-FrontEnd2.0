import { CardContainer, ContainerImg, ContainerText, ContainerTittle, Title } from "./styleCardValores";


function CardValores({ icon, title, value }) {
    return (

        <CardContainer>
            <ContainerImg>
                <img src={icon} alt="Ícone" />
            </ContainerImg>

            <ContainerTittle>
                <Title>{title}</Title>
            </ContainerTittle>


            <ContainerText>
                <p>
                    {value}
                </p>
            </ContainerText>
        </CardContainer>

    );
}

export default CardValores;