import "./Section6.css"
function Footer(){


    return (
        <footer>
            <img src="Images/whitedavid.png" alt="" style={{width:"4rem",marginTop:"0.5rem"}} className="logo" />
            <div className="grid">
                <div className="words">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, ducimus quisquam!     Architecto quidem repellendus maiores? Dicta mollitia aspernatur itaque, odit repellat corporis rerum perspiciatis, rem minima voluptatem ipsa qui quae.
                </div>
                <div className="right">
                    <h3>Store Information</h3>
                    <ul>
                        <li>Address: 123,Maitumbi Minna</li>
                        <li>Phone: 1234567890</li>
                        <li>Email: Demo@Demo.Com</li>
                    </ul>
                </div>
                <div className="left">
                    <h3>Follow Us</h3>
                     <ul>
                        <li><i className="fa-brands fa-facebook" style={{fontSize:"0.8rem",marginRight:"0.2rem"}}></i>Facebook</li>
                        <li><i class="fa-brands fa-square-twitter" style={{fontSize:"0.8rem",marginRight:"0.2rem"}}></i>Twitter</li>
                        <li><i class="fa-brands fa-whatsapp" style={{fontSize:"0.8rem",marginRight:"0.2rem"}}></i>WhatsApp</li>
                        <li><i class="fa-brands fa-linkedin" style={{fontSize:"0.8rem",marginRight:"0.2rem"}}></i>Linkdin</li>
                     </ul>
                </div>

            </div>
            <div className="smallfoot">
                <p>Copyright © 2024 - All Right Reserved PrestaShop™</p>
                <p style={{marginTop:"0.2rem"}}>Designed by 09032627726</p>
               
            </div>

        </footer>
    )
}

export default Footer