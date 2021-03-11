import { findAllByDisplayValue } from '@testing-library/dom';
import React, {Fragment, useContext}from 'react';
import Tarea from './Tarea';


import proyectoContext from '../context/proyectos/proyectoContext';


const ListadoTareas  = () => {

    //Extraer proyectos del state inicial
const proyectosContext = useContext (proyectoContext);
const {proyectos,eliminarProyecto} = proyectosContext;

//Si no hay proyecto seleccionado
if (!proyectos) return <h2>Seleccione un proyecto</h2>


// Array destructuring para extraer el proyecto actual 
const [proyectoActual ]= proyectos;

const tareasProyecto = [
    {nombre: 'elegir plataforma', estado: true},
    {nombre: 'elegir colores', estado: false},
    {nombre: 'elegir forma de pago', estado: false},
    {nombre: 'elegir hosting', estado: true},
];

//elimina un proyecto
const onclickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
}
    return (
        <Fragment> 
            <h2>proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">

            {tareasProyecto.length === 0
                ? (<li className="tarea"><p>No hay tareas</p></li>)  
                : tareasProyecto.map (tarea => (
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