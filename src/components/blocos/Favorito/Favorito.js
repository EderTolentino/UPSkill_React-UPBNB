import "./Favorito.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import FotoCapa from "../FotoCapa/FotoCapa";

function Favorito(props) {
    return <div className="Favorito">
        <FotoCapa id={props.id} featured_photo={props.featured_photo} />
        <div className={"conteudo"}>
            <div className={"lugar"}>
                <h3>{props.city} </h3>
            </div>
            <h4 className={"anfitriao"}>{"Anfitrião " + props.host_type}</h4>
            <div className={"preco"}>
                <h3>{props.price + "€"}</h3>
                <h4>noite</h4>
            </div>
            <div className={"rating"}>
                <h3><FontAwesomeIcon icon={faStar}/></h3>
                <h4>{props.rating}</h4>
            </div>
        </div>
    </div>;
}

export default Favorito;