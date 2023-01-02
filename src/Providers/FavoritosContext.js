import React from "react";
import {useState} from "react";

// Cria um contexto abstrato para fazer a passagem dos dados
const FavoritosContext = React.createContext();

// Cria uma caixa em volta do contexto para se comportar como um provedor
function ProviderFavoritos(props) {

    // Trazida da APP para cá, agora passa a ser uma variável global
    const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("historico")) || []);

    //console.log(favoritos);
    const isFavorito = (casa_id) => {
        return favoritos.includes(casa_id);
    }

    function toggleFavorito(casa_id) {
        let clone = [...favoritos];
        if (isFavorito(casa_id)) {
            // Remover
            clone.splice(clone.indexOf(casa_id), 1);
        } else {
            // Adicionar
            clone.push(casa_id);
        }
        localStorage.setItem("historico", JSON.stringify(clone));
        setFavoritos(clone);
    }

    // Criação de um componente que vai estar a volta do resto
    // Toda a app vai estar dentro do provider
    return <FavoritosContext.Provider value={{favoritos, setFavoritos, isFavorito, toggleFavorito}}>
        {props.children}
    </FavoritosContext.Provider>
}

function useFavoritos() {
    return React.useContext(FavoritosContext);
}

export {useFavoritos, ProviderFavoritos};