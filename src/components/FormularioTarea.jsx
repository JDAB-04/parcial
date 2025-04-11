import { useState } from "react";
import axios from "axios";

const FormularioTarea = ({onTareaAgregada}) =>{
    const [titulo, setTitulo] = useState("");
    const [estado, setEstado] = useState("pending");
    const [error, setError] = useState("");

    const handleSubmit = async (err) => {
        err.preventDefault();

        if (titulo.trim() === ""){
            setError("¡El titulo no puede estar vaco!");
            return;
        }

        const NuevaTarea = {
            title: titulo,
            completed: estado === "completed",
            userId: 1,
        };

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/todos", NuevaTarea);
            onTareaAgregada(response.data); //Actualiza la lista
            setTitulo("");
            setEstado("pending");
            setError("");
          } catch (err) {
            console.error("Error al crear la tarea:", err.response || err.message || err);
            setError("¡Error al crear la tarea!");
        }
    };

    return (
        <form className="formulario-tarea" onSubmit={handleSubmit}>
          <h3>Agregar Nueva Tarea</h3>
          <input
            type="text"
            placeholder="Título de la tarea"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <select value={estado} onChange={(e) => setEstado(e.target.value)}>
            <option value="pending">Pendiente</option>
            <option value="completed">Completada</option>
          </select>
          <button type="submit">Agregar</button>
          {error && <p className="error">{error}</p>}
        </form>
    );
};

export default FormularioTarea;