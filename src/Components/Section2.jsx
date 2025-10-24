import "./Section2.css"
import Card from "./card"
import Maylike from "./Section3"
import { useState,useEffect } from "react"
function OurProducts(){


        const Images = [
                "/Images/sample.jpg",
                "/Images/sample2.jpg",
                "/Images/sample2.jpg",
                "/Images/sample.jpg",
                "/Images/sample.jpg",
                "/Images/sample2.jpg",
                "/Images/sample2.jpg",
                "/Images/sample.jpg",
                "/Images/sample2.jpg",
                "/Images/sample2.jpg",
                "/Images/sample.jpg",
                "/Images/sample.jpg",
                "/Images/sample2.jpg",
                "/Images/sample2.jpg",
                "/Images/sample2.jpg",
                "/Images/sample.jpg"
    ]

    const [number,setNumber] = useState(8)
    const [View,setView] = useState(false)
    const [less,setLess] = useState(Images.slice(0,number))
    const [word,setWord] = useState("View All Products")

       
       useEffect( ()=>{
                const handleResize = () => {          
                  if (window.innerWidth <= 768) {
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

       function viewless(){
                    setView(!View)
                     if (View === true){
                          setLess(Images.slice())
                          setWord("View Less")
                         
                         
                        }
                     else {
                        setLess (Images.slice(0,number))
                         setWord("View All Products")
                       
                 }
            }

    return (

        <>
                <section className="section2" id="vieww">
                    <p className="title">WhitedavidStore Collection</p>
                    <h1 className="head">Our Products</h1>
                    <hr />
                    <div className="btnbox">
                        <button className="active">New Product</button>
                        <button>Featured Product</button>
                        <button>Most Recent</button>
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