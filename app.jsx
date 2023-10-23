import React, { useState, useEffect } from 'react';


function TuComponente() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comentarios, setComentarios] = useState([]);

  // Cargar comentarios desde el localStorage al cargar la página
  useEffect(() => {
    const storedComentarios = JSON.parse(localStorage.getItem('comentarios'));
    if (storedComentarios) {
      setComentarios(storedComentarios);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoComentario = { nombre, mensaje };
    setComentarios([...comentarios, nuevoComentario]);
    setNombre('');
    setMensaje('');
  };

  // Guardar comentarios en el localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('comentarios', JSON.stringify(comentarios));
  }, [comentarios]);

  return (
    <div>
      <h1>Comentarios</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div>
        <h2>Lista de Comentarios:</h2>
        <ul>
          {comentarios.map((comentario, i) => (
            <li key={i}>
              <strong>{comentario.nombre}:</strong> {comentario.mensaje}
            </li>
          ))}
        </ul>
      </div>

     
    </div>
  );
}

export default TuComponente;


