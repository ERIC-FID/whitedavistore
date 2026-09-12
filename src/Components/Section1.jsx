import AOS from "aos"
import "aos/dist/aos.css"
import "./Section1.css"
import { useEffect } from "react"
function HeroSection(){

    useEffect(() => {
        AOS.init({
        duration: 1500, // how long animations take (ms)
      once: true,     // only animate once
      easing: "ease-in-out", // smooth effect
    })
  }, [])

    return(
        <section className="hero" id="home">
            <div className="box" data-aos="fade-up" data-aos-duration="1500">
                <h1>Dress <br /> <span>Like You Mean It</span></h1>
                <p>" Clothes That Makes Confidence Look Effortless. "</p>
                <button className="btn1">Explore...</button>
            </div>
            
        </section>
    )
}

export default HeroSection