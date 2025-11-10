import "./Section2.css"
import Card from "./card"
import Maylike from "./Section3"
import { useState,useEffect } from "react"
function OurProducts(){

    const [selected,setSelected] =  useState(0)

    const buttons = ["New Products","Branded Products", "Recent Product"]


        const Images = [
               [ "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg"],
                [
                    "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                     "/whitedavistore/Images/sample2.jpg",
                     "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                     "/whitedavistore/Images/sample2.jpg",
                    "/whitedavistore/Images/sample2.jpg",
                     "/whitedavistore/Images/sample2.jpg",
                ],
                 [ "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample2.jpg",
                "/whitedavistore/Images/sample.jpg"]
    ]

    const [number,setNumber] = useState(8)
    const [View,setView] = useState(false)
    const [less,setLess] = useState(Images[selected].slice(0,number))
    const [word,setWord] = useState("View All Products")

    

       
       useEffect( ()=>{
                const handleResize = () => {          
                  if (window.innerWidth <= 500) {
                      setNumber(4);   
                
                  } 
                  else {
                         setNumber(8);    
             }
      };
             handleResize();    
             window.addEventListener("resize", handleResize);

             
         return () => window.removeEventListener("resize", handleResize)},

       [View,number])
     useEffect( ()=>{

                     if (View === true){
                          setLess(Images[selected].slice())
                          setWord("View Less")
                         
                         
                        }
                     else {
                        setLess (Images[selected].slice(0,number))
                         setWord("View All Products")
                       
                 }


     },[selected,number,View]

     )

       function viewless() {
            setView((prev) => !prev);
         }
    

            


    return (

        <>
                <section className="section2" id="vieww">
                    <p className="title">WhitedavidStore Collection</p>
                    <h1 className="head">Our Products</h1>
                    <hr />
                    <div className="btnbox">
                        {
                            buttons.map((label,index)=>(
                                <button 
                                key = {index}
                                onClick={()=>setSelected(index)} 
                                className={selected === index? "active":""}
                                >{label}</button>

                            ))
                        }
                    </div>
                    <div className="grid">

                       {
                        less.map((src,index)=>(
                        <Card key ={index} img ={src}/>
                          ) )}    
                    </div>
                    <button className="viewbtn" onClick={() => {
                    document.getElementById("vieww").scrollIntoView({ behavior: "smooth" })
                            viewless() }}>{word}</button>
                    <Maylike images = {Images} Less = {less}/>
                </section>

                    
       </>
    )
}

export default OurProducts