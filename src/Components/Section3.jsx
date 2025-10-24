import { useState,useEffect} from "react"
import "./Section3.css"
import Card from "./card"
function Maylike(){
    const [on,setOn] = useState(true)
    const [num,setNum] = useState(0)
    const [visibleCount, setVisibleCount] = useState(8);
    const My = [
        [  "/Images/sample2.jpg", "/Images/sample2.jpg","/Images/sample2.jpg","/Images/sample2.jpg"],
        ["Images/sample.jpg","Images/sample.jpg","Images/sample.jpg","Images/sample.jpg"]
          
    ]
          useEffect(() => {
    const interval = setInterval(() => {
    
      setNum(n => (n + 1) % My.length);
    }, 2000);


    return () => clearInterval(interval);
  }, []);

    
  // 👀 Adjust number of images based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(2); // small screen → 2 images
      } else {
        setVisibleCount(8); // large screen → 8 images
      }
    };

    handleResize(); // check once on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🧩 Pick which group of images to show
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