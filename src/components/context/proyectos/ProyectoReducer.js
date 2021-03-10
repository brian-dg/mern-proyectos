import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO} from "../../types";



export default (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyecto: action.payload

            }

            case AGREGAR_PROYECTO:
                return {
                    ...state,
                    proyecto: [...state.proyecto, action.payload], formulario:false
                }

        default:
            return state;
    }
}