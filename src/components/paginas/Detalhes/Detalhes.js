import "./Detalhes.scss";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faStar, faDog, faWifi, faTv, faSmoking, faFire, faArrowDown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {useFavoritos} from "../../../Providers/FavoritosContext";
import Comentario from "../../blocos/Comentario/Comentario";
import heartFull from "../../../assets/heart_full.svg";
import heartOpen from "../../../assets/heart_open.svg";

function Detalhes() {
    const {isFavorito, toggleFavorito} = useFavoritos();
    const {id_casa} = useParams();
    const [detalhes, setDetalhes] = useState(null);
    const [features_alowed, setFeaturesAlowed] = useState(null);
    const [anfitriao, setAnfitriao] = useState(null);
    const [galeria, setGaleria] = useState(null);
    const [comentario, setComentario] = useState(null);
    useEffect(() => {
        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}`)
            .then(resultado => {
                setDetalhes(resultado.data);
            });

        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/features`)
            .then(resultado => {
                setFeaturesAlowed(resultado.data.features);
            });

        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/host`)
            .then(resultado => {
                setAnfitriao(resultado.data);
            });

        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/photos`)
            .then(resultado => {
                setGaleria(resultado.data.photos);
            });

        axios.get(`https://m9-frontend.upskill.appx.pt/upbnb/casas/${id_casa}/reviews`)
            .then(resultado => {
                setComentario(resultado.data.reviews);
            });

    }, [id_casa]);

    const features = {
        "smokingAllowed": faSmoking,
        "petsAllowed": faDog,
        "wifi": faWifi,
        "washingMachine": faHeart,
        "microwave": faEnvelope,
        "airConditioner": faArrowDown,
        "tv": faTv,
        "fireplace": faFire,
    }

    let features_not_alowed = [];
    if(features_alowed) {
        features_not_alowed = Object.keys(features).filter(f => !features_alowed.includes(f))
    }

    return <div className="Detalhes">
        <div className={"Container"}>
            {!detalhes && <p>A carregar</p>}
            {detalhes && detalhes.length === 0 && <p>Sem resultados</p>}
            {detalhes && <div className={"casa"}>
                <h1>{detalhes.title}</h1>
                <div className={"lugar"}>
                    <div className={"rating"}>
                        <h3><FontAwesomeIcon icon={faStar}/></h3>
                        <h4>{detalhes.rating}</h4>
                    </div>
                    <div className={"ponto_box"}><div className={"ponto"}></div></div>
                    <h3 className={"cidade"}>{detalhes.city + ", " + detalhes.country} </h3>
                </div>
                <div className={"capa"}>
                    <div className={"imagem"} onClick={()=> {
                        toggleFavorito(detalhes.id)
                    }}>
                        <img src={isFavorito(detalhes.id) ? heartFull : heartOpen} alt={"Imagem coração"}/>
                    </div>
                    <div className={"foto"} style={{backgroundImage: `url('http://m9-frontend.upskill.appx.pt/upbnb/${detalhes.featured_photo}')`}}></div>
                </div>
                <div className={"preco"}>
                    <h3>{detalhes.price + "€"}</h3>
                    <h4>noite</h4>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>}

            <div className={"features"}>
                {!features_alowed && <p>A carregar</p>}
                {features_alowed && <div className={"features_alowed"}>
                    {features_alowed.map((l, i) => {
                        return <div key={i} className={"feature_content"}><div className={"feature_icon"}><FontAwesomeIcon className={"icon"} icon={features[l]}/></div></div>
                    })}
                </div>}
                {!features_not_alowed && <p>A carregar</p>}
                {features_not_alowed && <div className={"features_not_alowed"}>
                    {features_not_alowed.map((l, i) => {
                        return <div key={i} className={"feature_content"}><div className={"feature_icon"}><FontAwesomeIcon className={"icon"} icon={features[l]}/></div></div>
                    })}
                </div>}
            </div>

            {!anfitriao && <p>A carregar</p>}
            {anfitriao && anfitriao.length === 0 && <p>Sem resultados</p>}
            {anfitriao && <div className={"anfitriao"}>
                <h2>Sobre o anfitrião</h2>
                <div className={"anfitriao_dados"}>
                    <div className={"foto"}>
                        <img src={`http://m9-frontend.upskill.appx.pt/upbnb/${anfitriao.photo}`} alt={"Foto anfitrião"}/>
                    </div>
                    <div className={"anfitriao_name"}>
                        <h2>{anfitriao.name}</h2>
                        <div className={"rating"}>
                            <h3><FontAwesomeIcon icon={faStar}/></h3>
                            <h4>{anfitriao.rating}</h4>
                        </div>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>}

            {!galeria && <p>A carregar</p>}
            {galeria && detalhes.length === 0 && <p>Sem resultados</p>}
            {galeria && <div className={"galeria"}>
                <h2>Galeria</h2>
                {galeria.slice(1).map((g, i) => {
                    return <div key={i} className={"container_imagem"} style={{backgroundImage: `url('http://m9-frontend.upskill.appx.pt/upbnb/${g}')`}}></div>
                })}
            </div>}

            {!comentario && <p>A carregar</p>}
            {comentario && detalhes.length === 0 && <p>Sem resultados</p>}
            {comentario && <div className={"comentarios"}>
                <h2>Comentários</h2>
                {comentario.map((c, i) => <Comentario
                    key={i}
                    {...c}
                />)}
            </div>}
        </div>
    </div>;
}

export default Detalhes;