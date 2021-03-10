import React, { useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO} from '../../types';



const ProyectoState = props => {

    const proyecto = [
        {id:1, nombre:'Tienda Virtual'},
        {id:2, nombre: 'Intranet'},
        {id:3, nombre: 'Dieseño de Sitio Web'},
        {id:4, nombre: 'MERN'}
    ]
        const initialState = {
            proyecto: [],
            formulario: false
        }
        


// Dispatch para ejecutar las acciones

const [state, dispatch] = useReducer(proyectoReducer, initialState) 

//serie de funciones para el crud


const mostrarFormulario = () => {
    dispatch ({
        type: FORMULARIO_PROYECTO
    })
}

//Obtener los proyectos
const obtenerProyectos = () => {
    dispatch ({
        type: OBTENER_PROYECTOS,
        payload: proyecto 
    })
}



//Agregar nuevos proyectos 
const agregarProyecto = proyecto => {

    proyecto.id = uuidv4();

    //insertar el proyecto en el state
    dispatch ({
        type:AGREGAR_PROYECTO,
        payload: proyecto
    })

}

return (

    <proyectoContext.Provider
        value={{
            proyecto: state.proyecto,
            formulario : state.formulario,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto
        }}>
        {props.children}
    </proyectoContext.Provider>
)

}




export default ProyectoState;