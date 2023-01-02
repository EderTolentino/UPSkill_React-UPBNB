import "./Reserva.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import FotoCapa from "../FotoCapa/FotoCapa";

function Reserva(props) {
    return <div className="Reserva">
        <FotoCapa id={props.id} featured_photo={props.featured_photo} />
        <div className={"conteudo"}>
            <div className={"lugar"}>
                <h3 className={"cidade"}>{props.city + ", " + props.country} </h3>
                <div className={"rating"}>
                    <h3><FontAwesomeIcon icon={faStar}/></h3>
                    <h4>{props.rating}</h4>
                </div>
            </div>
            <h4 className={"periodo"}>{props.time}</h4>
            <div className={"preco"}>
                <h3>{props.price + "€"}</h3>
                <h4>noite</h4>
            </div>
        </div>
    </div>;
}

export default Reserva;