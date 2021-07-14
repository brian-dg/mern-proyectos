import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';


const TareaState = props => {
    const initialState = {
        tareas: [
    {nombre: 'elegir plataforma', estado: true, proyectoId: 1},
    {nombre: 'elegir colores', estado: false, proyectoId: 2},
    {nombre: 'elegir forma de pago', estado: false, proyectoId: 3},
    {nombre: 'elegir hosting', estado: true, proyectoId:4},
    {nombre: 'elegir plataforma', estado: true, proyectoId: 1},
    {nombre: 'elegir colores', estado: false, proyectoId: 2},
    {nombre: 'elegir forma de pago', estado: false, proyectoId: 3},
    {nombre: 'elegir plataforma', estado: true, proyectoId: 4},
    {nombre: 'elegir colores', estado: false, proyectoId: 1},
    {nombre: 'elegir forma de pago', estado: false, proyectoId: 2},
    {nombre: 'elegir plataforma', estado: true, proyectoId: 3},
    {nombre: 'elegir colores', estado: false, proyectoId: 4},
    {nombre: 'elegir forma de pago', estado: false, proyectoId: 3}
        ],
    }

    //crear dispatcch y state
    const [state,dispatch] = useReducer (TareaReducer, initialState);

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas
            }}>
            
            {props.children}

        </TareaContext.Provider>

    )


}

export default TareaState;