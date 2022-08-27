import {Container} from "./styled"

interface Add{
    icon?:JSX.Element;
    text?:String
}

export const Add = ({icon,text}:Add)=>{
    return(
        <Container>
            {icon}
            {text}
        </Container>
    )
} 

