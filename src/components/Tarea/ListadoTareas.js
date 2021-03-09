import { findAllByDisplayValue } from '@testing-library/dom';
import React, {Fragment}from 'react';
import Tarea from './Tarea';


const ListadoTareas  = () => {

const tareasProyecto = [
    {nombre: 'elegir plataforma', estado: true},
    {nombre: 'elegir colores', estado: false},
    {nombre: 'elegir forma de pago', estado: false},
    {nombre: 'elegir hosting', estado: true},
];


    return (
        <Fragment> 
            <h2>Tienda Virtual</h2>

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
                    >Eliminar Proyecto &times;
            </button>
        </Fragment>
    )
}

export default ListadoTareas;