import {Container, Name, Date, NumberCard} from "./styled"
import masterCard from "../../Image/master-card.svg"
export const Card = ()=>{
    return (
        <Container>
            <NumberCard>
                1234 ***** ***** *****
            </NumberCard>
            <Name>
                Alice Willians
            </Name>
            <Date>
                <span>
                    valid    
                </span>
                <span>
                    20/10
                </span>
            </Date>
            <img className="logo-bandeira" src={masterCard}/>
        </Container>
    )
}