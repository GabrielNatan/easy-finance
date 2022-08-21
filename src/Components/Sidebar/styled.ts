import styled from "styled-components";

interface ContainerProps {
    open: boolean
}

interface ContainerLogoProps {
    open: boolean
}

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.open ? "300px" : "90px"};
    height: 100vh;
    background-color: var(--secondary-color);
    transition: var(--transition);
`

export const ContainerLogo = styled.div<ContainerLogoProps>`
    width: ${(props)=> props.open ? "100%" : "75px"};
    padding: 45px 25px;
    overflow: hidden;
    transition: var(--transition);
`

export const List = styled.ul`
    width: 100%;

    li{
        width: 100%;
        padding: 10px 25px;
        overflow: hidden;
        &:hover{
            background-color: var(--primary-hover-color);
        }

        &:hover .cont-link{
            color: #FFF;
        }
        a{
            text-decoration: none;
            .cont-link{
                width: 250px;
                display: flex;
                align-items: center;
                color: var(--base-grey);
                gap: 30px;
                padding: 10px;
                border-radius: 10px;
                
                p{
                    font-weight: bold;
                    font-size: var(--font-size-primary-lg);
                }
            }

        }
    }
`