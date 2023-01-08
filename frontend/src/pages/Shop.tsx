import styled from "styled-components";

const Shop: React.FC = () => {
    return (
        <>
            <ShopContainer>
                <Title> {"Pas encore disponible :("} </Title>
                <SubTitle> {"( Je compte sur vous pour revenir quand ce sera prêt )"} </SubTitle>
            </ShopContainer>
        </>
    )
}

const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem;
`;

const Title = styled.h1`
`;

const SubTitle = styled.p`
    font-weight: 300;
`;

export default Shop