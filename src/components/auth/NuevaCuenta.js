import React, {useState} from 'react'
import {Link} from 'react-router-dom';



const NuevaCuenta = () => {

    //state para iniciar sesion
    const [usuario, guardarUsuario] = useState ({
        nombre: '',
        email: '',
        password: '',
        confirmar:''
    });
    
    //Extraer de usuario 
    const {nombre,email, password, confirmar} = usuario;
    

    const onChange = e => {
    guardarUsuario ({
        ...usuario,
        [e.target.name] : e.target.value
    })

    }

    //Cuando el usuario quiere ingresar sesion
    const onSubmit = e => {
        e.preventDefault();

        //validar que no halla campos vacios 


        //Passwor minimo 6 caracteres

        
        //los 2 password son iguales


        //pasar al action 
    }
    
    return ( 

    <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Obtener una Cuenta</h1>
            <form
                onSubmit={onSubmit}>

                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        placeholder="Tu Nombre"
                        onChange= {onChange}/>
                </div>

                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Tu Email"
                        onChange= {onChange}/>
                </div>

                <div className="campo-form">
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Tu Password"
                        onChange= {onChange}/>
                </div>

                <div className="campo-form">
                    <label htmlFor="confirmar">Repite Password</label>
                    <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        value={confirmar}
                        placeholder="Repite tu Password"
                        onChange= {onChange}/>
                </div>

            
                <div className="campo-form">
                    <input type="submit" className="btn btn-primario btn-block" value="Registrarme"></input>
                </div>
            </form>
            <Link to={'/'} className="enlace-cuenta">
                Volver a Iniciar Sesion
            </Link>
        </div>
    </div>
    );
}

export default NuevaCuenta;