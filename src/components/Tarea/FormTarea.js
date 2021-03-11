import React, {useContext} from 'react';

import proyectoContext from '../context/proyectos/proyectoContext';

const FormTarea = () => { 

      //Extraer si un proyectos esta activo
const proyectosContext = useContext (proyectoContext);
const {proyectos } = proyectosContext;


    //Si no hay proyecto seleccionado
    if (!proyectos) return null


    // Array destructuring para extraer el proyecto actual 
    const [proyectoActual ]= proyectos;

return (
    <div className = "formulario">
        <form>
            <div className="contenedor-input">
            <input
                type="text"
                className="input-text"
                name="nombre"
                placeholder="Nombre de Tarea" />
            </div>

            <div className="contenedor-input">
                <input
                    type="submit"
                    className="btn btn-block btn-submit btn-primario"
                    value="Agregar Tarea"
                    />

            </div>
        </form>
    </div>
)
}

export default FormTarea;