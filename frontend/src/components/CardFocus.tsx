import styled from "styled-components"
import { Flash } from "../models/Flash"

interface CardFocusProps {
    cardData: Flash
    onCrossClick: React.MouseEventHandler<HTMLImageElement>
}

const CardFocus : React.FC<CardFocusProps> = ({cardData, onCrossClick}) => {

    const handleReservation = () => {
         
    }

    return (
        <CardFocusContainer>

            
            <CardInfoContainer>
                <HeaderContainer>
                    <Title> Titre: {cardData.title}</Title>
                    <Cross src="src/assets/cross.svg" onClick={onCrossClick} />
                </HeaderContainer>
                <Image src={cardData.imageUrl} alt="Image not found"/>
                <Price> Prix: {cardData.price}€ </Price> 
                <ReservationButton onClick={handleReservation}> Reserver ce flash </ReservationButton>
            </CardInfoContainer>


        </CardFocusContainer>

    )
}

const CardFocusContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: hsla(0 0% 0% / 0.5);    
    z-index: 2;
`;

const CardInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: var(--light-violet);
    padding: 2rem;
    border-radius: 1rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const Cross = styled.img`
    width: 40px;
    height: 40px;
`;

const Title = styled.p`
    opacity: 100%;
`;

const Price = styled.p`
`;

const ReservationButton = styled.a`    
    padding: 0.5em;
    text-align: center;
    transition: all .25s ease;
    border-radius: 1rem;

    :hover, :focus {
        font-size: 1.5rem;
        background-color: var(--violet);
        outline: none;
        border: none;
    }
`;

const Image = styled.img`
    border-radius: 1rem;
    width: 400px;
`;

export default CardFocus