import React, {useContext, useEffect} from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../context/proyectos/proyectoContext';



const ListadoProyecto = () => {
    //extraer proyectos de state inicial



    const proyectosContext = useContext(proyectoContext);
    const {proyecto, obtenerProyectos} = proyectosContext;

    //obtener proyectos cuando carga el componente
    useEffect(() =>{
        obtenerProyectos();
    }, []);

    // Revisar si proyecto tiene contenido 
    if(proyecto.length === 0) return null;

    

    return (


        <ul className="listado-proyectos">
            {proyecto.map( proyecto => (
                <Proyecto
                key={proyecto.id}
                proyecto={proyecto}/>
            ))}
        </ul>
    )
}

export default ListadoProyecto;
