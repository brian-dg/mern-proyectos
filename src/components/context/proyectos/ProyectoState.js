import React, {useState} from 'react';


import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';


const ProyectoState = props => {
    const initialState = {
        Formulario: false
    }


// Dispatch para ejecutar las acciones
const [state,dispatch] = useReducer (proyectoReducer, initialState)

//serie de funciones para el crud



return (

    <proyectoContext.Provider
        value={{
            Formulario : state.Formulario
        }}>
        {props.children}
    </proyectoContext.Provider>
)

}

export default ProyectoState;