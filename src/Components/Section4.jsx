import "./Section4.css"
import { useState } from "react"
function AboutUs(){

   const  word = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione"

    const [view,setView] = useState(false);
    const [cut,setCut] = useState(word.slice(0,400))

  
    

    function Words (){
        setView(!view)
        if (view === true){
            setCut(word.slice())
            setView(false)
        }

        else 
            setCut(word.slice(0,400))
    }

    return(
        <section className="about" id="about">
            
            <h1 className="head">About Us</h1>
            <div className="min">
                <div className="words">
                    {cut}
                    <button onClick={Words} className="btn3">Read More</button>
                </div>
                

            
                <div className="image">
                    <img src="/whitedavistore/Images/Cover_Hero.jpg" alt="" />
                </div>

            </div>
        </section>
    )
}

export default AboutUs