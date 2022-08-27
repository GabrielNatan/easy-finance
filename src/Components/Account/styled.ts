import styled from "styled-components";

interface ContainerAccountProps{
    image?: String
}

interface ImageContainer{
    image?: String
}

export const Container = styled.div<ContainerAccountProps>`
    width: 300px;
    max-width: auto;
    padding: 10px 15px;
    border-radius: 10px;
    background-color: var(--secondary-color);
    display:flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;

`

export const ImageContainer = styled.div<ImageContainer>`
        border-radius: 50%;
        height: 40px;
        width: 40px;
        border: 2px solid var(--primary-color);
        overflow: hidden;

        background-image: ${props=>{return `url(${props.image})`}};
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

`