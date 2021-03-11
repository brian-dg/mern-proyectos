import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyecto from './components/proyectos/Proyectos';

import ProyectoState from './components/context/proyectos/proyectoState';
import TareaContext from './components/context/tareas/tareaContext';

  

function App() {
  return (

      <ProyectoState>
        <TareaContext.Provider>
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={Proyecto} />

        </Switch>

      </Router>
        </TareaContext.Provider>
      </ProyectoState>
  );
}

export default App;
