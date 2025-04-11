import { useEffect, useState } from "react";
import FormularioTarea from "./FormularioTarea.jsx";
import axios from "axios";

const ListaTarea = ({ filter }) => {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Obtener tareas
  const fetchTarea = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTareas(response.data);//alacenar las tareas 
    } catch (err) {
      setError("Ha ocurrido un error al cargar las tareas :((");
    } finally {
      setLoading(false);
    }
  };
  //Cargar las tareas en el componente
  useEffect(() => {
    fetchTarea();
  }, []);

  //Actualizar al agregar tareas
  const agregarTarea = (nuevaTarea) => {
    setTareas((prev) => [nuevaTarea, ...prev]);
  };  

  //Filtro de la tareas
  const tareasFiltradas = filter
    ? tareas.filter((tarea) => tarea.completed === (filter === "completed"))
    : tareas;

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="task-list"> {/*Carga el formulario y las tareas con su clasificacion*/}
      <FormularioTarea onTareaAgregada={agregarTarea} />
      <h2>
          {filter === "completed"
            ? "Tareas Completadas"
            : filter === "pending"
            ? "Tareas Pendientes"
            : "Todas las Tareas"
          }
      </h2>

      <ul>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} className={tarea.completed ? "done" : "pending"}>
            {tarea.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarea;
