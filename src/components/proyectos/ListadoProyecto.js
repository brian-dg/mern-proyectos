import React from 'react';
import Proyecto from './Proyecto';


const ListadoProyecto = () => {

    const proyecto = [

        {nombre:'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Dieseño de Sitio Web'}
]

    return (

        <ul className="listado-proyectos">
            {proyecto.map(proyecto => (
                <Proyecto
                proyecto={proyecto}/>
            ))}
        </ul>
    )
}

export default ListadoProyecto;
