import { CardContainer } from "./styles";

function Card (props) {
    const {img,name,age,bio} = props
        return(
            <CardContainer>
             <img src={img} alt={name}></img>
             <h2>{name}</h2>
             <h1>{age}</h1>
             <p>{bio}</p>
             <button>💗</button>
             <button>X</button>
            </CardContainer>
        )
}

export default Card;