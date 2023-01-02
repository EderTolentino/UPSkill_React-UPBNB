import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Home from "./components/paginas/Home/Home";
import Detalhes from "./components/paginas/Detalhes/Detalhes";
import Pesquisar from "./components/paginas/Pesquisar/Pesquisar"
import Favoritos from "./components/paginas/Favoritos/Favoritos";
import Navegacao from "./components/layout/Navegacao/Navegacao";
import {ProviderFavoritos} from "./Providers/FavoritosContext";

function App() {
  return (
      <ProviderFavoritos>
          <BrowserRouter>
              <div className="App">
                  <Switch>
                      <Route path="/home" component={Home}/>
                      <Route path="/detalhes/:id_casa" component={Detalhes}/>
                      <Route path="/pesquisar" component={Pesquisar}/>
                      <Route path="/favoritos" component={Favoritos}/>
                      <Redirect to={"/home"}/>
                  </Switch>
                  <Navegacao/>
              </div>
          </BrowserRouter>
      </ProviderFavoritos>
  );
}

export default App;
