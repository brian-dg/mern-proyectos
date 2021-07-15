import { findAllByDisplayValue } from '@testing-library/dom';
import React, {Fragment, useContext}from 'react';
import Tarea from './Tarea';

import proyectoContext from '../context/proyectos/ProyectoContext';
import tareaContext from '../context/tareas/tareaContext';


const ListadoTareas  = () => {

    //Extraer proyectos del state inicial
const proyectosContext = useContext (proyectoContext);
const {proyectos,eliminarProyecto} = proyectosContext;

//Obtener las tareas del proyecto 
const tareasContext = useContext(tareaContext);
const {tareasproyecto} = tareasContext; 

//Si no hay proyecto seleccionado
if (!proyectos) return <h2>Seleccione un proyecto</h2>


// Array destructuring para extraer el proyecto actual 
const [proyectoActual ]= proyectos;

//elimina un proyecto
const onclickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
}
    return (
        <Fragment> 
            <h2>proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)  
                    : tareasproyecto.map (tarea => (
                        <Tarea
                        tarea = {tarea}/>
                    ))
                }
            </ul>
            <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={onclickEliminar}
                    >Eliminar Proyecto &times;
            </button>
        </Fragment>
    )
}

export default ListadoTareas;