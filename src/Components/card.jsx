import "./Card.css"

function Card({img}){
    return (
        <div className="card">
            <img src={img} alt="" />
        </div>
    )
}
export default Card