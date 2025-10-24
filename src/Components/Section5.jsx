import "./Section5.css"
import {Mail,User,MessageSquare,Send} from "lucide-react"
function Contact(){


    return (
        <section className="contact" id="contact">
            <h1 className="head" style={{marginLeft:"0"}}>Contact Us</h1>
                <div className="big">
                      <div className="small">    
                         <div className="word">
                             <h1 style={{fontFamily:"sans-serif",fontSize:"1.3em"}}>Get In Touch</h1>
                            <p style={{fontFamily:"sans-serif",fontSize:"0.8em",fontWeight:"bold"}}>We’d Love to Hear from You</p>
                         </div>
                         
                        <div style={{width:"80%"}} className="init">
                             <label htmlFor="" style={{display:"block",fontSize:"1.2em",marginTop:"0.5rem",color:"#00000082"}}>Name</label>
                            <div>
                                <User ize={30} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"black"}}/>
                                <input type="text" placeholder="Eric Fid"/>

                            </div> 
                               
                            <label htmlFor="" style={{display:"block",fontSize:"1.2em",marginTop:"0.5rem",color:"#00000082"}}>Email</label>
                            <div>
                                <Mail size={30} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"black"}}/>
                                <input type="Email" placeholder="ericfid@gmail.com" />
                            </div>

                              <label htmlFor="" style={{fontSize:"1.2em",marginTop:"0.5rem",color:"#00000082"}}>Your Message</label>
                            <div className="work">
                                <MessageSquare size={30} strokeWidth={1} color="rgba(0,0,0,0.5)" style={{marginLeft:"0.5rem", color:"rgba(0,0,0,0.1)"}}/>
                                <textarea name="" id="" placeholder="Have any requests? Write them here!"></textarea>
                            </div>
                               <button className="btn" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center", gap:"1rem",padding:"0.5rem 1rem",backgroundColor:"#333333",color:"#fefefe",marginTop:"1rem",borderRadius:"10px"}}>Send Message <span><Send size={30} strokeWidth={1} color="#FEFEFE" style={{marginLeft:"0.5rem", color:"black"}}/></span></button>

                        </div>

                      </div>

                </div>
          
          
        </section>
    )
}

export default Contact