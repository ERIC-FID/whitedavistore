import "./Section5.css"
import {Mail,User,MessageSquare,Send, Target} from "lucide-react"
import { useState,useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import axios from "axios";
function Contact(){
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [message,SetMessage] = useState("");
    const [status,setStatus] = useState("");

    const handleSend = async (e)=>{
        e.preventDefault()
    try {
      const response =   await axios.post("https://formspree.io/f/xrbovrzb",{
        name,
        email,
        message   
        });
        if (response.status == 200){
            setStatus("message sent succuessfully")
            setEmail("")
            setName("")
            SetMessage("")
        }
        else {
            setStatus("Not successful")
        }
    } 
    catch (error){
        setStatus("fail to send check ur connection")
    }
    };

       useEffect(() => {
                AOS.init({
                duration: 1000, // how long animations take (ms)
              once: true,     // only animate once
              easing: "ease-in-out", // smooth effect
            })
          }, [])

    return (
        <section className="contact" id="contact" data-aos="zoom-in" data-aos-duration="1500">
                                
            <h1 className="head" style={{marginLeft:"0"}}>Contact Us</h1>
                <div className="big">
                      <div className="small">    
                         <div className="word">
                             <h1 style={{fontFamily:"sans-serif",fontSize:"1.3em"}}>Get In Touch</h1>
                            <p style={{fontFamily:"sans-serif",fontSize:"0.8em",fontWeight:"bold"}}>We’d Love to Hear from You</p>
                         </div>
                         
                        <form onSubmit={handleSend} style={{width:"80%"}} className="init">
                            <div>
                                <User ize={25} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"black"}}/>
                                <input type="text"
                                 placeholder="Name"
                                 onChange={(e)=>setName(e.target.value
                                )}
                                value={name}
                                 />

                            </div> 
                               
                            <div>
                                <Mail size={25} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"black"}}/>
                                <input type="Email" 
                                placeholder="Email"
                                onChange={(e)=>setEmail(e.target.value
                                )} 
                                value= {email}
                                />
                               
                            </div>

                            <div className="work">
                                <MessageSquare size={25} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"rgba(0,0,0,0.1)"}}/>
                                <textarea name="" id=""
                                 placeholder="Your Message"
                                onChange={(e)=>SetMessage(e.target.value
                                )}
                                value= {message}
                                 ></textarea>
                            </div>
                               <button type="submit" className="btn" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center", gap:"1rem",padding:"0.5rem 1rem",backgroundColor:"#333333",color:"#fefefe",marginTop:"1rem",borderRadius:"10px"}}>Send Message    
                                <span><Send size={25} strokeWidth={1} color="#FEFEFE" style={{marginLeft:"0.5rem", color:"black"}}/></span></button>
                                 <p style={{textAlign:"center"}}>{status}</p>
                        </form>


                         

                           

                      </div>

                </div>
          
          
        </section>
    )
}

export default Contact