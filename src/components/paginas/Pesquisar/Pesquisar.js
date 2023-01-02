import "./Pesquisar.scss";
import Casa from "../../blocos/Casa/Casa"
import {useEffect, useState} from "react";
import axios from "axios";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Pesquisar() {
    const [filtro, setFiltro] = useState("");
    const [pagina, setPagina] = useState(1);
    const [lista_casas, setListaCasas] = useState(null);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas', {params: {page: pagina, search: filtro}})
            .then(response => {
                //num_pages = response.data.pages;
                let lista = response.data.data;
                if(pagina === 1) {
                    setListaCasas(lista);
                } else {
                    let listaBig= [...lista_casas,...lista];
                    setListaCasas(listaBig);
                }
                setNumPages(response.data.pages);
            });
    }, [pagina, filtro]);

    useEffect(() => {
        setPagina(1);
    }, [filtro]);

    return <div className={"Pesquisar"}>
        <div className={"container_input"}>
            <FontAwesomeIcon className={"icone"} icon={faMagnifyingGlass}/>
            <input className={"pesquisarCasa"}
                   type="text"
                   placeholder="Procurar"
                   onChange={e => {
                       setFiltro(e.target.value)
                   }}
            />
        </div>

        <div className={"listaCasas"}>
            {!lista_casas && <p>A carregar</p>}
            {lista_casas && <>
                {lista_casas.length === 0 && <p>Sem resultados</p>}
                {lista_casas.map(l => <Casa
                    key={l.id}
                    {...l}
                />)}
                {numPages && <div className={"paginacao"}>
                    {lista_casas.length > 0 && pagina < numPages  && <div onClick={() => setPagina(pagina + 1)}>
                        mais resultados
                    </div>}
                </div>}
            </>}
        </div>
    </div>;
}

export default Pesquisar;