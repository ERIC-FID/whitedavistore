import "./Section4.css"
import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function AboutUs(){
    const [view, setView] = useState(false);
    
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const word = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sapiente, nostrum assumenda quam debitis voluptatum doloremque voluptas quia reprehenderit fugiat quidem est illum eos ut magnam dolore dignissimos temporibus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cumque et numquam amet nisi fugiat fuga perspiciatis repellendus commodi eius! Ipsa iure architecto fuga. Provident accusantium explicabo nisi? Eos, ratione.";

    function toggleView() {
        setView(!view);
    }

    const displayWord = view ? word : word.slice(0, 400) + "...";

    return(
        <section className="about" id="about">
            <h1 className="head">About Us</h1>
            <div className="min">
                <div className="words" data-aos="slide-right" data-aos-duration="1500">
                    <p>{displayWord}</p>
                    <button onClick={toggleView} className="btn3">
                        {view ? "Read Less" : "Read More"}
                    </button>
                </div>
                
                <div className="image" data-aos="slide-left" data-aos-duration="1500">
                    <img src="/whitedavistore/Images/Cover_Hero.jpg" alt="About Us" />
                </div>
            </div>
        </section>
    )
}

export default AboutUs