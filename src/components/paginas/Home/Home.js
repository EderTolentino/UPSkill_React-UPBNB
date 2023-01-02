import "./Home.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Reserva from "../../blocos/Reserva/Reserva";

function Home() {
    const [lista_atuais, setListaAtuais] = useState(null);
    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas/current')
            .then(response => setListaAtuais(response.data.data));
    }, []);

    const [lista_passadas, setListaPassadas] = useState(null);
    useEffect(() => {
        axios.get('https://m9-frontend.upskill.appx.pt/upbnb/casas/past')
            .then(response => setListaPassadas(response.data.data));
    }, []);

    return <div className="Home">
        <div className={"Container"}>
            <h1 className={"titles"}>Bem-vindo(a)</h1>
            <h3 className={"titles"}>Ao seu perfil</h3>
            <h3 className={"titles"}>As minhas reservas</h3>
            {!lista_atuais && <p>A carregar</p>}
            {lista_atuais && <>
                {lista_atuais.length === 0 && <p>Sem resultados</p>}
                {lista_atuais.map(l => <Reserva
                    key={l.id}
                    {...l}
                />)}
            </>}
            <h3 className={"titles"}>Reservas passadas</h3>
            {!lista_passadas && <p>A carregar</p>}
            {lista_passadas && <>
                {lista_passadas.length === 0 && <p>Sem resultados</p>}
                {lista_passadas.map(l => <Reserva
                    key={l.id}
                    {...l}
                />)}
            </>}
        </div>
    </div>;
}

export default Home;