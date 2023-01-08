import styled from 'styled-components'
import { FC, useEffect } from 'react'
import { Flash } from '../models/Flash'

interface CardProps {
    cardData: Flash
    onClick: React.MouseEventHandler<HTMLDivElement> 
}

const Card : React.FC<CardProps> = ({cardData, onClick}) => {

    return (
        <>
            <CardContainer onClick={onClick}>
                <Image src={cardData.imageUrl}/>
                <TextContainer>
                    <Title>{cardData.title}</Title>
                    <Price>{cardData.price}€</Price>
                </TextContainer>
            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    max-width: 250px;
    padding: 1rem;
    border-radius: 1rem;
    gap: 20px;
    background-color: var(--light-violet);
    transition: all .25s ease;
    box-shadow: 5px 5px 10px var(--black);

    :hover {
        transform: scale(1.2);
    }
`;

const Image = styled.img`
    border-radius: 1rem;
`;

const TextContainer = styled.div`
    display: flex;
    column-gap: 1rem;
    justify-content: space-between;
`;

const Title = styled.p`
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
`;

const Price = styled.p`
`;


export default Card
