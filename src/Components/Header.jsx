import "./Header.css"
import { useState } from "react"
import { Menu } from "lucide-react"
import { useEffect } from "react"
function Header(){
    const [menuOpen,setMenu] = useState(false)

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "auto"; 
        }

         return () => {
         document.body.style.overflow = "auto"; 
         };
    }, [menuOpen]);



    return (
        <header>
           <div className="hold">
                    <img src="/whitedavistore/Images/logo.png" alt="" style={{width:"3rem"}}/>
                     <h2>WhitedavidStore</h2>
                   
           </div>
           <div style={{border:"none",padding:"0.5rem",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#f0f0f0"}}>
                 <Menu size={25} color="black" className="Menu" onClick={() => setMenu(!menuOpen)} style={{}}/>
           </div>
            
            <div className="list">
          
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#vieww">Gallery</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

             <div className={`listMobile ${menuOpen ? "open" : ""} `}>
                <ul>
                    <li><i className="fa-solid fa-house-chimney"></i><a href="#home" onClick={()=>setMenu(false)}>Home</a></li>
                    <li><i className="fa-brands fa-microsoft"></i><a href="#vieww" onClick={()=>setMenu(false)}>Gallery</a></li>
                    <li><i className="fa-solid fa-user"></i><a href="#about" onClick={()=>setMenu(false)}>About</a></li>
                    <li><i className="fa-solid fa-envelope"></i><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}
export default Header