import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 250px;
    height: 150px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    background-image: linear-gradient(to right,#30A6FB, #1674B9);
    font-size: var(--font-size-primary-sm);
    color: white;
    position: relative;

    .logo-bandeira{
        width: 37px;
        height: 22px;
        position: absolute;
        right: 15px;
        bottom: 15px;
    }

`

export const NumberCard = styled.div`


`

export const Name = styled.div`
    text-transform: uppercase;
` 

export const Date = styled.div`
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-secondary-sm);

` 