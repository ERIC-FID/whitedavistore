import "./Card.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function Card({img}){
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        })
    }, [])
    
    return (
        <div className="card" data-aos="fade-up" data-aos-duration="1500">
            <div className="card-image-container">
                <img src={img} alt="Product" />
            </div>
            <div className="card-content">
                <p className="card-title">Vintage & Joggers</p>
                <p className="card-price">₦12,000</p>
            </div>
        </div>
    )
}
export default Card