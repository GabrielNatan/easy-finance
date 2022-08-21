import { useState } from "react"
import { FaHome } from "react-icons/fa"
import { Container,ContainerLogo,List } from "./styled"
import Logo from "../../Image/logo.svg"
import LogoLarge from "../../Image/logotext.svg"
import { Link } from "react-router-dom"
const Sidebar = ()=>{
    const [open,setOpen] = useState(false)
    return(
        <Container 
            onMouseOver={()=>setOpen(true)} 
            onMouseOut={()=>setOpen(false)} 
            open={open}>
            <ContainerLogo open={open} >
                <img src={LogoLarge}/>
            </ContainerLogo>
            <List>
                <li>
                    <Link to="/">
                        <div className="cont-link">
                            <FaHome size={25}/>
                            <p>Home</p>    
                        </div>
                    </Link>
                </li>
            </List>
        </Container>
    )
}

export default Sidebar