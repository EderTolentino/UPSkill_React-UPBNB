import "./FotoCapa.scss";
import {useFavoritos} from "../../../Providers/FavoritosContext";
import {Link} from "react-router-dom";
import heartOpen from "../../../assets/heart_open.svg";
import heartFull from "../../../assets/heart_full.svg";

function FotoCapa(props) {
    const {isFavorito, toggleFavorito} = useFavoritos();
    return <div className="FotoCapa">
        <div className={"imagem"} onClick={()=> {
            toggleFavorito(props.id)
        }}>
            <img src={isFavorito(props.id) ? heartFull : heartOpen}/>
        </div>
        <Link to={"/detalhes/" + props.id}><div className={"foto"} style={{backgroundImage: `url('http://m9-frontend.upskill.appx.pt/upbnb/${props.featured_photo}')`}}></div></Link>
    </div>;
}

export default FotoCapa;