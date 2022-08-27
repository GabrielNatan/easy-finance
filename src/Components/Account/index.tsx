import { IconType } from "react-icons";
import { Container, ImageContainer } from "./styled"

interface Account{
    name:String;
    leftIcon?:JSX.Element;
    image?:String;
    rightIcon?: JSX.Element; 
}
export const Account = ({name,leftIcon,image,rightIcon}: Account)=>{
    return (
        <Container>
            <>
                {leftIcon}
                {name}
                <ImageContainer 
                    image={image}
                />
                {rightIcon}
            </>
        </Container>

    )
}

Account.defaultProps ={
    name: 'User name',
    image:'none'
}