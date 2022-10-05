import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Rutas, Ruta1, Ruta2, Ruta3} from './pages/Rutas';
import Inicio from './pages/Inicio';
import Consultas from './pages/Consulta';
import Contacto from './pages/Contacto';
import Conclusiones from './pages/Conclusiones';
import Pregunta from './pages/Pregunta';

//import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/inicio' exact component={Inicio} />
        <Route path='/rutas' exact component={Rutas} />
        <Route path='/rutas/ruta1' exact component={Ruta1} />
        <Route path='/rutas/ruta2' exact component={Ruta2} />
        <Route path='/rutas/ruta3' exact component={Ruta3} />
        <Route path='/consulta' exact component={Consultas} />
        <Route path='/contacto' exact component={Contacto} />
        <Route path='/conclusion' exact component={Conclusiones} />
        <Route path='/pregunta' exact component={Pregunta} />
      </Switch>
    </Router>
  );
}

export default App;
