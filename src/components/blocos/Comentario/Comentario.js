import "./Comentario.scss";

function Comentario(props) {
    return <div className="Comentario">
        <div className={"topo"}>
            <div className={"foto"}>
                <img src={`http://m9-frontend.upskill.appx.pt/upbnb/${props.photo}`} alt={"Foto do cliente"}/>
            </div>
            <div className={"dados"}>
                <h3>{props.name}</h3>
                <h4>{props.date}</h4>
            </div>
        </div>
        <div className={"texto"}>
            <p>{props.comment}</p>
        </div>

    </div>;
}

export default Comentario;