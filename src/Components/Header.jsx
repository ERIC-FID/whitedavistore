import "./Header.css"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

function Header(){
    const [menuOpen, setMenu] = useState(false)

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
        <>
            <header>
                <div className="hold">
                    <img src="/whitedavistore/Images/logo.png" alt="WhitedavidStore Logo" className="logo"/>
                    <h2>WhitedavidStore</h2>
                </div>
                
                <div className="menu-btn-container" onClick={() => setMenu(!menuOpen)}>
                    <Menu size={25} color="var(--text-primary)" className="Menu"/>
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
            
            {/* Backdrop for mobile menu */}
            {menuOpen && <div className="menu-backdrop" onClick={() => setMenu(false)}></div>}
        </>
    )
}
export default Header