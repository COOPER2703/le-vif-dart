
import Card from "../components/Card"
import styled from "styled-components"
import { retrieveAllFlashs } from "../api/Flash";
import { useEffect, useState } from "react";
import { Flash } from "../models/Flash";
import CardFocus from "../components/CardFocus";


const FlashBook : React.FC = () => {

    const [flashs, setFlashs] = useState<Flash[]>([])
    const [cardFocus, setCardFocus] = useState<Flash | null>(null)

    useEffect(() => {
        retrieveData()
    }, []);

    const handleClick = (el: Flash) => {
        setCardFocus(el)
    }

    const retrieveData = async () => {
        const result = await retrieveAllFlashs()
        console.log(result)
        if (result.data) {
            setFlashs(result.data)
        }
    }

    return (
        <>
        {cardFocus && <CardFocus cardData={cardFocus} onCrossClick={() => setCardFocus(null) } />}

        <FlashBookContainer>

            <Title> Mes potits flashs </Title>

            <CardTable>
                {flashs.map(el => (<Card cardData={el} onClick={() => handleClick(el) }/>))}
            </CardTable>

        </FlashBookContainer>
        </>
    )
}

const FlashBookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-bottom: 48px;
`;

const Title = styled.h2`
    ::after {
        position: absolute;
        content: '';
        height: 1.5px;
        transform: translateY(calc(1em + 4px));
        
        margin: 0 auto;
        left: 0;  
        right: 0;
        width: 8rem;
        background: var(--dark-violet);
    
    }
`;

const CardTable = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, auto);

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(2, auto);
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: auto;
    }
`;

export default FlashBook