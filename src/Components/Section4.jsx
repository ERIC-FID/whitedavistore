import "./Section4.css"
import { useState,useEffect } from "react"
import "./Card.css"
import AOS from "aos"
import "aos/dist/aos.css"

function AboutUs(){

     useEffect(() => {
         AOS.init({
         duration: 1000, // animation duration in ms
         easing: "ease-in-out", // easing function
         once: true, // animation only happens once
    });
  }, []);

   const  word = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione"

    const [view,setView] = useState(false);
    const [cut,setCut] = useState(word.slice(0,400))

  
    
 function Words() {
    setView(prevView => {
        const newView = !prevView

        if (newView) {
        setCut(word.slice())          
       } else {
          setCut(word.slice(0, 400))    
       }

    return newView
  })
}


    return(
        <section className="about" id="about">
            
            <h1 className="head">About Us</h1>
            <div className="min">
                <div className="words" data-aos="slide-right"  data-aos-duration="1500" style={{fontFamily:"sans-serif",color:"#838080ff"}}>
                    {cut}
                    <button onClick={Words} className="btn3">Read More</button>
                </div>
                

            
                <div className="image" data-aos="slide-left" data-aos-duration="1500">
                    <img src="/whitedavistore/Images/Cover_Hero.jpg" alt="" />
                </div>

            </div>
        </section>
    )
}

export default AboutUs