import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyecto from './components/proyectos/Proyectos';

import ProyectoState from './components/context/proyectos/ProyectoState';
import TareaState from './components/context/tareas/tareaState';

  

function App() {
  return (

      <ProyectoState>
        <TareaState>
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyecto} />

        </Switch>

      </Router>
        </TareaState>
      </ProyectoState>
  );
}

export default App;
