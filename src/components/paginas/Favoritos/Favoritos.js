import "./Favoritos.scss";
import {useFavoritos} from "../../../Providers/FavoritosContext";
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import Favorito from "../../blocos/Favorito/Favorito";

function Favoritos() {
    const {favoritos} = useFavoritos();
    let ids = favoritos.join(",");

    const [lista_casas, setListaCasas] = useState(null);
    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas?ids=' + favoritos)
            .then(response => setListaCasas(response.data.data));
    }, [favoritos]);

    const paises = [];

    if(lista_casas){
        lista_casas.map(c => {
            if(ids.includes(c.id) && !paises.includes(c.country))
                paises.push(c.country)
        })
    }

    return <div className="Favoritos">
        <div className={"Container"}>
            <h1>Favoritos</h1>
        </div>

        <div className={"listaFavoritos"}>
            {!lista_casas && <p>A carregar</p>}
            {lista_casas && <>
                {lista_casas.length === 0 && <p>Sem resultados</p>}
                {paises.map(p => <div key={p}><h1>{p}</h1>
                    {lista_casas.map(l => {
                        if(p === l.country){
                            return <Favorito
                                key={l.id}
                                {...l}
                            />
                        }
                    })}
                </div>)}
            </>}
        </div>
    </div>;
}

export default Favoritos;