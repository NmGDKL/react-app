import { NavLink } from "react-router-dom"
import {ElementList, UnorderList, HeadText, Span, Head} from "./style"

const Navbar = () => {
  return (
    <div>
        <Head>
        <NavLink to="/react-app/home" style={{textDecoration:'none'}}><HeadText> <Span>{"<NAİM/>"}</Span> Recipe</HeadText></NavLink> 
         <UnorderList>
              <NavLink style={{textDecoration:'none'}} to="/react-app/about"><ElementList>About</ElementList></NavLink> 
              <a href="https://github.com/NmGDKL" style={{textDecoration:'none'}} target="_blank" ><ElementList>Github</ElementList></a>
              <NavLink style={{textDecoration:'none'}} to="/react-app/login"><ElementList>Logout</ElementList></NavLink>
        </UnorderList> 
        </Head>
    </div>
  )
}

export default Navbar