import { useParams } from "react-router-dom";
import ListaTarea from "../components/ListaTarea";

const FiltroTarea = () => {
  const { status } = useParams();

  //Valida que solo se acepten 'completed' o 'pending'
  const filter = status === "completed" || status === "pending" ? status : null;
    //Se cargan las tareas con el filtro correspondiente
    return <ListaTarea filter={filter} />

};

export default FiltroTarea;
