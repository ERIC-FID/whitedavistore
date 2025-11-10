import "./Topbar.css"
import { Phone } from "lucide-react"


function Topbar(){

    return (
        <div className="Topbar">

            
                <Phone size = {15} color="#fefefe" fill="#fefefe" className="phone"/>  
                  <p> +234 903 262 7726</p>
                
           
            
        </div>
    )
}

export default Topbar