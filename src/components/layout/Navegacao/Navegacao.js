import "./Navegacao.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faHeart} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import logoMenu from "../../../assets/logo_menu.svg"

function Navegacao() {
    return <nav className="Navegacao">
        <div className={"Container"}>
            <div className={"box"}><NavLink to={"/pesquisar"}><FontAwesomeIcon className={"icone"} icon={faMagnifyingGlass}/></NavLink></div>
            <div className={"logo"}><NavLink to={"/home"}><img src={logoMenu} alt={"Logo"}/></NavLink></div>
            <div className={"box"}><NavLink to={"/favoritos"}><FontAwesomeIcon className={"icone"} icon={faHeart}/></NavLink></div>
        </div>
    </nav>;
}

export default Navegacao;
