import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavBar : React.FC = () => {

    return (
        <NavBarContainer>

            <Logo src="src/assets/logo.png" alt="Logo not found" />

            <NavButtonContainer>
                <NavButton to={"/shop"}> Shop </NavButton>
                <NavButton to={"/flashbook"}> Flashbook </NavButton>
                <NavButton to={"/links"}> Links </NavButton>
            </NavButtonContainer>

        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;

    @media screen and (max-width: 600px) {
        justify-content: flex-end;
    }
`;

const NavButtonContainer = styled.div`
    display: flex;
    position: absolute;
    justify-self: center;
    align-items: center;
    column-gap: 12px;
`;

export const NavButton = styled(NavLink)`
    padding: 0.5em;
    text-decoration: none;
    transition: all .25s ease;
    border-radius: 1rem;

    :hover, :focus {
        font-size: 1.5rem;
        background-color: var(--light-violet);
        outline: none;
        border: none;
    }

`;

const Logo = styled.img`
    position: absolute;
    width: 100px;
    left: 5%;
    top: 3%;
`;


export default NavBar;