import { useState,useEffect} from "react"
import "./Section3.css"
import Card from "./card"
function Maylike(){
    const [on,setOn] = useState(true)
    const [num,setNum] = useState(0)
    const [visibleCount, setVisibleCount] = useState(8);
    const My = [
        [  "/whitedavistore/Images/sample2.jpg", "/whitedavistore/Images/sample2.jpg","/whitedavistore/Images/sample2.jpg","/whitedavistore/Images/sample2.jpg"],
        ["/whitedavistore/Images/sample.jpg","/whitedavistore/Images/sample.jpg","/whitedavistore/Images/sample.jpg","/whitedavistore/Images/sample.jpg"]
          
    ]
          useEffect(() => {
    const interval = setInterval(() => {
    
      setNum(n => (n + 1) % My.length);
    }, 5000);


    return () => clearInterval(interval);
  }, []);

    

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(8); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const currentImages = My[num].slice(0, visibleCount);

  


    return(
        <section className="like">
            <h1 className="head">Products You May like</h1>
            <hr />
                    <div className="grid">
                        {currentImages.map((element,index)=>(
                            <Card img = {element}/>   

                        ))}
                    
                    </div>
                    
        </section>
    )
}

export default Maylike